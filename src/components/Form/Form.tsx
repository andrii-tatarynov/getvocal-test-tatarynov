import { SetStateAction, useState } from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useTodoState } from '../todo-state/TodoState';
import { ACTION_TYPE } from '../todo-state/constants';

const Form = () => {
  const { dispatch } = useTodoState();
  const [value, setValue] = useState('');

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setValue(event.target.value)
  }
  const handleSubmit= (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if(value.length) {
      dispatch({ type:ACTION_TYPE.CREATE_TODO, payload: {task: value} })
      setValue('');
    }
  }

  return (
    <form className='mb-4 pr-2 pl-4 w-full flex justify-between border border-lightGrey rounded-lg' onSubmit={handleSubmit}>
      <input 
        type="text"
        className='outline-none bg-transparent border-none
        py-4 placeholder-darckGrey'
        placeholder='New task input'
        onChange={handleChange}
        value={value}
      />
      <button 
        className='bg-white border-none ml-2'
      >
        <MdOutlineKeyboardArrowRight className='text-2xl text-lightGrey font-bold' />
      </button>
    </form>
  )
}

export default Form;
