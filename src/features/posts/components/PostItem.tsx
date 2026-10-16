import { Post } from "@/features/posts";
import "./PostItem.css";

interface PostItemProps {
  post: Post;
  onRemove: (id: number) => void;
}

export default function PostItem({ post, onRemove }: PostItemProps) {
  return (
    <div className={"post-item"}>
      <div className={"post-content"}>
        <h2 className={"post-title"}>{post.title}</h2>
        <p className={"post-body"}>{post.body}</p>
      </div>

      <button className={"remove-button"} onClick={() => onRemove(post.id)}>
        Remove Post
      </button>
    </div>
  );
}
