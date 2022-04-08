export interface Post {
  id: string;
  title: string;
  author: string;
  content: string;
  img: string;
  subreddit: string;
  published: string;
  updated: string;
}

export interface PostsState {
  loading: boolean;
  error: string;
  list: Post[];
}

export const initialState = {
  loading: false,
  error: "",
  list: [],
};
