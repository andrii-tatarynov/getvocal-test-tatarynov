import { ACTION_TYPE } from "../todo-state/constants";
import { useTodoState } from "../todo-state/TodoState";

const Filter = () => {
  const { dispatch } = useTodoState();

  const setFilter = () => {
    dispatch({ type:ACTION_TYPE.TOGGLE_FILTER, payload: {filter: 'setFilter'} });
  }
  const resetFilter = () => {
    dispatch({ type:ACTION_TYPE.TOGGLE_FILTER, payload: {filter: 'resetFilter'} });
  }
  
  return (
    <div className='mb-4 w-full flex justify-between'>
      <button className='btn btn-primary' onClick={resetFilter}>
        Show all
      </button>
      <button className='btn btn-white' onClick={setFilter}>
        Hide completed
      </button>
    </div>
  )
}

export default Filter;
