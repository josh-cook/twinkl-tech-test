import PostsSearch from "@/features/posts/components/PostsSearch.tsx";
import PostsList from "@/features/posts/components/PostsList.tsx";
import { useMemo, useState } from "react";
import usePosts from "@/features/posts/hooks/usePosts.tsx";
import "./PostsPage.css";

export default function PostsPage() {
  const [search, setSearch] = useState("");
  const { posts, removePost } = usePosts();

  const results = useMemo(() => {
    const formattedSearchText = search.trim().toLowerCase();

    if (!formattedSearchText) {
      return posts;
    }

    return posts.filter((post) =>
      post.title.toLowerCase().includes(formattedSearchText),
    );
  }, [posts, search]);

  return (
    <div className={"posts-page"}>
      <PostsSearch value={search} onChange={setSearch} />

      <PostsList posts={results} onRemove={removePost} />
    </div>
  );
}
