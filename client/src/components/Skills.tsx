
import { Code, Cpu, Layers, Lightbulb, Users, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import SkillTree from './SkillTree';

const Skills = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'tree'>('grid');

  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="h-5 w-5" />,
      skills: ["C", "Python"]
    },
    {
      title: "Hardware Description Languages",
      icon: <Cpu className="h-5 w-5" />,
      skills: ["Verilog", "VHDL"]
    },
    {
      title: "EDA Tools",
      icon: <Wrench className="h-5 w-5" />,
      skills: ["MATLAB", "Proteus", "Multisim", "Arduino", "AutoCAD"]
    },
    {
      title: "VLSI Concepts",
      icon: <Layers className="h-5 w-5" />,
      skills: ["CMOS Logic Design", "Sequential Circuits", "Combinational Circuits", "FSM Design", "Timing Analysis", "Low Power Design"]
    },
    {
      title: "Areas of Interest",
      icon: <Lightbulb className="h-5 w-5" />,
      skills: ["VLSI Design", "ASIC Design", "FPGA Design", "Digital IC Design", "Semiconductor Technology"]
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-5 w-5" />,
      skills: ["Leadership", "Communication", "Teamwork", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden bg-[#0a0a0f]" aria-labelledby="skills-heading">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00d4ff]/5 to-transparent animate-pulse"></div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h2 id="skills-heading" className="section-title mb-0">Technical Skills</h2>
          <div className="flex gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
              aria-pressed={viewMode === 'grid'}
              className={viewMode === 'grid' ? 'bg-[#ffd600] text-[#0a0a0f] hover:bg-[#ffd600]/90' : 'border-white/20 text-white hover:bg-white/10'}
            >
              Grid View
            </Button>
            <Button
              variant={viewMode === 'tree' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('tree')}
              aria-pressed={viewMode === 'tree'}
              className={viewMode === 'tree' ? 'bg-[#ffd600] text-[#0a0a0f] hover:bg-[#ffd600]/90' : 'border-white/20 text-white hover:bg-white/10'}
            >
              Skill Tree
            </Button>
          </div>
        </div>
        
        {viewMode === 'tree' ? (
          <div className="mb-8">
            <p className="text-white/50 mb-4 text-center">
              Click on any skill node to view details. Drag to explore the skill connections!
            </p>
            <SkillTree />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className="rounded-xl border border-white/10 bg-[#12121a] p-6 animate-fadeIn hover:border-[#00d4ff]/25 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="rounded-full bg-[#00d4ff]/10 p-2 text-[#00d4ff]">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
