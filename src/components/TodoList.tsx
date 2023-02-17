import { useRecoilValue } from 'recoil';
import todoListState from '../recoil/todoList';
import TodoItemCreator from './TodoItemCreator';

const TodoList: React.FC<{}> = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <div>
        <TodoItemCreator />
      </div>
      <div>
        {todoList.map(todo => (
          <div key={todo.id} style={{ cursor: 'pointer' }}>
            <span>
              {todo.isComplete ? <del>{todo.text}</del> : <>{todo.text}</>}
            </span>
            <span><button type="button">삭제</button></span>
          </div>
        ))}
      </div>
    </>
  )
}

export default TodoList;