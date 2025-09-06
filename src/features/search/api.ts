import { http } from '@/lib/axios';
import { SearchResponse, SearchRequest, SearchGeminiResponse } from '@/interface/search.interface';

// Calls the Node server's /search endpoint with a POST request
export async function search(request: SearchRequest): Promise<SearchResponse> {
  const res = await http.post<SearchResponse>('/search', request);
  return res.data;
}

// Calls the Node server's /search endpoint with a POST request
export async function searchGemini(request: SearchRequest): Promise<SearchGeminiResponse> {
  const res = await http.post<SearchGeminiResponse>('/search/gemini', request);
  return res.data;
}
