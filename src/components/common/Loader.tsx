export function Loader({ label = 'Loading...' }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent rounded-full mr-3" role="status" aria-label="loading"/>
      <span className="text-sm opacity-80">{label}</span>
    </div>
  );
}
