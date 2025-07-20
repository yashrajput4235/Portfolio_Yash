import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Code, Phone, Download } from "lucide-react";

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
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left animate-in fade-in slide-in-from-left duration-1000">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Yash Rajput</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Software Developer & AI Enthusiast
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            Passionate about building scalable web applications and AI solutions. Currently pursuing B.Tech in Computer Science with expertise in full-stack development, machine learning, and IoT systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
            <Button onClick={scrollToContact} size="lg" className="w-full sm:w-auto">
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleDownloadResume}
              className="w-full sm:w-auto"
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
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
            alt="Professional developer workspace"
            className="rounded-2xl shadow-2xl w-full max-w-md lg:max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
