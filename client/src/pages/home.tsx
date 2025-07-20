import { useEffect, useState } from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { LoadingScreen } from "@/components/loading-screen";
import { Button } from "@/components/ui/button";
import { ArrowUp, Mail, Linkedin, Github, Code } from "lucide-react";

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Hide loading screen after a delay
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Mail, href: "mailto:yrajpoot648@gmail.com" },
    { icon: Linkedin, href: "https://linkedin.com/in/yash-rajput" },
    { icon: Github, href: "https://github.com/yashrajput4235" },
    { icon: Code, href: "https://leetcode.com/YashRajput" },
  ];

  if (showLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Yash Rajput</h3>
            <p className="text-gray-400 mb-6">Software Developer & AI Enthusiast</p>

            <div className="flex items-center justify-center space-x-6 mb-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © 2024 Yash Rajput. All rights reserved. Built with passion for technology and innovation.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 rounded-full shadow-lg z-40"
        >
          <ArrowUp className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
}
