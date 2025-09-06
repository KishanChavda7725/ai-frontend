import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useTodos } from './hooks';
import { useState } from 'react';

export default function AddTodoForm() {
  const { add } = useTodos();
  const [title, setTitle] = useState('');
  return (
    <form
      className="flex items-center gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        if (!title.trim()) return;
        add.mutate(title, { onSuccess: () => setTitle('') });
      }}
    >
      <Input placeholder="Add a todo..." value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button type="submit" disabled={add.isPending}>
        {add.isPending ? 'Adding...' : 'Add'}
      </Button>
    </form>
  );
}
