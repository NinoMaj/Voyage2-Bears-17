const initialState = [];

const jobs = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_JOBS":
      return action.payload;
    default:
      return state;
  }
};

export default jobs;
