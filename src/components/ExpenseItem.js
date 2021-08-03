import userEvent from "@testing-library/user-event";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";

const ExpensiveItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
};

export default ExpensiveItem;
