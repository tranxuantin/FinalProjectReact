import ActionRedux from "./ActionRedux";

const initialState = {
  CheckLogin: "",
  UserData: "",
};

const CheckLogin = (state = initialState, action) => {
  switch (action.type) {
    case ActionRedux.LoginSuccess:
      return {
        CheckLogin: action.payload.boolean,
        UserData: action.payload.information,
      };

    default:
      return state;
  }
};

export default CheckLogin;
