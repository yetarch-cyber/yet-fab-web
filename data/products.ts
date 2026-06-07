export type Product = {
  id: string;
  name: string;
  prefix: string;
  displayName: string;
  type: string;
  description: string;
  image: string;
  shopUrl: string;
};

export const products: Product[] = [
  {
    id: "alherd-floor",
    name: "ALHERD",
    prefix: "Floor lamp",
    displayName: '"ALHERD"',
    type: "Floor lamp",
    description:
      "3D-printed floor lamp with organic perforated structure. Warm light filters through the latticed mineral-like shell.",
    image: "/images/products/alherd-floor.jpg",
    shopUrl: "#",
  },
  {
    id: "alherd-pendant",
    name: "ALHERD",
    prefix: "Pendant lamp",
    displayName: '"ALHERD"',
    type: "Pendant lamp",
    description:
      "Horizontally oriented pendant with a textured lattice form. A continuous, otherworldly surface of light.",
    image: "/images/products/alherd-pendant.jpg",
    shopUrl: "#",
  },
  {
    id: "alherd-table",
    name: "ALHERD",
    prefix: "Table lamp",
    displayName: '"ALHERD"',
    type: "Table lamp",
    description:
      "Compact table lamp with a perforated mineral-like shell. Organic form, warm presence.",
    image: "/images/products/alherd-table.jpg",
    shopUrl: "#",
  },
  {
    id: "baklan-table",
    name: "BAKLAN",
    prefix: "Table lamp",
    displayName: '"BAKLAN"',
    type: "Table lamp",
    description:
      "Layered translucent 3D-printed shade with a cone silhouette and warm amber glow.",
    image: "/images/products/baklan-table.jpg",
    shopUrl: "#",
  },
  {
    id: "thick",
    name: "THICK",
    prefix: "Candleholder",
    displayName: '"THICK"',
    type: "Candleholder",
    description:
      "Structural lattice candleholder. Bold, architectural form in matte white ceramic-finish resin.",
    image: "/images/products/thick.jpg",
    shopUrl: "#",
  },
  {
    id: "parasite",
    name: "PARASITE",
    prefix: "",
    displayName: "PARASITE X IKEA",
    type: "PARASITE X IKEA",
    description:
      "Organic 3D-printed attachment that transforms standard IKEA furniture into something unexpected.",
    image: "/images/products/parasite.jpg",
    shopUrl: "#",
  },
];
