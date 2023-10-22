import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Comment from "@/components/Comment";
import { timeAgo } from "@/lib/utils";
import Footer from "@/components/Footer";

function PostDetail() {
  const { objectID } = useParams();
  const [postDetails, setPostDetails] = useState<any>();

  useEffect(() => {
    const getPostDetail = async () => {
      try {
        const response = await axios.get(
          `https://hn.algolia.com/api/v1/items/${objectID}`,
        );
        setPostDetails(response.data);
      } catch (error) {
        console.log("Post Detail Error", error);
      }
    };
    getPostDetail();
  }, [objectID]);

  if (!postDetails) {
    return (
      <div className="fixed grid h-screen w-full place-items-center overflow-x-hidden bg-cover bg-fixed bg-bottom bg-no-repeat">
        <div className="aspect-square w-48 animate-spin rounded-full border-l border-amber-950" />
      </div>
    );
  }

  const comments: any[] = [];
  for (let i = postDetails.children.length - 1; i >= 0; i--) {
    comments.push(postDetails.children[i]);
  }

  return (
    <div className="flex h-screen w-full flex-col gap-y-4 overflow-x-hidden p-12">
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-x-2">
          <span className="text-xs">{postDetails.author}</span>
          <span className="text-xs">{timeAgo(postDetails.created_at)}</span>
        </div>
        <h2 className="text-lg font-semibold">{postDetails.title}</h2>
        {comments.map((comment: any) => (
          <Comment key={comment.id} comment={comment} indent={0} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default PostDetail;
