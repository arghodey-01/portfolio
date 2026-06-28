
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
    <section id="education" className="py-16 md:py-24 bg-[#0a0a0f]" aria-labelledby="education-heading">
      <div className="section-container">
        <h2 id="education-heading" className="section-title">Education</h2>

        <div className="space-y-6 max-w-3xl">
          {education.map((item, index) => (
            <div
              key={`${item.institution}-${item.degree}`}
              className="flex items-start gap-4 rounded-xl border border-white/10 bg-[#12121a] p-6 animate-fadeIn hover:border-[#00d4ff]/20 transition-colors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mt-1 rounded-full bg-[#00d4ff]/10 p-2 shrink-0">
                <item.icon size={20} className="text-[#00d4ff]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">{item.institution}</h3>
                <p className="text-white/60">{item.degree}</p>
                {item.field && (
                  <p className="text-sm text-white/50">{item.field}</p>
                )}
                <p className="text-sm text-white/40 mt-1">
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
