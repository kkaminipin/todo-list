const initialState = {
  text: '',
  todo: [],
};

function reducer(state = initialState, action) {
  console.log('payload', action.payload);
  console.log('state 변경');
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
            id: action.payload,
            number: action.payload,
            title: state.text,
            modify: false,
            password: action.payload,
            // state:"미완성"   이렇게 추가해서 상태에 따른 값 불러서 뷰에 뿌리기
          },
        ],
        text: '',
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
