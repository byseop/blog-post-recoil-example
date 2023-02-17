import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../recoil/todoList/withStateFilter';
import type { TodoListState } from '../recoil/todoList/types';

const TodoItemFilter: React.FC<{}> = () => {
  const [filterValue, setFilterValue] = useRecoilState(todoListFilterState);

  const handleChangeOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(e.target.value as TodoListState);
  }

  return (
    <select value={filterValue} onChange={handleChangeOption}>
      <option value="Show All">Show All</option>
      <option value="Show Completed">Show Completed</option>
      <option value="Show Uncompleted">Show Uncompleted</option>
    </select>
  )
}

export default TodoItemFilter;