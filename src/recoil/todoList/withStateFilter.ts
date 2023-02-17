import { atom, selector } from 'recoil';
import todoListState from './atom';
import type { TodoListState } from './types';

const todoListFilterState = atom<TodoListState>({
  key: 'todoListFilterState',
  default: 'Show All'
});

const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter(prev => prev.isComplete);
      case 'Show Uncompleted':
        return list.filter(prev => !prev.isComplete);
      default:
        return list;
    }
  }
})

export { todoListFilterState, filteredTodoListState };