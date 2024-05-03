import TodoContainer from '../../components/TodoContainer';
import TodoHeader from '../../components/TodoHeader';
import Aside from '../../layouts/Aside';
import './styles/style.css';

const Todo = () => {
  return (
    <>
      <Aside />
      <main className='main'>
        <div className='todo'>
          <TodoHeader />
          <TodoContainer />
        </div>
      </main>
    </>
  );
};

export default Todo;
