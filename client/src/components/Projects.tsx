
import { Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Astable Multivibrator using 555 Timer",
      period: "July 2025",
      description: "Developed an astable multivibrator using the 555 Timer IC for continuous pulse generation. Optimized frequency and duty cycle using RC components. Validated performance through simulation and hardware testing.",
      technologies: ["555 Timer", "Proteus", "LTSpice", "Breadboard", "RC Circuit"],
    },
    {
      title: "MOD-16 Counter",
      period: "June 2025",
      description: "Designed and implemented a MOD-16 binary counter using flip-flops. Verified timing behavior through simulation and hardware implementation.",
      technologies: ["JK Flip-Flops", "Logic Gates", "Logisim", "Proteus", "74xx IC"],
    },
    {
      title: "Sequence Detector (FSM)",
      period: "June 2025",
      description: "Designed a sequence detector using Mealy/Moore FSM architecture. Simulated and validated timing behavior and output response.",
      technologies: ["FSM", "Verilog", "VHDL", "ModelSim", "Logisim"],
    },
  ];

  return (
    <section id="projects" className="py-16" aria-labelledby="projects-heading">
      <div className="section-container">
        <h2 id="projects-heading" className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="project-card animate-fadeIn"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                
                <div className="flex items-center text-sm text-muted-foreground gap-1">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <time dateTime={project.period}>{project.period}</time>
                </div>
                
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
