import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "HydroWatch: IoT Water Management System",
    description: "Co-inventor of an IoT solution automating water refilling in livestock farms, reducing manual labor by 80% and water wastage by 30%. Built with ESP8266, ultrasonic sensors, and relays achieving 95% detection accuracy across 10+ prototypes.",
    image: "https://images.unsplash.com/photo-1581092162562-40038f60412b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["IoT", "ESP8266", "Sensors", "Automation", "Patent"],
    githubUrl: "#",
    liveUrl: "https://drive.google.com/file/d/1G44us1qeOleSLEaJltR29JdWo0FP3x7v/view",
  },
  {
    title: "LeetLingo – AI Interview Prep",
    description: "Full-stack web application using React, Flask, and NLP to analyze interview responses for vocabulary, fluency, and confidence with 90%+ accuracy.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Flask", "NLP", "Machine Learning"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Polyp Detection using CNN",
    description: "CNN model achieving 99% accuracy on Kvasir medical dataset for automated polyp detection in colonoscopy images, assisting early cancer diagnosis.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["TensorFlow", "Keras", "CNN", "Medical AI"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Real-Time Currency Converter",
    description: "React Hooks application with live exchange-rate API integration for real-time global currency conversion with optimized state management.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "JavaScript", "REST API", "Hooks"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my passion for innovative solutions in web development, AI, and IoT
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card rounded-xl overflow-hidden shadow-lg border hover-3d animate-in fade-in slide-in-from-bottom duration-700 group"
              style={{ animationDelay: `${index * 200}ms` }}
              data-testid={`card-project-${index}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-sm font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Project</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-all duration-300 hover:scale-110 group/btn"
                      data-testid={`button-github-${index}`}
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 group/btn"
                      data-testid={`button-live-${index}`}
                    >
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
