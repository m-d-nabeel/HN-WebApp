import { Link } from "react-router-dom";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex w-full justify-center rounded bg-cyan-900 bg-opacity-30 p-4">
      <div className="container flex w-full flex-col items-center">
        <p>&copy; {new Date().getFullYear()} Tech News</p>
        <p>
          <Link
            to="https://github.com/m-d-nabeel/hackernews-web"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-100"
          >
            <Github />
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
