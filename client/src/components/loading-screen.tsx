import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsComplete(true), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  if (isComplete) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-primary/20 rounded-full animate-spin border-t-primary mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold gradient-text">Loading Portfolio</h2>
          <div className="w-64 h-2 bg-muted rounded-full overflow-hidden mx-auto">
            <div 
              className="h-full bg-gradient-to-r from-primary to-purple-600 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-muted-foreground">{Math.round(progress)}%</p>
        </div>
      </div>
    </div>
  );
}