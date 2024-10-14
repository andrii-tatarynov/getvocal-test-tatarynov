import { FC } from 'react';
import cn from 'classnames';
import { AiFillEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { useTodoState } from '../todo-state/TodoState';
import { ACTION_TYPE } from '../todo-state/constants';
import Checkbox from '../common/checkbox/checkbox';
import { TodoListItem } from './constants';

const Todo: FC<TodoListItem>  = ({ todo }) => {
  const { dispatch } = useTodoState();

  const handleToggelDone = () => {
    dispatch({ type:ACTION_TYPE.TOGGLE_DONE_TODO, payload: {id: todo.id} });
  }

  const handleEdit = () => {
    dispatch({ type:ACTION_TYPE.SET_EDIT_TODO, payload: {id: todo.id} });
  }

  const handleDelete = () => {
    dispatch({ type:ACTION_TYPE.DELETE_TODO, payload: {id: todo.id} });
  }

  return (
    <li className='flex justify-between w-full gap-x-2'>
      <Checkbox isCompleted={todo.isCompleted} toggelDone={handleToggelDone} />
      <p className={cn('grow', {'text-primary': todo.isCompleted} )}>{ todo.task }</p>
      <div className='flex items-center gap-x-2'>
        <AiFillEdit className='text-xl text-primary cursor-pointer' onClick={handleEdit} />
        <BsFillTrashFill className='text-xl text-red cursor-pointer' onClick={handleDelete} />
      </div>
    </li>
  )
}

export default Todo;
