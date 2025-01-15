import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import LogoButton from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "px-4 lg:px-6 fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/20 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <LogoButton />
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "text-white border-white hover:bg-white hover:text-black"
            )}
          >
            Login
          </Link>
          <Link
            to="/register"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "bg-white text-black hover:bg-gray-200"
            )}
          >
            Get Started
          </Link>
        </div>
      </nav>
      <div className="h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
    </header>
  );
};

export default Header;
