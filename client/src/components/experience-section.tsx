import { CheckCircle } from "lucide-react";

const experiences = [
  {
    title: "Software Development Intern",
    company: "Switch iT",
    period: "May 2025 – July 2025",
    achievements: [
      "Engineered and deployed scalable REST APIs using Node.js and Fastify, reducing latency by 20%",
      "Built secure authentication system using JWT for 1,000+ users",
      "Improved user onboarding efficiency by 30% through cross-functional collaboration",
    ],
    isLeft: true,
  },
  {
    title: "Data Analytics and AI Launchpad Trainee",
    company: "PwC",
    period: "Feb 2025 – July 2025",
    achievements: [
      "Completed intensive training in Python, SQL, RDBMS, and AI tools",
      "Built predictive models for business insights and decision-making",
      "Designed ETL pipelines and data warehouses for analytics projects",
    ],
    isLeft: false,
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey in software development and data analytics
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 h-full hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-in fade-in slide-in-from-bottom duration-700`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {exp.isLeft ? (
                  <>
                    <div className="lg:text-right">
                      <div className="bg-card p-6 rounded-xl shadow-lg border hover-3d group" data-testid={`experience-card-${index}`}>
                        <div className="flex items-center justify-between mb-4">
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium group-hover:scale-110 transition-transform duration-300">
                            {exp.period}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{exp.title}</h3>
                        <h4 className="text-primary font-semibold mb-4">{exp.company}</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start group/item">
                              <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background hidden lg:block pulse-glow"></div>
                    <div className="hidden lg:block"></div>
                  </>
                ) : (
                  <>
                    <div className="hidden lg:block"></div>
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background hidden lg:block pulse-glow"></div>
                    <div>
                      <div className="bg-card p-6 rounded-xl shadow-lg border hover-3d group" data-testid={`experience-card-${index}`}>
                        <div className="flex items-center justify-between mb-4">
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium group-hover:scale-110 transition-transform duration-300">
                            {exp.period}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{exp.title}</h3>
                        <h4 className="text-primary font-semibold mb-4">{exp.company}</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start group/item">
                              <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
