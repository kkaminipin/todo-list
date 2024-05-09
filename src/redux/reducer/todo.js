const initialState = {
  todoItems: [],
  todoNotProgressed: [],
  todoOngoing: [],
  todoCompletion: [],
};

function todo(state = initialState, action) {
  /*
    1. 미진행, 진행중, 완료 각각의 투두 리스트 배열을 저장할 변수를 만든다.
    2. 버튼을 클릭시 해당 버튼에 맞는 변수에 배열이 담긴다.
    3. 
  */
  // console.log('state', state);
  console.log('payload : ', action.payload);

  let newState;

  switch (action.type) {
    case 'todoTitle':
      return { ...state, todoTitle: action.payload };

    case 'todoCreate':
      console.log(state.todoTitle, action.payload);
      newState = {
        ...state,
        todoItems: [
          ...state.todoItems,
          {
            // todoIdNumber: action.payload.todoIdNumber,
            todoTitle: action.payload,
            modify: false,
            state: '미진행',
            id: Math.random(),
          },
        ],
        todoTitle: '',
      };
      console.log(newState);
      return newState;
    case 'todoReDraw':
      return {
        ...state,
        todoItems: [...action.payload],
      };
    case 'todoUpdate':
      return {
        ...state,
        todoItems: state.todoItems.map((item) => {
          console.log('paylOad : ', action.payload);
          console.log('id : ', item.id);
          if (action.payload.id === item.id) {
            return action.payload;
          }
          return item;
        }),
      };

    case 'todoSave':
      return {
        ...state,
        todoNotProgressed: [...action.payload],
      };

    default:
      return { ...state };
  }
}

export default todo;
