import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Code, Phone, Download } from "lucide-react";
import { TypingAnimation } from "./typing-animation";
import { ParticlesBackground } from "./particles-background";
import aiPhoto from "@assets/ai photo_1753038233607.jpg";

export function HeroSection() {
  const handleDownloadResume = () => {
    window.open("/api/resume", "_blank");
  };

  const socialLinks = [
    { icon: Mail, href: "mailto:yrajpoot648@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/yash-rajput-ab811a258/", label: "LinkedIn" },
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

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 stagger-animation">
            <Button 
              onClick={scrollToContact} 
              size="lg" 
              className="w-full sm:w-auto pulse-glow hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleDownloadResume}
              className="w-full sm:w-auto hover:scale-105 transition-all duration-300 hover:shadow-lg group"
              data-testid="button-download-resume"
            >
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>

          <div className="flex items-center justify-center lg:justify-start space-x-6 stagger-animation">
            {socialLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                aria-label={link.label}
                data-testid={`link-social-${link.label.toLowerCase()}`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end animate-in fade-in slide-in-from-right duration-1000">
          <div className="relative">
            <img
              src={aiPhoto}
              alt="AI-generated illustration of developer working on laptop"
              className="rounded-2xl shadow-2xl w-full max-w-md lg:max-w-lg object-cover float-animation"
              data-testid="img-hero-profile"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-2xl blur-2xl opacity-30 parallax-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
