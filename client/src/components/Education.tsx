
import { GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      icon: GraduationCap,
      institution: "Odisha University of Technology and Research (OUTR)",
      degree: "Bachelor of Technology",
      field: "Electronics and Communication Engineering",
      period: "2023 – Present",
      detail: "CGPA: 8.59",
    },
    {
      icon: BookOpen,
      institution: "Mother's Public School",
      degree: "CBSE XII (Science PCM)",
      field: "",
      period: "2023",
      detail: "Percentage: 86.4%",
    },
    {
      icon: BookOpen,
      institution: "Mother's Public School",
      degree: "CBSE X",
      field: "",
      period: "2021",
      detail: "Percentage: 94.6%",
    },
  ];

  return (
    <section id="education" className="py-16 bg-muted/30" aria-labelledby="education-heading">
      <div className="section-container">
        <h2 id="education-heading" className="section-title">Education</h2>

        <div className="space-y-6 max-w-3xl">
          {education.map((item, index) => (
            <div
              key={`${item.institution}-${item.degree}`}
              className="flex items-start gap-4 bg-card rounded-lg p-6 shadow-sm border animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mt-1 bg-primary/10 rounded-full p-2 shrink-0">
                <item.icon size={20} className="text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{item.institution}</h3>
                <p className="text-muted-foreground">{item.degree}</p>
                {item.field && (
                  <p className="text-sm text-muted-foreground">{item.field}</p>
                )}
                <p className="text-sm text-muted-foreground mt-1">
                  {item.period} • {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
