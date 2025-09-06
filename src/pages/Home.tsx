import SearchForm from '@/features/search/SearchForm';

export default function Home() {
  return (
    <div className="min-h-full grid grid-cols-1 lg:grid-cols-[260px_1fr]">
      <div className="grid gap-6">
        <div className="text-xs uppercase text-zinc-500 mb-2 px-3">Search History</div>
      </div>
      <div className="grid gap-6">
        <SearchForm />
      </div>
    </div>
  );
}
