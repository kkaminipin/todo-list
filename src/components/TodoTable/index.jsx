import TodoItems from '../TodoItems';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './styles/style.css';

const TodoTable = () => {
  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todo);

  const onModifyBtn = () => {
    // console.log(todoModify);
  };

  const onDeleteBtn = (index) => {
    const result = todo.filter((item, i) => {
      if (index !== i) {
        return item;
      }
    });
    console.log('result : ', result);
    dispatch({ type: 'todoListDelete', payload: result });
  };
  return (
    <table className='todo__table'>
      <colgroup>
        <col width={100} />
        <col width={'auto'} />
        <col width={150} />
      </colgroup>
      <thead>
        <tr>
          <th>번호</th>
          <th>리스트</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {todo.map((item, index) => {
          return (
            <tr key={index}>
              <TodoItems
                item={item.list}
                index={index}
                onModifyBtn={onModifyBtn}
                onDeleteBtn={onDeleteBtn}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TodoTable;
