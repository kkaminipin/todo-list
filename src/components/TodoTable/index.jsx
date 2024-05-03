import TodoItems from '../TodoItems';
import { useSelector } from 'react-redux';

import './styles/style.css';

const TodoTable = () => {
  const todo = useSelector((state) => state.todo);

  return (
    <table className='todo__table'>
      <colgroup>
        <col width={50} />
        <col width={'auto'} />
        <col width={200} />
      </colgroup>
      {/* <thead>
        <tr>
          <th>번호</th>
          <th>리스트</th>
          <th>삭제</th>
        </tr>
      </thead> */}
      <tbody>
        {todo.map((item, index) => {
          return (
            <tr key={index}>
              <TodoItems item={item.list} index={index} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TodoTable;
