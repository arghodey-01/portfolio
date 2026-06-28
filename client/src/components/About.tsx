
const About = () => {
  return (
    <section id="about" className="py-16 bg-muted/30" aria-labelledby="about-heading">
      <div className="section-container">
        <h2 id="about-heading" className="section-title">About Me</h2>

        <div className="max-w-3xl space-y-4 animate-fadeIn">
          <p className="text-lg">
            I am currently pursuing a Bachelor of Technology in Electronics and Communication Engineering
            at Odisha University of Technology and Research (OUTR). I enjoy working on digital electronics,
            circuit design, FSMs, Verilog, and semiconductor technologies.
          </p>
          <p>
            My goal is to become a VLSI Design Engineer and contribute to next-generation chip design.
          </p>

          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-5 mt-6">
            <h3 className="text-lg font-semibold mb-2">Experience</h3>
            <p className="text-muted-foreground">
              Currently seeking internships and opportunities in VLSI Design, Digital Design,
              FPGA Development, and Semiconductor Engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
