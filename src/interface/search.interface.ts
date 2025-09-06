export type SearchFormType = {
  query: string;
};
export type SearchResponse = {
  query: string;
};
export type SearchResult = {
    _id: string;
    prompt: string;
    images: string[];
    result: string;
    resImages: string[];
}
export type SearchGeminiResponse = {
  message: string;
  status: string;
  data: {
    _id: string;
    prompt: string;
    images: string[];
    result: string;
    resImages: string[];
  }
};
export interface SearchRequest {
  prompt: string;
}

