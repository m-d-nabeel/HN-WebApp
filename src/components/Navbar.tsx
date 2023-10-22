import { Link } from "react-router-dom";
import { useState } from "react";
import { SearchIcon } from "lucide-react";
import Searchbar from "./Searchbar";

const Navbar = () => {
  const [isSearchExpanded, setSearchExpanded] = useState(false);

  const toggleSearch = () => {
    setSearchExpanded(!isSearchExpanded);
  };
  return (
    <nav className="rounded bg-blue-900 bg-opacity-30 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-3xl font-bold text-white hover:text-blue-300"
        >
          Tech News
        </Link>
        <div className="relative flex">
          <Searchbar />
          <SearchIcon
            onClick={toggleSearch}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-amber-950 transition"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
