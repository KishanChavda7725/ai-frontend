import { Link, NavLink } from 'react-router-dom';
import { APP_NAME } from '@/app/config';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/70 backdrop-blur">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link to="/" className="font-semibold tracking-tight">{APP_NAME}</Link>
        <nav className="flex items-center gap-6 text-sm">
          <NavLink to="/" className={({isActive}) => isActive ? 'font-semibold' : 'opacity-80 hover:opacity-100'}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'font-semibold' : 'opacity-80 hover:opacity-100'}>About</NavLink>
        </nav>
      </div>
    </header>
  );
}
