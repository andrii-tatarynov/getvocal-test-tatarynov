import { Dispatch } from 'react';

export enum ACTION_TYPE {
    CREATE_TODO = 'CREATE_TODO',
    TOGGLE_DONE_TODO = 'TOGGLE_DONE_TODO',
    SET_EDIT_TODO = 'SET_EDIT_TODO',
    UPDATE_TODO = 'UPDATE_TODO',
    DELETE_TODO = 'DELETE_TODO',
    TOGGLE_FILTER = 'TOGGLE_FILTER',
    GET_LOCAL_TODOS = 'GET_LOCAL_TODOS',
}

interface ObjectWithStringAtributes {
    [key: string]: string;
}

export interface SingleTodo {
    id: string,
    isEditing: boolean,
    isCompleted: boolean,
    task: string,
}

export interface StateProps {
    hideCompleted: boolean,
    todoList: SingleTodo[]
}

export interface ActionProps {
    type: ACTION_TYPE,
    payload: ObjectWithStringAtributes
}
export interface TodosListContextInterface {
    state: StateProps,
    dispatch: Dispatch<ActionProps>,
}

export interface TodoStateProviderProps {
    children: React.ReactNode;
}

export const initialState = {
    hideCompleted: false,
    todoList: []
}