import { Cpu, CircuitBoard, Wrench, Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import CircuitDecor from "./portfolio/CircuitDecor";
import LaptopMockup from "./portfolio/LaptopMockup";

const specialtyItems = [
  { icon: Cpu, label: "VLSI Design", accent: "text-[#00d4ff]" },
  { icon: CircuitBoard, label: "Digital Systems", accent: "text-[#ff6b35]" },
  { icon: Wrench, label: "EDA Tools", accent: "text-[#ffd600]" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/arghodey-01", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/asim-dey-ba1899394/", icon: Linkedin },
  { name: "Email", href: "mailto:asimdy01@gmail.com", icon: Mail },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#08080e] pt-24 pb-8"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <span className="portfolio-watermark font-display whitespace-nowrap text-[clamp(4rem,18vw,14rem)] font-black uppercase tracking-[0.08em] text-white/[0.04]">
          PORTFOLIO
        </span>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.08),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(255,107,53,0.06),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 animate-fadeIn md:mb-14">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.35em] text-[#00d4ff]/80">
            Electronics &amp; Communication Engineering
          </p>
          <h1
            id="hero-heading"
            className="font-display text-4xl font-bold uppercase tracking-[0.12em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Asim Dey
          </h1>
          <p className="mt-3 max-w-xl text-sm text-white/50 sm:text-base">
            Aspiring VLSI · Digital Design · FPGA · ASIC Engineer
          </p>
        </header>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-6 xl:gap-8">
          {/* Profile */}
          <div className="animate-slideInLeft lg:col-span-3">
            <div className="relative mx-auto max-w-[280px] overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f18] p-1 shadow-2xl shadow-black/50">
              <CircuitDecor />
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#0a0a12]">
                <img
                  src="/profile.jpeg"
                  alt="Asim Dey wearing a white shirt and lanyard"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080e] via-transparent to-transparent opacity-80" />
              </div>
              <div className="relative border-t border-white/5 px-4 py-3">
                <p className="font-display text-sm font-semibold tracking-wider text-white">ASIM DEY</p>
                <p className="text-xs text-white/45">OUTR · ECE · Bhubaneswar</p>
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-3 lg:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="rounded-full border border-white/10 bg-white/5 p-2.5 text-white/60 transition-all hover:border-[#00d4ff]/40 hover:bg-[#00d4ff]/10 hover:text-[#00d4ff]"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Laptop */}
          <div className="animate-scaleIn lg:col-span-6">
            <LaptopMockup />
            <p className="mt-6 text-center text-xs uppercase tracking-[0.25em] text-white/30">
              Digital Design · Semiconductor Technology
            </p>
          </div>

          {/* Specialty icons */}
          <div className="animate-slideInRight lg:col-span-3">
            <div className="mx-auto flex max-w-xs flex-row justify-center gap-8 lg:mx-0 lg:flex-col lg:gap-10">
              {specialtyItems.map(({ icon: Icon, label, accent }) => (
                <div key={label} className="group flex flex-col items-center gap-3 lg:flex-row lg:items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.06]">
                    <Icon className={`h-6 w-6 ${accent}`} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <span className="text-center text-xs font-medium uppercase tracking-[0.2em] text-white/60 lg:text-left">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center animate-fadeIn delay-300">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-white/40 transition-colors hover:text-[#ffd600]"
            aria-label="Scroll to about section"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">Explore</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
