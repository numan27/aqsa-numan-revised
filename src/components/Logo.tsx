import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  variant?: "default" | "footer";
}

const Logo = ({ className = "", variant = "default" }: LogoProps) => {
  const baseClasses = "font-medium transition-all duration-300";
  const variantClasses = {
    default: "text-xl sm:text-2xl text-foreground hover:text-indigo-600",
    footer: "text-xl sm:text-2xl text-foreground hover:text-indigo-400",
  };

  return (
    <Link
      to="/"
      className={`${baseClasses} ${variantClasses[variant]} ${className} group`}
    >
      <div className="flex items-center">
        {/* Creative A with subtle accent */}
        <div className="relative">
          <span className="font-semibold tracking-tight">A</span>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Rest of the name */}
        <span className="font-medium tracking-wide ml-0.5">qsa</span>

        {/* Last name with creative spacing and underline effect */}
        <div className="relative ml-3">
          <span className="font-light tracking-wider text-muted-foreground group-hover:text-foreground transition-colors duration-300">
            Numan
          </span>
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
