import { ReactNode } from 'react';
import Navbar from '@/components/ui/Navbar';
import Sidebar from '@/components/ui/Sidebar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-full">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="container mx-auto p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
