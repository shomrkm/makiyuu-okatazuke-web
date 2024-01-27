
export type Post = {
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  customOrder: number;
}

export type Posts = {
  items: Post[];
}
