import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky z-50 w-full px-4 lg:px-6 border-b">
      <div className="flex justify-between h-14">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold">🎅 SecretSanta</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link to="/register">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
