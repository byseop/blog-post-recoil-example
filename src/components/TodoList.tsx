import {useRecoilValue, useSetRecoilState} from 'recoil';
import TodoItemCreator from './TodoItemCreator';
import TodoItemFilter from './TodoItemFilter';
import todoListState from '../recoil/todoList';
import { filteredTodoListState } from '../recoil/todoList/withStateFilter';

const TodoList: React.FC<{}> = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  const setTodoList = useSetRecoilState(todoListState);

  const handleClickRemoveButton = (id: number) => {
    removeItem(id)
  }

  const handleClickItem = (id: number) => {
    setTodoList(prev => prev.map(todo => todo.id === id ? ({ ...todo, isComplete: !todo.isComplete }) : todo))
  }

  const removeItem = (id: number) => {
    setTodoList(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <>
      <div>
        <TodoItemCreator />
      </div>
      <div>
        <TodoItemFilter />
      </div>
      <div>
        {todoList.map(todo => (
          <div key={todo.id} style={{ cursor: 'pointer' }} onClick={() => handleClickItem(todo.id)}>
            <span>
              {todo.isComplete ? <del>{todo.text}</del> : <>{todo.text}</>}
            </span>
            <span><button type="button" onClick={() => handleClickRemoveButton(todo.id)}>삭제</button></span>
          </div>
        ))}
      </div>
    </>
  )
}

export default TodoList;