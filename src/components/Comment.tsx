import { timeAgo } from "@/lib/utils";
import he from "he";
function Comment({ comment, indent }: { comment: any; indent: number }) {
  const comments: any[] = [];
  for (let i = comment.children.length - 1; i >= 0; i--) {
    comments.push(comment.children[i]);
  }
  return (
    <div
      className="flex flex-col gap-y-2 rounded border-b border-l border-amber-700 bg-amber-50 bg-opacity-20 py-2 shadow"
      style={{ marginLeft: `${indent * 8}px` }}
    >
      <div
        className="px-2"
        dangerouslySetInnerHTML={{
          __html: he.decode(comment.text, { strict: false }),
        }}
      />
      <div className="ml-2 flex gap-x-2">
        <h3 className="text-xs font-semibold text-gray-700">
          {comment.author}
        </h3>
        <h3 className="text-xs font-semibold text-gray-700">
          {timeAgo(comment.created_at)}
        </h3>
      </div>
      {comments?.map((childComment: any) => (
        <Comment
          key={childComment.id}
          comment={childComment}
          indent={indent + 1}
        />
      ))}
    </div>
  );
}

export default Comment;
