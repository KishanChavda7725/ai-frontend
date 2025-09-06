import type { Todo } from './types';
import { Check, Square } from 'lucide-react';

export default function TodoItem({ todo }: { todo: Todo }) {
  return (
    <div className="flex items-center gap-3 py-1">
      {todo.completed ? <Check size={18} /> : <Square size={18} />}
      <span className={todo.completed ? 'line-through opacity-60' : ''}>{todo.title}</span>
    </div>
  );
}
