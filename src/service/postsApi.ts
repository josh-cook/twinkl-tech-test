import type { Post } from "@/features/posts";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// supressing the no-undef error for fetch, since it's available in the browser environment
// eslint-disable-next-line no-undef
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

export function deletePost(id: number): Promise<void> {
  return request<void>(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
}
