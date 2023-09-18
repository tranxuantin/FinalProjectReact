import ActionRedux from "./ActionRedux";

const initialState = {
  CheckDelete: "",
};

const CheckDelete = (state = initialState, action) => {
  switch (action.type) {
    case ActionRedux.DeleteSuccess:
      return {
        CheckDelete: action.payload,
      };

    default:
      return state;
  }
};

export default CheckDelete;
