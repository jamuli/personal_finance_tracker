const initState = {}


const budgetReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_BUDGET_SUCCESS':
      console.log('create project success');
      return state;
    case 'CREATE_BUDGET_ERROR':
      console.log('create project error', action);
      return state;
    default:
      return state;
  }
};

export default budgetReducer