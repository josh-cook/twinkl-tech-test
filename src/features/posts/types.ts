export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface CreatePostInput {
  userId: number;
  title: string;
  body: string;
}

export type UpdatePostInput = Partial<Pick<Post, "title" | "body" | "userId">>;
