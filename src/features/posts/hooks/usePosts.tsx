import { Post } from "@/features/posts";
import * as postsApi from "@/service";
import { useCallback, useEffect, useState } from "react";

interface UsePostsResult {
  posts: Post[];
  loading: boolean;
  error: string | null;
  removePost: (id: number) => void;
  refetch: () => void;
}

export default function usePosts(): UsePostsResult {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await postsApi.getPosts();
      setPosts(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void refetch();
  }, [refetch]);

  const removePost = async (id: number): Promise<void> => {
    setError(null);

    try {
      await postsApi.deletePost(id);

      setPosts((currentPosts) => currentPosts.filter((post) => post.id !== id));
    } catch {
      setError("Failed to delete post. Please try again.");
    }
  };

  return { posts, loading, error, removePost, refetch };
}
