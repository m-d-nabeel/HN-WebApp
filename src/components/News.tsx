import { useZuzStore } from "@/hooks/useStore";

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
  const { data } = useZuzStore();
  console.log(data);

  return (
    <div className="flex flex-col">
      {data.hits?.map((hit: NewsHit) => (
        <div key={hit.objectID}>
          <div className="">
            <span>{hit.objectID}</span>
            <span>{hit.title}</span>
            <span>{hit.url}</span>
            <span>{hit.author}</span>
            <span>{hit.created_at}</span>
            <span>{hit.updated_at}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
