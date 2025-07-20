import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Code, Phone, Download } from "lucide-react";
import { TypingAnimation } from "./typing-animation";
import { ParticlesBackground } from "./particles-background";

export function HeroSection() {
  const handleDownloadResume = () => {
    window.open("/api/resume", "_blank");
  };

  const socialLinks = [
    { icon: Mail, href: "mailto:yrajpoot648@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://linkedin.com/in/yash-rajput", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/yashrajput4235", label: "GitHub" },
    { icon: Code, href: "https://leetcode.com/YashRajput", label: "LeetCode" },
    { icon: Phone, href: "tel:+917876403194", label: "Phone" },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <ParticlesBackground />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left animate-in fade-in slide-in-from-left duration-1000">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Yash Rajput</span>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-16 flex items-center">
            <TypingAnimation 
              texts={[
                "Software Developer",
                "AI Enthusiast", 
                "Full-Stack Engineer",
                "IoT Innovator",
                "Problem Solver"
              ]}
              className="font-semibold"
            />
          </div>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            Passionate about building scalable web applications and AI solutions. Currently pursuing B.Tech in Computer Science with expertise in full-stack development, machine learning, and IoT systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
            <Button onClick={scrollToContact} size="lg" className="w-full sm:w-auto pulse-glow hover:scale-105 transition-transform duration-300">
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleDownloadResume}
              className="w-full sm:w-auto hover:scale-105 transition-transform duration-300"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="flex items-center justify-center lg:justify-start space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end animate-in fade-in slide-in-from-right duration-1000">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800"
              alt="Modern developer workspace with multiple monitors"
              className="rounded-2xl shadow-2xl w-full max-w-md lg:max-w-lg object-cover float-animation"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-2xl blur-2xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
