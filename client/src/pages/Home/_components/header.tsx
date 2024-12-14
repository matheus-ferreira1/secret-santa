import { Link } from "react-router-dom";

import LogoButton from "@/components/logo";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky z-50 w-full px-4 lg:px-6 border-b">
      <div className="flex justify-between h-14">
        <LogoButton />
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
