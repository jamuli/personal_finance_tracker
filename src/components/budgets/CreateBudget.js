import React, { Component } from 'react';
import { Button, Col, Form, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createBudget } from '../../store/actions/budgetActions.js';

// import yup from 'yup';
// import { Formik } from 'formik';
// import BudgetForm from './BudgetForm.js';
import './CreateBudget.css';

let options = [
  "Choose",
  "Car/Transportation",
  "Bills & Utilities",
  "Education",
  "Entertianment",
  "Food & Dining",
  "Groceries",
  "Home",
  "Morgage/Rent",
  "Pets",
  "Shopping",
  "Travel"
];

const formValid = (formErrors, category, amount) => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false) // sets valid to false if length NOT > 0
  });

  if (category === "Choose" || amount === null) valid = false;



  return valid;
}

// const schema = yup.object({
//   expenseCategory: yup.string().required(),
//   expenseAmount: yup.number().required(),
// });

export class CreateBudget extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      show: false,
      setShow: false,
      newBudget: {
        expenseCategory: "Choose",
        expenseAmount: null,
      },
      categoryValid: true,
      amountValid: true,
      validated: false,
      formErrors: {
        expenseCategory: "",
        expenseAmount: ""
      }
    }
  }

  handleShow = () => {
    this.setState({ show: true });
  }
  handleClose = () => {
    this.setState({
      show: false,
      newBudget: {expenseCategory: "Choose", expenseAmount: null}
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let { expenseCategory, expenseAmount } = this.state.newBudget;
    let errors = this.state.formErrors;

    //adding
    if (formValid( errors, expenseCategory, expenseAmount )) {
      // TODO: submit newBudget to database
      // console.log(`
      //   --Submitting--
      //   expenseCategory: ${this.state.newBudget.expenseCategory}
      //   expenseAmount: ${this.state.newBudget.expenseAmount}
      // `)
      this.props.createBudget(
        { category: expenseCategory, spent: {201909: 0}, limit: expenseAmount }
      );
      this.handleClose();
    }   
  };

  handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch(name) {
      case 'expenseCategory':
        formErrors.expenseCategory = 
          value === "Choose"  ? "a valid selection is required" : "";
        break;
      case 'expenseAmount':
        formErrors.expenseAmount = 
          (value === 0 || isNaN(value)) ? "a valid number is required" : "";
        break;
      default:
        break;
    }

    this.setState(
      {
        formErrors,
        newBudget: { ...this.state.newBudget, [name] : value } 
      }, () => console.log(this.state.newBudget, this.state.formErrors) 
    );
  }
  
  render() {
    const { formErrors } = this.state;
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Add item to budget
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new expense to budget</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} controlId="expenseCategory">
                  <Form.Label column>
                    Expense Category
                  </Form.Label>
                  <Form.Control
                    className= {formErrors.expenseCategory.length > 0 ? "error" : null}
                    as="select"
                    placeholder = "Choose"
                    name="expenseCategory"
                    noValidate
                    onChange={this.handleChange}
                  >
                    {
                      options.map( (e) => {
                        return( <option>{e}</option> )
                      })
                    }
                  </Form.Control>
                  {formErrors.expenseCategory.length > 0 && (
                    <span
                      className="errorMessage"
                      variant="danger"
                    >{formErrors.expenseCategory}</span>
                  )}
                  
                </Form.Group>
                <Form.Group as={Col} controlId="expenseAmount">
                  <Form.Label column sm={5}>
                    Amount
                  </Form.Label>
                  <Form.Control
                    className= {formErrors.expenseAmount.length > 0 ? "error" : null} 
                    type="text"
                    placeholder="0.00"
                    name="expenseAmount"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.expenseAmount.length > 0 && (
                    <span className="errorMessage">{formErrors.expenseAmount}</span>
                  )}
                  
                </Form.Group>
              </Form.Row>
            </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={this.handleSubmit}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createBudget: (budget) => dispatch(createBudget(budget))
  }
}

export default connect(null, mapDispatchToProps)(CreateBudget)
