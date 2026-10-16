import { Post } from "@/features/posts";

interface PostItemProps {
  post: Post;
  onRemove: (id: number) => void;
}

export default function PostItem({ post, onRemove }: PostItemProps) {
  return (
    <div>
      <h2 className={"post-title"}>{post.title}</h2>
      <p className={"post-body"}>{post.body}</p>

      <button className={"remove-button"} onClick={() => onRemove(post.id)}>Remove Post</button>
    </div>
  );
}
