import { Link } from "react-router-dom";

const LogoButton = () => {
  return (
    <Link to="/" className="mr-6 flex items-center space-x-2">
      <span className="text-xl font-bold">🎅 SecretSanta</span>
    </Link>
  );
};

export default LogoButton;
