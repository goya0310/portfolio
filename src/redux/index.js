const initialState = {
  isChecked: false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_LANGUAGUE":
      return {
        ...state,
        isChecked: action.payload,
      };
    default:
      return { ...state };
  }
}
