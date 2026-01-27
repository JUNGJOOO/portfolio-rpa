import { useEffect } from "react";

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
  useEffect(() => {
    // Load Spline viewer script
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.12.39/build/spline-viewer.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full max-w-5xl aspect-video">
      <spline-viewer
        loading-anim-type="spinner-big-light"
        url="https://prod.spline.design/PjvEoVbxQxSUHFPY/scene.splinecode"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
