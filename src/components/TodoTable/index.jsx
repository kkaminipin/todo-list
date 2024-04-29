import TodoItems from '../TodoItems';
import './styles/style.css';

const TodoTable = () => {
  return (
    <table className='todo__table'>
      <colgroup>
        <col width={100} />
        <col width={'auto'} />
        <col width={100} />
      </colgroup>
      <thead>
        <tr>
          <th>번호</th>
          <th>리스트</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        <TodoItems />
      </tbody>
    </table>
  );
};

export default TodoTable;
