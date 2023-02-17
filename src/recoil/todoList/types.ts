export interface TodoItem {
  id: number;
  text: string;
  isComplete: boolean;
}

export type TodoListState =
  | 'Show All'
  | 'Show Completed'
  | 'Show Uncompleted';