import Card from '@/components/ui/Card';
import { Loader } from '@/components/common/Loader';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';
import { useTodos } from './hooks';

export default function TodoList() {
  const { list } = useTodos();
  if (list.isLoading) return <Loader label="Loading todos..." />;
  if (list.isError) return <div className="card">Failed to load todos.</div>;
  return (
    <Card title="Todos" footer={<AddTodoForm />}>
      <div className="space-y-1">
        {list.data?.map((t) => <TodoItem key={t.id} todo={t} />)}
      </div>
    </Card>
  );
}
