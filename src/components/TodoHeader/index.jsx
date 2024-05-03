import './styles/style.css';

import { useSelector, useDispatch } from 'react-redux';

const TodoHeader = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text);

  /* 등록 버튼 */
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'todoCreate',
      payload: {
        id: Date.now(),
        text: text,
        password: text,
      },
    });
  };

  /* 입력 인풋 */
  const onInput = (event) => {
    dispatch({ type: 'text', payload: event.target.value });
  };

  return (
    <header className='todo__header'>
      <form onSubmit={onSubmit} className='todo__form'>
        <div className='todo__header-sort'>
          <div className='todo__state'>
            <button type='button' className='todo__btn'>
              미진행
            </button>
            <button type='button' className='todo__btn'>
              진행중
            </button>
            <button type='button' className='todo__btn'>
              완료
            </button>
          </div>
          <div className='todo__right'>
            <h2 className='titel todo__title'>To Do Lists</h2>
            <input
              type='text'
              className='todo__input'
              placeholder='Add your todos...'
              onChange={onInput}
              value={text}
            />
          </div>
        </div>
      </form>
    </header>
  );
};

export default TodoHeader;
