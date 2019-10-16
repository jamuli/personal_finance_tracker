export const createBudget = (budget) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    console.log(budget, "this is the budget to be added");
    const firestore = getFirestore();
    firestore.collection("budgets").add({
      ...budget,
      userID: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_BUDGET_SUCCESS' });
    }).catch(err => {
      console.log(err);
      dispatch({ type: 'CREATE_BUDGET_ERROR' }, err);
    });
  }
};