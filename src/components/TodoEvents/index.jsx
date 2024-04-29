import './styles/style.css';

import { useState } from 'react';

const TodoEvents = () => {
  console.log('시작');
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    setList([...list, text]);
    console.log('Submit!!');
  };

  const onInput = (event) => {
    console.log('input 이벤트');
    setText(event.target.value);
  };

  const onRegistration = () => {
    console.log('Click!!');
  };
  return (
    <div className='todo__events'>
      <form onSubmit={onSubmit} className='todo__form'>
        {console.log('인풋 태그 전 : ', text)}
        <input
          type='text'
          className='todo__input'
          onChange={onInput}
          value={text}
        />
        {console.log('인풋 태그 후 : ', text)}
        <button type='submit' className='todo__button' onClick={onRegistration}>
          등록
        </button>
      </form>
    </div>
  );
};

export default TodoEvents;
