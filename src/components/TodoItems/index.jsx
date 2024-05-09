import TodoTitleOrModifyInput from '../TodoTitleOrModifyInput';
import TodoItemButtons from '../TodoItemButtons';
import { useState } from 'react';
import { useSelector } from 'react-redux';
// import TodoItem from '../TodoItem';

import './styles/style.css';

const TodoItems = () => {
  const todoItems = useSelector((state) => state.todoItems);

  const [btnState, setBtnState] = useState('미진행');
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

        const onStatusChangeBtn = (event) => {
          switch (todoItem.state) {
            case '미진행':
              event.target.classList.remove('status-btn--not-progressed');
              event.target.classList.add('status-btn--ongoing');
              todoItem.state = '진행중';
              setBtnState('진행중');
              break;
            case '진행중':
              event.target.classList.remove('status-btn--ongoing');
              event.target.classList.add('status-btn--completion');
              todoItem.state = '완료';
              setBtnState('완료');
              break;
            case '완료':
              event.target.classList.remove('status-btn--completion');
              event.target.classList.add('status-btn--not-progressed');
              todoItem.state = '미진행';
              setBtnState('미진행');
              break;
          }
        };
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

          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <button
                className='status-btn status-btn--not-progressed'
                onClick={(event) => {
                  onStatusChangeBtn(event);
                }}
              >
                <span className='blind'>{btnState}</span>
              </button>
            </td>
            <td>
              <TodoTitleOrModifyInput todoItem={todoItem} />
            </td>
            <td>
              <TodoItemButtons todoItem={todoItem} />
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default TodoItems;
