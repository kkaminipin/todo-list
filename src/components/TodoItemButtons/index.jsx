import { useDispatch, useSelector } from 'react-redux';

const TodoItemButtons = ({ todoItem }) => {
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todoItems);

  const onDeleteBtn = () => {
    const newList = todoItems.filter((item) => {
      if (item !== todoItem) {
        return item;
      }
    });
    dispatch({ type: 'todoReDraw', payload: newList });
  };
  return (
    <>
      <button
        type='button'
        className='todo__btn btn--sm btn--bg-primary'
        // onClick={onModifyBtn}
      >
        수정
      </button>
      <button
        type='button'
        className='todo__btn btn--sm btn--bg-danger'
        onClick={onDeleteBtn}
      >
        삭제
      </button>
    </>
  );
};

export default TodoItemButtons;
