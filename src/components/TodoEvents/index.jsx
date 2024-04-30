import './styles/style.css';

import { useSelector, useDispatch } from 'react-redux';

const TodoEvents = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text);

  /* 등록 버튼 */
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'todoListCreate', payload: Date.now() });
  };

  /* 입력 인풋 */
  const onInput = (event) => {
    dispatch({ type: 'text', payload: event.target.value });
  };

  const onRegistration = () => {};
  return (
    <div className='todo__events'>
      <form onSubmit={onSubmit} className='todo__form'>
        <input
          type='text'
          className='todo__input'
          onChange={onInput}
          value={text}
        />
        <button
          type='submit'
          className='todo__btn btn--bg-primary'
          onClick={onRegistration}
        >
          등록
        </button>
      </form>
    </div>
  );
};

export default TodoEvents;
