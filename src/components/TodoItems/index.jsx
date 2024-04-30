import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'; //(index 대체)
import './styles/style.css';
import { useState } from 'react';

const TodoItems = ({ item, index, onModifyBtn, onDeleteBtn }) => {
  const number = useSelector((state) => state.todo.number);
  const [modifyInput, setModifyInput] = useState(false);

  return (
    <>
      <td>{index + 1}</td>
      <td>
        {
          <>
            {!modifyInput && <div>{item}</div>}
            {modifyInput && (
              <div>
                <input type='text' />
              </div>
            )}
          </>
        }
      </td>
      <td>
        <button
          type='button'
          className='todo__btn todo__btn-modify btn--bg-primary'
          onClick={() => onModifyBtn(item)}
        >
          수정
        </button>
        <button
          type='button'
          className='todo__btn todo__btn-del btn--bg-danger'
          onClick={() => onDeleteBtn(index)}
        >
          삭제
        </button>
      </td>
    </>
  );
};

TodoItems.propTypes = {
  item: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onModifyBtn: PropTypes.func.isRequired,
  onDeleteBtn: PropTypes.func.isRequired,
};

export default TodoItems;
