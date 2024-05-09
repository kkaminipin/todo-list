import { useDispatch, useSelector } from 'react-redux';
import btnModify from '../../assets/images/btn_modify.png';
import btnDelete from '../../assets/images/btn_delete.png';

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
        className='btn btn--modify todo__btn'
        // onClick={onModifyBtn}
      >
        <img src={btnModify} alt='수정' className='todo__btn-img' />
      </button>
      <button
        type='button'
        className='btn btn--del todo__btn'
        onClick={onDeleteBtn}
      >
        <img src={btnDelete} alt='삭제' className='todo__btn-img' />
      </button>
    </>
  );
};

export default TodoItemButtons;
