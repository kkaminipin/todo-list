const TodoTitleOrModifyInput = ({ todoItem }) => {
  const onModifyInput = (event) => {
    todoItem.todoTitle = event.target.value;
  };
  const onKeyEnter = (event) => {
    if (event.key === 'Enter') {
      // onModifyBtn();
    }
  };
  return (
    <>
      {todoItem.modify === true ? (
        <input
          type='text'
          onChange={(event) => onModifyInput(event)}
          onKeyDown={(event) => onKeyEnter(event)}
        />
      ) : (
        <>{todoItem.todoTitle}</>
      )}
    </>
  );
};

export default TodoTitleOrModifyInput;
