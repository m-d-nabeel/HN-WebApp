import axios from "axios";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { useZStore } from "@/hooks/useStore";

const Searchbar = () => {
  const [searchText, setSearchText] = useState<string>("");
  const { setData } = useZStore();

  const debouncedValue = useDebounce<string>(searchText, 1000);

  useEffect(() => {
    const handleSearch = async () => {
      try {
        let response;
        if (debouncedValue.length === 0) {
          response = await axios.get(
            "http://hn.algolia.com/api/v1/search?tags=front_page",
          );
        } else {
          response = await axios.get(
            `http://hn.algolia.com/api/v1/search?query=${debouncedValue}`,
          );
        }
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
        className="bg-amber-50 ring-amber-900 focus-visible:ring-amber-200"
      />
    </div>
  );
};

export default Searchbar;
