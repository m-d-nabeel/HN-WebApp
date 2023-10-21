import { useNavigate } from "react-router-dom";
import { useZStore } from "@/hooks/useStore";
import { Button } from "./ui/button";
import { timeAgo } from "@/lib/utils";

interface NewsHit {
  objectID: string;
  author: string;
  created_at: string;
  title: string;
  url: string;
  updated_at: string;
  [key: string]: any;
}

const News = () => {
  const { data } = useZStore();
  const navigate = useNavigate();

  const handlePostClick = (objectID: string) => {
    navigate(`/postDetails/${objectID}`);
  };
  return (
    <div className="flex flex-col gap-y-2">
      {data?.hits?.map((hit: NewsHit) => (
        <div
          onClick={() => handlePostClick(hit.objectID)}
          key={hit.objectID}
          className="flex flex-col items-start rounded bg-amber-50 bg-opacity-20 px-4 py-2 shadow"
        >
          <h3 className="text-base font-semibold">{hit.title}</h3>
          <Button
            type="button"
            variant="link"
            onClick={(e) => {
              e.stopPropagation;
              window.open(hit.url, "_blank");
            }}
            className="z-10 w-full p-0"
          >
            <p className="line-clamp-1 w-full justify-start text-start text-indigo-600">
              {hit.url}
            </p>
          </Button>
          <div className="flex gap-x-2 text-xs text-gray-600">
            <span className="text-xs font-semibold">{hit.author}</span>
            <span>created:{timeAgo(hit.created_at)}</span>
            <span>updated:{timeAgo(hit.updated_at)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
