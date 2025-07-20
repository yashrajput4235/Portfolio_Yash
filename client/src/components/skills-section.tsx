import { useEffect, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Code, Layers, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "C/C++", level: 80 },
      { name: "Java", level: 75 },
    ],
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: [
      { name: "React.js", level: 88 },
      { name: "Node.js", level: 85 },
      { name: "Express", level: 82 },
      { name: "Fastify", level: 80 },
    ],
  },
  {
    title: "Tools & Tech",
    icon: Wrench,
    skills: [
      { name: "Git", level: 92 },
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "TensorFlow", level: 83 },
    ],
  },
];

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks for building robust applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-card p-6 rounded-xl shadow-lg border animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <category.icon className="w-5 h-5 text-primary mr-3" />
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress
                      value={isVisible ? skill.level : 0}
                      className="h-2"
                      style={{
                        transition: `all 1.5s ease-out ${(categoryIndex * 200 + skillIndex * 100)}ms`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
