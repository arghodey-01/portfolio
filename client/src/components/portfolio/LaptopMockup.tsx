const LaptopMockup = () => (
  <div className="relative mx-auto w-full max-w-[520px] animate-float" aria-hidden="true">
    <div className="relative rounded-t-xl border border-white/10 bg-[#1a1a24] p-3 shadow-2xl shadow-[#00d4ff]/10">
      <div className="mb-2 flex items-center gap-1.5 px-1">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b35]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffd600]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#00d4ff]" />
      </div>

      <div className="overflow-hidden rounded-md border border-white/5 bg-[#0d0d14]">
        <div className="border-b border-white/5 px-3 py-2">
          <div className="flex items-center justify-between">
            <span className="font-display text-[10px] font-semibold tracking-[0.2em] text-white/90">
              ASIM DEY
            </span>
            <div className="flex gap-2">
              <span className="h-1 w-6 rounded bg-[#00d4ff]/40" />
              <span className="h-1 w-6 rounded bg-white/20" />
              <span className="h-1 w-6 rounded bg-white/20" />
            </div>
          </div>
        </div>

        <div className="space-y-2 p-3">
          <div className="rounded bg-gradient-to-r from-[#00d4ff]/20 to-[#ff6b35]/10 p-3">
            <p className="font-display text-[9px] font-bold tracking-widest text-[#00d4ff]">
              PORTFOLIO
            </p>
            <p className="mt-1 text-[8px] leading-relaxed text-white/60">
              VLSI · Digital IC · FPGA · ASIC
            </p>
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            <div className="h-8 rounded bg-[#ffd600]/80" />
            <div className="h-8 rounded bg-white/10" />
            <div className="h-8 rounded bg-white/10" />
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            <div className="h-14 rounded border border-[#00d4ff]/20 bg-[#00d4ff]/5 p-2">
              <div className="mb-1 h-1 w-8 rounded bg-[#00d4ff]/60" />
              <div className="h-1 w-full rounded bg-white/10" />
              <div className="mt-1 h-1 w-3/4 rounded bg-white/10" />
            </div>
            <div className="h-14 rounded border border-[#ff6b35]/20 bg-[#ff6b35]/5 p-2">
              <div className="mb-1 h-1 w-8 rounded bg-[#ff6b35]/60" />
              <div className="h-1 w-full rounded bg-white/10" />
              <div className="mt-1 h-1 w-2/3 rounded bg-white/10" />
            </div>
          </div>

          <div className="flex gap-1">
            {["Skills", "Projects", "Contact"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/10 px-2 py-0.5 text-[7px] text-white/50"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="relative mx-auto h-3 w-[108%] -translate-x-[4%] rounded-b-xl border-x border-b border-white/10 bg-gradient-to-b from-[#252532] to-[#14141c]">
      <div className="absolute left-1/2 top-0 h-1 w-16 -translate-x-1/2 rounded-b bg-[#2a2a38]" />
    </div>
    <div className="mx-auto mt-1 h-1 w-[45%] rounded-full bg-white/10" />
  </div>
);

export default LaptopMockup;
