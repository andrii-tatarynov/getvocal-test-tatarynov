import React, { useEffect, useContext, useReducer } from 'react';
import {
    ACTION_TYPE,
    StateProps,
    ActionProps,
    initialState,
    TodoStateProviderProps,
    TodosListContextInterface,
} from './constants'

const TodosListState = React.createContext<TodosListContextInterface>({
    state: initialState,
    dispatch: () => null,
})

export const useTodoState = () => {
    return useContext(TodosListState);
}

const pageStateReducer = (state: StateProps, action: ActionProps): StateProps => {

    switch(action.type) {
        case ACTION_TYPE.CREATE_TODO: {
            const newTodoList = [
                ...state.todoList,
                {
                    id: `${Date.now()}`,
                    isEditing: false,
                    isCompleted: false,
                    task: action.payload.task,
                }
            ];
            localStorage.setItem('testTodos', JSON.stringify(newTodoList) );

            return {
                ...state,
                todoList: newTodoList 
            }
        }
        case ACTION_TYPE.TOGGLE_DONE_TODO: {
            const newTodoList = state.todoList.map(todo => todo.id === action.payload.id ? {...todo, isCompleted: !todo.isCompleted} : todo);
            localStorage.setItem('testTodos', JSON.stringify(newTodoList) );

            return {
                ...state,
                todoList: newTodoList
            }
        }
        case ACTION_TYPE.SET_EDIT_TODO:
            return {
                ...state,
                todoList: state.todoList.map(todo => todo.id === action.payload.id ? {...todo, isEditing: !todo.isEditing} : todo)
            }
        case ACTION_TYPE.UPDATE_TODO: {
            const newTodoList = state.todoList.map(todo => todo.id === action.payload.id ? {...todo, isEditing: false, task: action.payload.task} : todo);
            localStorage.setItem('testTodos', JSON.stringify(newTodoList) );

            return {
                ...state,
                todoList: newTodoList
            }
        }
        case ACTION_TYPE.DELETE_TODO: {
            const newTodoList = state.todoList.filter(todo => todo.id !== action.payload.id);
            localStorage.setItem('testTodos', JSON.stringify(newTodoList) );

            return {
                ...state,
                todoList: newTodoList
            }
        }
        case ACTION_TYPE.TOGGLE_FILTER:
            return {
                ...state,
                hideCompleted: action.payload.filter === 'setFilter'
            }
        case ACTION_TYPE.GET_LOCAL_TODOS:
            return {
                ...state,
                todoList: JSON.parse(action.payload.todos)
            }
        default: return state
    }
}

export const TodoStateProvider: React.FC<TodoStateProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(pageStateReducer, initialState);

  useEffect(() => {
    const storedTodos = localStorage.getItem('testTodos');
    if(storedTodos) {
        dispatch({ type:ACTION_TYPE.GET_LOCAL_TODOS, payload: {todos: storedTodos} });
    }
  }, []);

  const todoStateValue: TodosListContextInterface = {
    state,
    dispatch
  }

  return (
    <TodosListState.Provider value={todoStateValue}>
      { children }
    </TodosListState.Provider> 
  )
}
