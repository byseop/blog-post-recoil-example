import { useRecoilValue } from 'recoil';
import todoListState from '../recoil/todoList';

const TodoList: React.FC<{}> = () => {
  const todoList = useRecoilValue(todoListState);

  console.log(todoList);

  return (
    <div />
  )
}

export default TodoList;