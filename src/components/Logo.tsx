import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  variant?: "default" | "footer";
}

const Logo = ({ className = "", variant = "default" }: LogoProps) => {
  const baseClasses = "font-display font-extrabold transition-all duration-300";
  const variantClasses = {
    default: "text-2xl text-purple-600 hover:text-purple-700",
    footer: "text-2xl text-purple-400 hover:text-purple-300",
  };

  return (
    <Link
      to="/"
      className={`${baseClasses} ${variantClasses[variant]} ${className} group`}
    >
      <div className="relative inline-block">
        <span className="relative z-10 transform hover:scale-105 transition-transform duration-300">
          <span className="inline-block transform hover:rotate-1 transition-transform duration-300">
            A
          </span>
          <span className="inline-block transform hover:-rotate-1 transition-transform duration-300">
            q
          </span>
          <span className="inline-block transform hover:rotate-2 transition-transform duration-300">
            s
          </span>
          <span className="inline-block transform hover:-rotate-2 transition-transform duration-300">
            a
          </span>
        </span>
        <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </div>
      <span className="ml-2 text-gray-700 font-bold tracking-wide">Numan</span>
    </Link>
  );
};

export default Logo;
