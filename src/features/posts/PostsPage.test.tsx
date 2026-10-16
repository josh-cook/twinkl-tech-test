import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { Post } from "./types";
import usePosts from "./hooks/usePosts";
import PostsPage from "@/features/posts/PostsPage.tsx";

vi.mock("./hooks/usePosts", () => ({ default: vi.fn() }));

const posts: Post[] = [
  { id: 1, userId: 1, title: "First post", body: "First body" },
  { id: 2, userId: 1, title: "Second post", body: "Second body" },
];

describe("PostsPage", () => {
  const removePost = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(usePosts).mockReturnValue({
      posts,
      error: null,
      removePost,
      refetch: vi.fn(),
    });
  });

  it("displays the posts", () => {
    render(<PostsPage />);

    expect(
      screen.getByRole("heading", { name: "First post" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Second post" }),
    ).toBeInTheDocument();
  });

  it("filters posts by title as the user types", async () => {
    const user = userEvent.setup();
    render(<PostsPage />);

    await user.type(screen.getByRole("searchbox"), "first");

    expect(
      screen.getByRole("heading", { name: "First post" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Second post" }),
    ).not.toBeInTheDocument();
  });

  it("calls removePost with the selected post id", async () => {
    const user = userEvent.setup();
    render(<PostsPage />);

    await user.click(screen.getAllByRole("button", { name: "Remove Post" })[0]);

    expect(removePost).toHaveBeenCalledWith(1);
  });
});
