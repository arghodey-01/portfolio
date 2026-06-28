const About = () => {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="bg-[#ffd600] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <h2
                id="about-heading"
                className="font-display text-5xl font-black uppercase tracking-[0.15em] text-[#0a0a0f] sm:text-6xl md:text-7xl"
              >
                About
              </h2>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#0a0a0f]/60">
                Engineer · Innovator · Builder
              </p>
            </div>

            <div className="space-y-5 lg:col-span-8">
              <p className="text-lg leading-relaxed text-[#0a0a0f]/90 sm:text-xl">
                I am passionate about semiconductor technology, digital IC design, and creative
                problem-solving — turning complex hardware challenges into elegant, precise solutions.
              </p>
              <p className="leading-relaxed text-[#0a0a0f]/75">
                Currently pursuing Electronics and Communication Engineering at Odisha University of
                Technology and Research (OUTR), I work on digital electronics, circuit design, FSMs,
                Verilog, and semiconductor technologies. My goal is to become a VLSI Design Engineer
                and contribute to next-generation chip design.
              </p>
              <div className="inline-block rounded-lg border-2 border-[#0a0a0f]/15 bg-[#0a0a0f]/5 px-5 py-4">
                <p className="text-sm font-medium text-[#0a0a0f]/80">
                  Currently seeking internships and opportunities in VLSI Design, Digital Design,
                  FPGA Development, and Semiconductor Engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
