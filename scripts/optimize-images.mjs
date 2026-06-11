// Batch image optimizer for YET:FAB.
// Compresses JPEG/PNG in public/images in place: max 2400px wide, quality 82.
// Writes via a tmp file to avoid Windows file-lock errors.
import sharp from "sharp";
import { readdir, stat, rename, unlink } from "node:fs/promises";
import { join, extname } from "node:path";

const ROOT = "public/images";
const MAX_W = 2400;
const JPEG_Q = 82;
const PNG_Q = 80;

let totalBefore = 0;
let totalAfter = 0;
let count = 0;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) {
      await walk(p);
    } else {
      const ext = extname(e.name).toLowerCase();
      if ([".jpg", ".jpeg", ".png"].includes(ext)) await optimize(p, ext);
    }
  }
}

async function optimize(p, ext) {
  try {
    const before = (await stat(p)).size;
    const img = sharp(p).rotate(); // respect EXIF orientation
    const meta = await img.metadata();

    let pipeline = img;
    if (meta.width && meta.width > MAX_W) {
      pipeline = pipeline.resize({ width: MAX_W });
    }
    if (ext === ".png") {
      pipeline = pipeline.png({ quality: PNG_Q, compressionLevel: 9 });
    } else {
      pipeline = pipeline.jpeg({ quality: JPEG_Q, mozjpeg: true });
    }

    const tmp = p + ".tmp";
    await pipeline.toFile(tmp);
    const after = (await stat(tmp)).size;

    if (after < before) {
      await unlink(p);
      await rename(tmp, p);
      totalBefore += before;
      totalAfter += after;
      count++;
      console.log(
        `${p}  ${(before / 1024 / 1024).toFixed(1)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB`
      );
    } else {
      await unlink(tmp);
    }
  } catch (err) {
    console.error(`SKIP ${p}: ${err.message}`);
  }
}

await walk(ROOT);
console.log(
  `\nDone. ${count} files. ${(totalBefore / 1024 / 1024).toFixed(1)}MB -> ${(totalAfter / 1024 / 1024).toFixed(1)}MB (saved ${((1 - totalAfter / totalBefore) * 100).toFixed(0)}%)`
);
