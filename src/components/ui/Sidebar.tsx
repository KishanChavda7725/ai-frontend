import { NavLink } from 'react-router-dom';
import { Home, Info } from 'lucide-react';

export default function Sidebar() {
  const link = 'flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-muted transition';
  const active = 'bg-muted font-semibold';
  return (
    <div className="p-4 sticky top-14 h-[calc(100dvh-56px)] overflow-y-auto">
      <div className="text-xs uppercase text-zinc-500 mb-2 px-3">Navigation</div>
      <nav className="space-y-1">
        <NavLink to="/" className={({isActive}) => `${link} ${isActive ? active : ''}`}>
          <Home size={18} /> Home
        </NavLink>
        <NavLink to="/about" className={({isActive}) => `${link} ${isActive ? active : ''}`}>
          <Info size={18} /> About
        </NavLink>
      </nav>
    </div>
  );
}
