import { Post } from "@/features/posts";
import * as postsApi from "@/service";
import { useCallback, useEffect, useState } from "react";

interface UsePostsResult {
  posts: Post[];
  error: string | null;
  removePost: (id: number) => Promise<void>;
  refetch: () => void;
}

export default function usePosts(): UsePostsResult {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    setError(null);

    try {
      const data = await postsApi.getPosts();
      setPosts(data);
    } catch (err) {
      setError((err as Error).message);
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
      setError("Removing the post has failed, try again please :)");
    }
  };

  return { posts, error, removePost, refetch };
}
