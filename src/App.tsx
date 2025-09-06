import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import RootLayout from '@/layouts/RootLayout';
import { Loader } from '@/components/common/Loader';
import ErrorBoundary from '@/components/common/ErrorBoundary';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const NotFound = lazy(() => import('@/pages/NotFound'));

export default function App() {
  return (
    <ErrorBoundary>
      <RootLayout>
        <Suspense fallback={<Loader label="Loading page..." />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </RootLayout>
    </ErrorBoundary>
  );
}
