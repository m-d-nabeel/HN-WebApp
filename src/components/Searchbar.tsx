import axios from "axios";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { useZuzStore } from "@/hooks/useStore";

const Searchbar = () => {
  const [searchText, setSearchText] = useState<string>("");
  const { setData } = useZuzStore();

  const debouncedValue = useDebounce<string>(searchText, 5000);

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const response = await axios.get(
          `http://hn.algolia.com/api/v1/search?query=${debouncedValue}`
        );
        setData(response.data);
      } catch (error) {
        console.log("Error Fetching", error);
      }
    };
    handleSearch();
  }, [debouncedValue, setData]);

  return (
    <div>
      <Input
        placeholder="Enter text to search"
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
