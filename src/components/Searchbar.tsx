import axios from "axios";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { useZStore } from "@/hooks/useStore";
import { useSearchParams } from "react-router-dom";

const Searchbar = () => {
  const { setData, searchStoreText, setSearchStoreText } = useZStore();
  const [searchText, setSearchText] = useState<string>(searchStoreText || "");
  const [searchParams, setSearchParams] = useSearchParams();

  const debouncedValue = useDebounce<string>(searchText, 500);

  useEffect(() => {
    setSearchParams({ searchText: debouncedValue ?? searchStoreText! });
  }, [debouncedValue, searchStoreText, setSearchParams]);

  useEffect(() => {
    const apiSearchParam = searchParams.get("searchText");
    setSearchStoreText(apiSearchParam || "");

    const handleSearch = async () => {
      try {
        let response;
        if (apiSearchParam && apiSearchParam.length > 1) {
          response = await axios.get(
            `http://hn.algolia.com/api/v1/search?query=${apiSearchParam}`,
          );
        } else {
          response = await axios.get(
            "http://hn.algolia.com/api/v1/search?tags=front_page",
          );
        }
        setData(response.data);
      } catch (error) {
        console.log("Error Fetching", error);
      }
    };
    handleSearch();
  }, [searchParams, setData, setSearchStoreText]);

  return (
    <div>
      <Input
        placeholder="Enter text to search"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        className="bg-amber-50 ring-amber-900 focus-visible:ring-amber-200"
      />
    </div>
  );
};

export default Searchbar;
