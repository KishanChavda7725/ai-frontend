import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { ReactNode, useState } from 'react';

type Props = { children: ReactNode };

export default function AppProviders({ children }: Props) {
  // Create QueryClient once
  const [client] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
  );
}
