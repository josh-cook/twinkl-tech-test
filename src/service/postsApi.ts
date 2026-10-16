import type { CreatePostInput, Post, UpdatePostInput } from "@/features/posts";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export function getPosts(): Promise<Post[]> {
  return request<Post[]>(BASE_URL);
}

export function createPost(input: CreatePostInput): Promise<Post> {
  return request<Post>(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });
}

export function updatePost(id: number, input: UpdatePostInput): Promise<Post> {
  return request<Post>(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });
}

export function deletePost(id: number): Promise<void> {
  return request<void>(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
}
