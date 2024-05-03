const initialState = {
  text: '',
  todo: [],
};

function reducer(state = initialState, action) {
  // console.log('payload', action.payload);
  // console.log('state', state.todo);

  switch (action.type) {
    case 'text':
      return { ...state, text: action.payload };
    case 'todoCreate':
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            number: action.payload,
            list: state.text,
            modify: false,
            password: action.payload,
          },
        ],
        text: '',

        // todo: {
        //   number: [...state.todo.number, action.payload],
        //   list: [...state.todo.list, state.text],
        //   modify: [...state.todo.modify, false],
        //   password: [...state.todo.password, action.payload],
        // },
      };
    case 'todoReset':
      return {
        ...state,
        todo: [...action.payload],
      };

    default:
      return { ...state };
  }
}

export default reducer;
