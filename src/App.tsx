import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import TodoList from './components/todo-list/TodoList';
import { TodoStateProvider } from './components/todo-state/TodoState';

function App() {
  return (
    <div className='page-root'>
      <div className='w-[285px]'>
        <TodoStateProvider>
          <Form />
          <Filter />
          <TodoList />
        </TodoStateProvider>
      </div>
    </div>
  )
}

export default App
