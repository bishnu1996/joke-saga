import Action from "./action";

const defaultState = {
  joke: "",
  error: false,
  message: "",
};

const jokeReducer = (state=defaultState, action) => {
  console.log('jokereducer state',state, 'action',action);
  switch (action.type) {
    case Action.FETCH_SUCCESS:
      console.log('action joke',action.payload);
      return { ...state, joke: action.payload.joke, error: false, message: '' };
    case Action.FETCH_FAILED:
      return {
        ...state,
        joke: "",
        error: true,
        message: action.payload.message,
      };
      default:
        return state;
  }
};

export default jokeReducer;