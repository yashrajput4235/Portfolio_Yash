import { GraduationCap, Award, Lightbulb, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const educationData = [
  {
    degree: "B.Tech (Hons) in Computer Science",
    specialization: "IoT and Intelligent Systems",
    institution: "Manipal University Jaipur",
    period: "2022 – Present",
    grade: "CGPA: 8.88/10",
  },
  {
    degree: "Higher School Certificate (12th)",
    institution: "D.A.V Ambuja Vidya Niketan, Darlaghat",
    period: "2021",
    grade: "82.8%",
  },
  {
    degree: "Secondary School Certificate (10th)",
    institution: "Lakshay Public School",
    period: "2019",
    grade: "92.14%",
  },
];

const achievements = [
  {
    title: "HydroWatch: IoT-based Water Management System",
    type: "Patent Publication",
    description: "Co-inventor of an IoT solution automating water refilling in livestock farms using ESP8266, ultrasonic sensors, and smart controls.",
    status: "Application No. 202411086633 A",
    icon: Lightbulb,
    color: "text-amber-500",
  },
  {
    title: "Design and Analysis of Algorithms",
    type: "NPTEL Certification",
    description: "Earned certification from IIT Madras through NPTEL, demonstrating expertise in algorithmic design and computational complexity.",
    status: "NPTEL - IIT Madras, 2024",
    icon: Award,
    color: "text-primary",
  },
  {
    title: "Dean's List of Excellence",
    type: "Academic Recognition",
    description: "Recognized for outstanding academic performance in the First and Fifth Semesters at Manipal University Jaipur.",
    status: "Multiple Semesters",
    icon: Star,
    color: "text-emerald-500",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Publications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic achievements and research contributions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 text-primary mr-3" />
              Education
            </h3>

            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-lg border hover-lift animate-in fade-in slide-in-from-left duration-700 group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold">{edu.degree}</h4>
                      {edu.specialization && (
                        <p className="text-primary font-semibold">{edu.specialization}</p>
                      )}
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {edu.period}
                    </Badge>
                  </div>
                  <Badge className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300">
                    {edu.grade}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Publications & Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Award className="w-6 h-6 text-primary mr-3" />
              Publications & Certifications
            </h3>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-lg border hover-lift animate-in fade-in slide-in-from-right duration-700 group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start mb-4">
                    <achievement.icon className={`w-6 h-6 ${achievement.color} mr-4 mt-1 flex-shrink-0`} />
                    <div>
                      <h4 className="text-lg font-bold mb-2">{achievement.title}</h4>
                      <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm">
                        <Badge variant="secondary">{achievement.type}</Badge>
                        <span className="text-muted-foreground">{achievement.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
