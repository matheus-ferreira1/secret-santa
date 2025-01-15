import { Gift } from "lucide-react";
import { Link } from "react-router-dom";

const LogoButton = () => {
  return (
    <Link to="/" className="mr-6 flex items-center space-x-2 group">
      <Gift className="size-6 text-white group-hover:text-emerald-400 transition-all duration-300" />
      <span className="text-xl font-semibold text-white">SecretSanta</span>
    </Link>
  );
};

export default LogoButton;
