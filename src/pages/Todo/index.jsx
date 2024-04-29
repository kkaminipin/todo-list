import TodoTable from '../../components/TodoTable';
import TodoEvents from '../../components/TodoEvents';
import Aside from '../../layouts/Aside';
import './styles/style.css';

const Todo = () => {
  return (
    <>
      <Aside />
      <main className='main todo'>
        <TodoEvents />
        <TodoTable />
      </main>
    </>
  );
};

export default Todo;
