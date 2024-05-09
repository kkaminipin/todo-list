import TodoTitleOrModifyInput from '../TodoTitleOrModifyInput';
import TodoItemButtons from '../TodoItemButtons';
const TodoItem = () => {
  return (
    <tr key={index}>
      <td>0</td>
      <td>
        <span className=''></span>
      </td>
      <td>
        <TodoTitleOrModifyInput todoItem={todoItem} />
      </td>
      <td>
        <TodoItemButtons todoItem={todoItem} />
      </td>
    </tr>
  );
};

export default TodoItem;
