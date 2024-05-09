import PropTypes from 'prop-types';
import './styles/style.css';
import TodoListButtons from '../TodoListButtons';

import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
// import RegisterImage from '../../assets/images/modify.png';

const todoItem = ({ todoItem }) => {
  const dispatch = useDispatch();
  const focusTest = useRef();

  const todoItems = useSelector((state) => state.todoItems);

  const onModifyBtn = () => {
    if (todoItem.modify === false) {
      todoItem.modify = true;
      setTimeout(() => {
        focusTest.current.focus();
      }, 0);
    } else {
      todoItem.modify = false;
    }
    dispatch({ type: 'todoReDraw', payload: todoItems });
  };

  const onDeleteBtn = () => {
    const newArray = todoItems.filter((item, index) => {
      if (todoItem.todoIdNumber !== index) {
        return item;
      }
    });
    dispatch({ type: 'todoReDraw', payload: newArray });
  };

  const onModifyInput = (event) => {
    todoItem.list = event.target.value;
  };

  const onKeyEnter = (event) => {
    if (event.key === 'Enter') {
      onModifyBtn();
    }
  };

  /*
    ※ 공백일 시에는 alert 창 띄우기
    ※ 기능 참고 : https://velog.io/@dongoc21hj/Project-Retrotodo-ver.1-Preview
    ※ 리스트 클릭을 하면 수정 인풋 나오기 참고: https://chaelin1211.github.io/study/2021/04/02/todo-project-13.html
  */
  return (
    <>
      <td>0</td>
      <td>
        {/* 240503 컴포넌트화 시켜서 useRef 사용하기 */}
        {todoItem.modify === true ? (
          <div>
            <input
              type='text'
              onChange={(event) => onModifyInput(event)}
              onKeyDown={(event) => onKeyEnter(event)}
              ref={focusTest}
            />
          </div>
        ) : (
          <div>{todoItem.todoTitle}</div>
        )}
        {/* // 240503 컴포넌트화 시켜서 useRef 사용하기 */}
      </td>
      <td>
        {/* 240503 컴포넌트화 시키기 */}
        {/* <TodoListButtons /> */}

        {todoItem.modify === true ? (
          <button
            type='submit'
            className='todo__btn todo__btn-registration btn--bg-success'
            onClick={onModifyBtn}
          >
            등록
          </button>
        ) : (
          <button
            type='button'
            className='todo__btn todo__btn-modify btn--bg-primary'
            onClick={onModifyBtn}
          >
            수정
          </button>
        )}
        <button
          type='button'
          className='todo__btn todo__btn-del btn--bg-danger'
          onClick={onDeleteBtn}
        >
          삭제
        </button>
        {/* // 240503 컴포넌트화 시키기 */}
      </td>
    </>
  );
};

todoItem.propTypes = {
  todoItem: PropTypes.object.isRequired,
};

export default todoItem;
