const TEXT =
  "YET:FAB  •  Elevating spaces with innovative designs  •  Sustainably crafted with precision  •  Digital fabrication for architecture and design  •  Tel Aviv  •  ";

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-[#DCDAD5] py-3 bg-[#EDEDEB] select-none">
      <div
        className="inline-flex whitespace-nowrap"
        style={{ animation: "marquee-scroll 38s linear infinite" }}
      >
        <span className="text-[0.68rem] tracking-[0.06em] text-[#0A0A0A] pr-0">
          {TEXT}
        </span>
        <span className="text-[0.68rem] tracking-[0.06em] text-[#0A0A0A] pr-0">
          {TEXT}
        </span>
      </div>
    </div>
  );
}
