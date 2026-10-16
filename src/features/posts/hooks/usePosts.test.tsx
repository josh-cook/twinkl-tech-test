import { act, renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import * as postsApi from "../../../service";
import type { Post } from "../types";
import usePosts from "./usePosts";

vi.mock("../../../service", () => ({
  getPosts: vi.fn(),
  deletePost: vi.fn(),
}));

const posts: Post[] = [
  { id: 1, userId: 1, title: "Example post", body: "Example body" },
];

describe("usePosts", () => {
  beforeEach(() => vi.clearAllMocks());

  it("loads posts on mount", async () => {
    vi.mocked(postsApi.getPosts).mockResolvedValue(posts);

    const { result } = renderHook(() => usePosts());

    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.posts).toEqual(posts);
    expect(result.current.error).toBeNull();
  });

  it("sets an error when loading posts fails", async () => {
    vi.mocked(postsApi.getPosts).mockRejectedValue(new Error("Network error"));

    const { result } = renderHook(() => usePosts());

    await waitFor(() => expect(result.current.error).toBe("Network error"));
    expect(result.current.loading).toBe(false);
  });

  it("removes a post after the API call succeeds", async () => {
    vi.mocked(postsApi.getPosts).mockResolvedValue(posts);
    vi.mocked(postsApi.deletePost).mockResolvedValue(undefined);

    const { result } = renderHook(() => usePosts());
    await waitFor(() => expect(result.current.posts).toEqual(posts));

    await act(async () => result.current.removePost(1));

    expect(postsApi.deletePost).toHaveBeenCalledWith(1);
    expect(result.current.posts).toEqual([]);
  });
});
