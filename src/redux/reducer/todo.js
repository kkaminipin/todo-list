const initialState = {
  todoItems: [],
  todoNotProgressed: [],
  todoOngoing: [],
  todoCompletion: [],
};

function todo(state = initialState, action) {
  // console.log('payload', action.payload);
  // console.log('state', state);

  /*
    1. 미진행, 진행중, 완료 각각의 투두 리스트 배열을 저장할 변수를 만든다.
    2. 버튼을 클릭시 해당 버튼에 맞는 변수에 배열이 담긴다.
    3. 
  */

  switch (action.type) {
    case 'todoTitle':
      return { ...state, todoTitle: action.payload };

    case 'todoCreate':
      return {
        ...state,
        todoItems: [
          ...state.todoItems,
          {
            // todoIdNumber: action.payload.todoIdNumber,
            todoTitle: state.todoTitle,
            modify: false,
            state: '미진행',
          },
        ],
        todoTitle: '',
      };
    case 'todoReDraw':
      return {
        ...state,
        todoItems: [...action.payload],
      };

    case 'todoSave':
      console.log('state', state);
      return {
        ...state,
        todoNotProgressed: [...action.payload],
      };

    default:
      return { ...state };
  }
}

export default todo;
