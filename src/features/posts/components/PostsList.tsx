import { Post } from "@/features/posts";
import PostItem from "@/features/posts/components/PostItem";

interface PostsListProps {
  posts: Post[];
  onRemove: (id: number) => void;
}

export default function PostsList({ posts, onRemove }: PostsListProps) {
  if (posts.length === 0) {
    return <p> No Posts Found.</p>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <PostItem post={post} onRemove={onRemove} />
        </li>
      ))}
    </ul>
  );
}
