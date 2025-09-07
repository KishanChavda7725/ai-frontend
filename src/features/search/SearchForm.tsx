import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { fetchSearchResult } from './searchSlice';
import { fetchChats } from './chatSlice';
import { Loader } from '@/components/common/Loader';

export default function SearchForm() {
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch();
  const { results, loading, error, currentChatId } = useAppSelector((state) => state.search);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      return;
    }
    try {
      // Pass chatId if exists, else only prompt
      const payload = currentChatId ? { chatId: currentChatId, prompt: query } : { prompt: query };
      await dispatch(fetchSearchResult(payload));
      setQuery('');
      dispatch(fetchChats());
    } catch {
      // Error is handled in Redux state
    }
  };
  return (
    <>
      <Card className="h-[350px] overflow-y-auto">
        {loading ? (
          <Loader label="Loading result..." />
        ) : results && results.length > 0 ? (
          results.map((result, idx) => (
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
          ))
        ) : (
          <p className="text-gray-500">No results yet.</p>
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
