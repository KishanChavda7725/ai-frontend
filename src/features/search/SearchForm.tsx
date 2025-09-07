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
  const [results, setResults] = useState<SearchResult[]>([]); // Adjust type as needed

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
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
        setResults((prev) => [...prev, res.data]);
      } else {
        setError('No data received. Please try again.');
      }
    } catch (err) {
      setError('Search failed. Please try again.');
    } finally {
      setQuery('');
      setLoading(false);
    }
  };
  return (
    <>
      <Card className="h-[350px] overflow-y-auto">
        {results && results.length ? (
          <>
            {results.map((result, idx) => (
              <div key={result._id || idx} className="flex flex-col gap-4 h-full justify-center">
                <div className="flex w-full">
                  <div className="bg-[#f4f4f4] rounded-lg px-3 py-1 text-[16px] text-gray-700 max-w-[60%] ml-auto">
                    {result.prompt}
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="px-4 py-2 text-sm mr-auto"></div>
                  <div dangerouslySetInnerHTML={{ __html: result.result }} />
                </div>
              </div>
            ))}
          </>
        ) : (
          !loading && <p className="text-gray-500">No results yet.</p>
        )}
      </Card>
      <Card>
        <div className="flex items-center gap-2">
          <Input placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
          <Button type="button" onClick={handleSubmit} disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </Button>
        </div>
        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      </Card>
    </>
  );
}
