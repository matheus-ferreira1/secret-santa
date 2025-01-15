import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-800 bg-black/40 backdrop-blur-sm">
      <div className="container px-4 md:px-6 mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} SecretSanta. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-gray-400 hover:text-white" to="/terms">
            Terms of Service
          </Link>
          <Link
            className="text-xs text-gray-400 hover:text-white"
            to="/privacy"
          >
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
