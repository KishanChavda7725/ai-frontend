import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useState } from 'react';
import { searchGemini } from './api';
import { SearchResult } from '@/interface/search.interface';

export default function SearchForm() {
  const [query, setQuery] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SearchResult>({} as SearchResult); // Adjust type as needed

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResult({} as SearchResult);
    // React validation: require at least 1 non-whitespace character
    if (!query.trim()) {
      setError('Please enter a search query.');
      return;
    }
    setLoading(true);
    try {
      const res = await searchGemini({ prompt: query });
      console.log('Search result:', res);
      if (res?.data) {
        setResult(res.data);
      } else {
        setError('No data received. Please try again.');
        setResult({} as SearchResult);
      }
    } catch (err) {
      setError('Search failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Card className="h-[350px] overflow-y-auto">
        {result ? (
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-sm text-gray-700">{result.prompt}</li>
            <li className="text-sm text-gray-700">
              <div dangerouslySetInnerHTML={{ __html: result.result }} />
              {result.result}
            </li>
          </ul>
        ) : (
          !loading && <p className="text-gray-500">No results yet.</p>
        )}
      </Card>
      <Card>
        <form className="flex items-center gap-2">
          <Input placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
          <Button type="button" onClick={handleSubmit} disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </Button>
        </form>
        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      </Card>
    </>
  );
}
