
import { CalendarIcon, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Activities = () => {
  const activities = [
    {
      title: "PR & Content Team Member",
      organization: "Perception Annual Technical Fest",
      institution: "Odisha University of Technology and Research",
      period: "Present",
      location: "Bhubaneswar, Odisha",
      description: [
        "Led public relations campaigns.",
        "Managed strategic content.",
        "Improved event visibility.",
        "Coordinated with students from multiple colleges.",
      ],
      tags: ["Public Relations", "Content Strategy", "Event Management"],
    },
    {
      title: "Alumni Association Member",
      organization: "Alumni Association",
      institution: "Odisha University of Technology and Research",
      period: "Present",
      location: "Bhubaneswar, Odisha",
      description: [
        "Participated in alumni networking.",
        "Assisted in alumni engagement activities.",
      ],
      tags: ["Networking", "Community Engagement"],
    },
  ];

  return (
    <section id="activities" className="py-16" aria-labelledby="activities-heading">
      <div className="section-container">
        <h2 id="activities-heading" className="section-title">Extracurricular Activities</h2>

        <div className="space-y-12">
          {activities.map((activity, index) => (
            <div
              key={`${activity.title}-${index}`}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 animate-fadeIn"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="lg:col-span-3 space-y-1">
                <h3 className="font-semibold text-lg">{activity.title}</h3>
                <p className="font-medium text-primary">{activity.organization}</p>
                <p className="text-sm text-muted-foreground">{activity.institution}</p>

                <div className="flex items-center text-sm text-muted-foreground gap-1">
                  <CalendarIcon className="h-4 w-4" aria-hidden="true" />
                  <span>{activity.period}</span>
                </div>

                <div className="flex items-center text-sm text-muted-foreground gap-1">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  <span>{activity.location}</span>
                </div>
              </div>

              <div className="lg:col-span-9">
                <ul className="space-y-3 list-disc pl-5">
                  {activity.description.map((point, i) => (
                    <li key={i} className="text-foreground">{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {activity.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
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

export default Activities;
