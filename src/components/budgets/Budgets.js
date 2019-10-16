import React, { Component } from 'react';
import CreateBudget from './CreateBudget.js';
import BudgetList from './BudgetList.js';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';

export class Budgets extends Component {
  render() {
    const { budgets } = this.props;
    console.log(budgets);
    return (
      <div>
        <h1>Budget</h1>
        <CreateBudget />
        {/* {
          budgets.map( (budget) => {
            // return <div> budget. </div>
          })
        }
        <BudgetList budgets={budgets} /> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    budgets: state.firestore.data.budgets
  }
}

// export default compose(
//   firestoreConnect(() => [{ collection: 'budgets'}]), // sync todos collection from Firestore into redux
//   connect(mapStateToProps)
// )(Budgets)

// const mapStateToProps = ({ firebase, firestore }) => ({
//   // userId: firebase.auth.uid,
//   budgets: firestore.data.budgets,
//   requesting: firestore.status.requesting,
//   requested: firestore.status.requested,
// });

export default compose(
  firestoreConnect(() => ['budgets']), // sync todos collection from Firestore into redux
  connect((state) => ({ budgets: state.firestore.data.budgets })),
)(Budgets)

// const mapDispatchToProps = {};

// export default compose(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   ),
//   firestoreConnect(props => ['budgets'])
// )(Budgets);