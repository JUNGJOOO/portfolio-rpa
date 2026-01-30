import { useEffect, useState, useRef } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          url?: string;
          "loading-anim-type"?: string;
        },
        HTMLElement
      >;
    }
  }
}


export function SplineViewer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer - only load when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Load Spline script only when visible
  useEffect(() => {
    if (!isVisible) return;

    // Check if script already exists
    const existingScript = document.querySelector(
      'script[src*="spline-viewer"]'
    );
    if (existingScript) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.12.39/build/spline-viewer.js";
    script.async = true;

    script.onload = () => {
      setScriptLoaded(true);
    };

    document.head.appendChild(script);

    // Don't remove script on unmount to allow caching
  }, [isVisible]);

  // Handle spline load complete
  useEffect(() => {
    if (!scriptLoaded) return;

    const handleLoad = () => {
      setTimeout(() => setIsLoaded(true), 500);
    };

    // Give time for spline to initialize
    const timer = setTimeout(handleLoad, 2000);
    return () => clearTimeout(timer);
  }, [scriptLoaded]);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-5xl aspect-video relative"
    >
      {/* Loading Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/20 rounded-2xl backdrop-blur-sm">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
            <span className="text-sm text-muted-foreground animate-pulse">
              3D 모델 로딩 중...
            </span>
          </div>
        </div>
      )}

      {/* Spline Viewer - only render when visible */}
      {isVisible && (
        <spline-viewer
          loading-anim-type="spinner-big-light"
          url="https://prod.spline.design/PjvEoVbxQxSUHFPY/scene.splinecode"
          style={{
            width: "100%",
            height: "100%",
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        />
      )}
    </div>
  );
}