import TodoItems from '../TodoItems';
import { useSelector } from 'react-redux';

import './styles/style.css';

const TodoContainer = () => {
  const todo = useSelector((state) => state.todo);

  return (
    <table className='todo__container'>
      <colgroup>
        <col width={50} />
        <col width={'auto'} />
        <col width={200} />
      </colgroup>
      {/* <thead>pnpm
        <tr>
          <th>번호</th>
          <th>리스트</th>
          <th>삭제</th>
        </tr>
      </thead> */}
      <tbody>
        {todo.map((todoItem, index) => {
          return (
            <tr key={index}>
              <TodoItems todoItem={todoItem} index={index} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TodoContainer;
