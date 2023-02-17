import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import todoListState from '../recoil/todoList';

const TodoItemCreator: React.FC<{}> = () => {
  const [value, setValue] = useState<string>('');
  const setTodoList = useSetRecoilState(todoListState);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const handleClickAddButton = () => {
    addItem();
    setValue('');
  }

  const addItem = () => {
    setTodoList((prev) => prev.concat({
      id: getId(),
      isComplete: false,
      text: value
    }))
  }

  return (
    <div>
      <div>
        <input type="text" value={value} onChange={handleChangeInput} />
      </div>
      <div>
        <button type="button" onClick={handleClickAddButton}>추가하기</button>
      </div>
    </div>
  )
}


// 고유한 Id 생성을 위한 유틸리티
let id = 0;
function getId() {
  return id++;
}

export default TodoItemCreator