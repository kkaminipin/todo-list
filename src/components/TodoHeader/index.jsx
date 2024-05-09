import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StatusButtons from '../StatusButtons';
import './styles/style.css';

const TodoHeader = () => {
  // const [todoTitle, setTodoTitle] = useState('');
  const dispatch = useDispatch();
  const todoTitle = useSelector((state) => state.todoTitle);

  const onKeyEnter = (event) => {
    if (event.key === 'Enter') {
      dispatch({ type: 'todoCreate' });
    }
  };

  const onCreateInput = (event) => {
    dispatch({ type: 'todoTitle', payload: event.target.value });
    // setTodoTitle(event.target.value);
  };

  return (
    <header className='todo__header'>
      <div className='todo__header-content'>
        <div className='todo__status-btn'>
          <StatusButtons />
        </div>
        <div className='todo__input-create'>
          <h2 className='titel todo__title'>To Do Lists</h2>
          <input
            type='text'
            className='input-create'
            placeholder='Add your todos...'
            onChange={onCreateInput}
            onKeyDown={onKeyEnter}
            value={todoTitle}
          />
        </div>
      </div>
    </header>
  );
};

export default TodoHeader;
