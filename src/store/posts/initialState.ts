export interface Post {
  id: string;
  is_video?: boolean;
  video_src?: string;
  title: string;
  author: string;
  content: string;
  thumbnail: string;
  subreddit: string;
  created: number;
  score: number;
  flair: string;
  flair_background_color: string;
  image_src?: string;
}

export interface Comment {
  id?: string;
  author?: string;
  body?: string;
  score?: number;
  children?: Comment[];
}

export interface PostDetail {
  post: Post;
  comments: Comment[];
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
