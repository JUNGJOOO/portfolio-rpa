import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-1 font-display font-bold tracking-tight">
      {/* LJJ part */}
      <span className="text-lg md:text-xl text-foreground transition-colors duration-300">
        LJJ
      </span>
      
      {/* Dot separator */}
      <span className="text-lg md:text-xl text-primary/60 group-hover:text-primary transition-colors duration-300">
        .
      </span>
      
      {/* auto part with accent styling */}
      <span className="text-lg md:text-xl font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
        rpa
      </span>
      
      {/* Decorative bracket for tech feel */}
      <span className="text-xs md:text-sm text-muted-foreground/50 ml-0.5 font-mono hidden sm:inline">
        {/* {'//'} */}
      </span>
    </Link>
  );
}
