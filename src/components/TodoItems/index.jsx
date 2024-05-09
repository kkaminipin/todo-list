import TodoTitleOrModifyInput from '../TodoTitleOrModifyInput';
import TodoItemButtons from '../TodoItemButtons';
import { useState } from 'react';
import { useSelector } from 'react-redux';
// import TodoItem from '../TodoItem';

import './styles/style.css';
import { useDispatch } from 'react-redux';

const TodoItems = () => {
  const todoItems = useSelector((state) => state.todoItems);

  const dispatch = useDispatch();

  const onStatusChangeBtn = (event, todoItem) => {
    let state = getNextState(todoItem.state);

    dispatch({
      type: 'todoUpdate',
      payload: {
        ...todoItem,
        state,
      },
    });
  };

  const getNextState = (state) => {
    switch (state) {
      case '미진행':
        return '진행중';
      case '진행중':
        return '완료';
      case '완료':
        return '미진행';
      default:
        return '';
    }
  };

  const getProgressClassNames = (todoItem) => {
    switch (todoItem.state) {
      case '미진행':
        return 'status-btn--not-progressed';
      case '진행중':
        return 'status-btn--ongoing';
      case '완료':
        return 'status-btn--completion';
    }
  };

  return (
    <>
      {todoItems.map((todoItem, index) => {
        /*
        - 아래 onModifyBtn 함수는  TodoTitleOrModifyInput 와 TodoItemButtons 에서 둘 다 쓰인다.
        - 그래서 redux로 빼고 싶은데  함수를 redux로 빼는 방법을 모르겠다.
        - 리덕스로 빼도 initialState 전역 변수에 넣는 방법 밖에 모른다.
        - initialState 전역변수로 빼도 onModifyBtn 안에 있는 todoItem이 또 있어야하므로 복잡하다.
        - 지금까지 생각나는 건   1. onModifyBtn 과 todoItem 을 같이 initialState에 저장하는것이나
        - 2. 그냥 props로 onModifyBtn을 두곳에 보내는 것인데   만약 나중에 실무에서 redux로 보내야하는 경우를 위해
        이런 경우에서 redux로 보내는 경우를 알아야한다.
        
        const onModifyBtn = () => {
          if (todoItem.modify === false) {
            todoItem.modify = true;
          } else {
            todoItem.modify = false;
          }
          dispatch({ type: 'todoReDraw', payload: todoItems });
        };
        */

        return (
          /* 
            <TodoItem /> 
            아래 tr이나 tr 밑에 td들을 TodoItem로 컴퍼넌트화 시키려고 하였는데
            그렇게 되면 또 todoItem을 props로 TodoItem에 보내야하고 
            TodoItem 안에서 또 
            TodoTitleOrModifyInput 와 TodoItemButtons 한테 컴포넌트로 보내야해서
            redux로 뺴야한다. 
            그러므로  <TodoItem />를 컴포넌트화 시키는것이 좋은 방법이 아닐 수 있다.
          */

          <>
            {/* <React.Fragment key={}>*/}
            {/* <TodoItem />  */}
            <tr key={todoItem.id}>
              <td>{index + 1}</td>
              <td>
                <button
                  className={'status-btn ' + getProgressClassNames(todoItem)}
                  onClick={(event) => {
                    onStatusChangeBtn(event, todoItem);
                  }}
                >
                  <span className='blind'>{todoItem.state}</span>
                </button>
              </td>
              <td>
                <TodoTitleOrModifyInput todoItem={todoItem} />
              </td>
              <td>
                <TodoItemButtons todoItem={todoItem} />
              </td>
            </tr>
            {/*</React.Fragment>*/}
          </>
        );
      })}
    </>
  );
};

export default TodoItems;
