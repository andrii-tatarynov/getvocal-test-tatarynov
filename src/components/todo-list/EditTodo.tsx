import { FC, SetStateAction, useState } from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useTodoState } from '../todo-state/TodoState';
import { ACTION_TYPE } from '../todo-state/constants';
import { TodoListItem } from './constants';

const EditTodo: FC<TodoListItem> = ({ todo }) => {
  const { dispatch } = useTodoState()
  const [value, setValue] = useState(todo.task);

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setValue(event.target.value)
  }
  const handleSubmit= (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if(value.length) {
      dispatch({ type:ACTION_TYPE.UPDATE_TODO, payload: {id: todo.id, task: value} })
      setValue('');
    }
  }

  return (
    <li>
      <form className='w-full flex justify-between border-b border-b-1 border-darckGrey' onSubmit={handleSubmit}>
        <input 
          type="text"
          className='outline-none bg-transparent border-none placeholder-darckGrey'
          placeholder='Edit task'
          onChange={handleChange}
          value={value}
        />
        <button 
          className='bg-white border-none ml-2'
        >
          <MdOutlineKeyboardArrowRight className='text-2xl text-lightGrey font-bold' />
        </button>
      </form>
    </li> 
  )
}

export default EditTodo;
