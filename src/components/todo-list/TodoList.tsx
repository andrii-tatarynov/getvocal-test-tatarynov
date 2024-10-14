import Todo from './Todo';
import EditTodo from './EditTodo';
import { useTodoState } from '../todo-state/TodoState';
import { SingleTodo } from '../todo-state/constants';

const prepareListTodos = (hideCompleted: boolean, todoList: SingleTodo[]): SingleTodo[] => {
  if(!hideCompleted) {
    return todoList;
  }

  return todoList.filter(todo => !todo.isCompleted);
}

const TodoList = () => {
  const { state } = useTodoState();
  const { hideCompleted, todoList } = state;
  const prepareTodos = prepareListTodos(hideCompleted, todoList);

  return (
    <ul className='flex flex-col min-h-52 p-6 gap-y-2 justify-normal items-center border border-lightGrey rounded-lg'>
      {prepareTodos.map(todo => (
        todo.isEditing ? 
        ( <EditTodo key={ todo.id } todo={ todo } /> ) : 
        ( <Todo key={ todo.id } todo={ todo } /> )
      ))}
    </ul>
  )
}

export default TodoList;
