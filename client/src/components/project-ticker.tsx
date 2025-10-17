import { useEffect, useRef } from "react";

const projects = [
  { name: "HydroWatch: IoT Water Management System", link: "#projects" },
  { name: "LeetLingo – AI Interview Prep", link: "#projects" },
  { name: "Polyp Detection using CNN", link: "#projects" },
  { name: "Real-Time Currency Converter", link: "#projects" },
];

export function ProjectTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion && tickerRef.current) {
      tickerRef.current.style.animationPlayState = "paused";
    }
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black py-8 border-y border-primary/20">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none"></div>
      
      <div className="relative">
        <div className="ticker-wrapper">
          <div ref={tickerRef} className="ticker-content" data-testid="project-ticker">
            {/* First set of projects */}
            {projects.map((project, index) => (
              <a
                key={`first-${index}`}
                href={project.link}
                className="ticker-item group"
                data-testid={`ticker-item-${index}`}
              >
                <span className="ticker-text">{project.name}</span>
                <span className="ticker-separator">•</span>
              </a>
            ))}
            {/* Duplicate set for seamless loop */}
            {projects.map((project, index) => (
              <a
                key={`second-${index}`}
                href={project.link}
                className="ticker-item group"
              >
                <span className="ticker-text">{project.name}</span>
                <span className="ticker-separator">•</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
