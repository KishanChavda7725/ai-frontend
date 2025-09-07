import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { ReactNode, useState } from 'react';
import { store } from '../store/reduxStore';
import { Provider } from 'react-redux';

type Props = { children: ReactNode };

export default function AppProviders({ children }: Props) {
  // Create QueryClient once
  const [client] = useState(() => new QueryClient());
  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <BrowserRouter>{children}</BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
}
