export type SearchFormType = {
  query: string;
};
export type SearchResponse = {
  query: string;
};
export type SearchResult = {
  _id: string;
  chatId: string;
  prompt: string;
  images: string[];
  result: string;
  resImages: string[];
};
export type SearchGeminiResponse = {
  message: string;
  status: string;
  data: SearchResult;
};
export interface SearchRequest {
  chatId?: string;
  prompt: string;
}

export type ChatResult = {
  _id: string;
  name: string;
};

export type AllChatResponse = {
  status: string;
  message: string;
  data: ChatResult[];
};

export type ChatResponse = {
  status: string;
  message: string;
  data: SearchResult[];
};
