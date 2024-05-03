import PropTypes from 'prop-types';
import './styles/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';

const TodoItems = ({ item, index }) => {
  const dispatch = useDispatch();

  const focusTest = useRef();

  const todo = useSelector((state) => state.todo);
  const modify = useSelector((state) => state.todo[index].modify);

  const onModifyBtn = () => {
    if (todo[index].modify === false) {
      todo[index].modify = true;
      setTimeout(() => {
        focusTest.current.focus();
      }, 0);
    } else {
      todo[index].modify = false;
    }
    dispatch({ type: 'todoReset', payload: todo });
  };

  const onDeleteBtn = () => {
    const newArray = todo.filter((item, i) => {
      if (index !== i) {
        return item;
      }
    });
    dispatch({ type: 'todoReset', payload: newArray });
  };

  const onModifyInput = (event, index) => {
    todo[index].list = event.target.value;
  };

  const onKeyEnter = (event) => {
    if (event.key === 'Enter') {
      onModifyBtn();
    }
  };

  /*
    1. 수정을 누르면 인풋 창이 나타나고 수정 버튼이 등록으로 바뀐다.
    2. 인풋에 입력을 한 뒤 등록 버튼을 누르면 인풋창이 없어지고 기존의 값이 입력한 값으로 바뀐다.
      2-1. 수정 인풋에 새로운 onChange를 넣는다. (처음엔 기존 onModifyBtn 으로 하려고 했는데 수정 버튼이라 input의 입력값을 알 수 없음)
      2-2. onChange에 함수를 만들고 인자값으로 event 와 index를 보낸다. 
      2-3. 새로 만든 함수에서 모든 리스트를 새로 다시 그려야하므로 모든 정보가 저장되어 있는 todo를 가져와서 map으로 돌린다.
      2-4. 아규먼트로 보낸 index와 map 함수 파라미터 2번째 값인 i로 수정하고자 하는 배열의 인덱스를 맞춰서 찾는다.
      2-5. todo[index]로 해당 부분의 투두 리스트 list 값에 파라미터로 받아온 event로   event.target.value를 넣어준다.
      2-6. 
    3. 

    
    
    ※ 공백일 시에는 alert 창 띄우기
    ※ 기능 참고 : https://velog.io/@dongoc21hj/Project-Retrotodo-ver.1-Preview
    ※ 리스트 클릭을 하면 수정 인풋 나오기 참고: https://chaelin1211.github.io/study/2021/04/02/todo-project-13.html
  */
  return (
    <>
      <td>{index + 1}</td>
      <td>
        {modify === true ? (
          <div>
            <input
              type='text'
              onChange={(event) => onModifyInput(event, index)}
              onKeyDown={(event) => onKeyEnter(event)}
              ref={focusTest}
            />
          </div>
        ) : (
          <div>{item}</div>
        )}
      </td>
      <td>
        {modify === true ? (
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
        <button
          type='button'
          onClick={() => {
            focusTest.current.focus();
          }}
        >
          포커스
        </button>
      </td>
    </>
  );
};

TodoItems.propTypes = {
  item: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default TodoItems;
