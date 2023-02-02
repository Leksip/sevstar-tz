export interface Hit {
  author: string;
  comment_text?: string;
  created_at: string;
  created_at_i: number;
  num_comments: number;
  objectID: string;
  parent_id?: string;
  points: number;
  story_id?: string;
  story_text?: string;
  story_title?: string;
  story_url?: string;
  title: string;
  url?: string;
  _highlightResult: HighlightResult;
  _tags: string[];
}

export interface HighlightResult {
  author: Other;
  title: Other;
  url: Other;
}

export interface Other {
  matchLevel: string;
  matchedWords: [];
  value: string;
}


