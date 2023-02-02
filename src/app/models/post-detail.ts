export interface PostDetail {
  author: string;
  children?: PostDetail[];
  created_at: string;
  created_at_i: number;
  id: number;
  options: [];
  parent_id?: number;
  points: number;
  story_id?: number;
  text?: string;
  title: string;
  type?: string;
  url?: string;
}


