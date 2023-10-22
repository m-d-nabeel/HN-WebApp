import { useNavigate } from "react-router-dom";
import { useZStore } from "@/hooks/useStore";
import { Button } from "./ui/button";
import { timeAgo } from "@/lib/utils";
import bgTexture from "../assets/bgtexture.svg";

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

  if (!data || !data.hits || data.hits.length === 0) {
    return (
      <div
        className="relative h-full w-full bg-cover bg-fixed bg-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${bgTexture})` }}
      >
        <div className="mx-auto my-auto h-24 w-24 animate-spin rounded-full border-l border-amber-950" />
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-y-2">
      {data?.hits?.map((hit: NewsHit) => (
        <div
          onClick={(e) => {
            if (!(e.target instanceof HTMLParagraphElement)) {
              navigate(`/postDetails/${hit.objectID}`);
            }
          }}
          key={hit.objectID}
          className="relative flex flex-col items-start rounded bg-amber-50 bg-opacity-20 px-4 py-2 shadow"
        >
          <h3 className="text-base font-semibold cursor-pointer">{hit.title}</h3>
          <Button
            type="button"
            variant="link"
            className="z-50 m-0 flex w-full items-center justify-start p-0 cursor-default"
          >
            <p
              className="line-clamp-1 w-fit text-indigo-600 hover:cursor-pointer"
              onClick={(e) => {
                e.stopPropagation;
                window.open(hit.url);
              }}
            >
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
