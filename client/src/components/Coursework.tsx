
const Coursework = () => {
  const courses = [
    "Digital Electronics",
    "Analog Circuits",
    "Signals & Systems",
    "Communication Systems",
    "Microprocessors",
    "CMOS Technology",
    "VLSI Design",
  ];

  return (
    <section id="coursework" className="py-16 bg-muted/30" aria-labelledby="coursework-heading">
      <div className="section-container">
        <h2 id="coursework-heading" className="section-title">Coursework</h2>

        <div className="flex flex-wrap gap-3 justify-center animate-fadeIn">
          {courses.map((course) => (
            <span key={course} className="skill-badge">
              {course}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coursework;
