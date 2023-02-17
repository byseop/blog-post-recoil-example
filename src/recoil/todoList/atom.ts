import { atom } from 'recoil';
import { TodoItem } from "./types";

const todoListState = atom<TodoItem[]>({
  key: 'todoListState',
  default: [],
});

export default todoListState;