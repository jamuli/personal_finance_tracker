import React from 'react'

const BudgetList = ({budgets}) => {
  return (
    <div>
      {/* {
        budgets && budgets.map(budget => {
          return (
            <div key={budget.id}>
              <h4>{budget.category}</h4>
              <h5>spent ${budget.spent} of ${budget.limit}</h5>
            </div>
          )
        })
      } */}
    </div>
  )
}

export default BudgetList
