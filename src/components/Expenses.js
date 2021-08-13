import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = (props) => {
  return (
    <div className="expenses">
      {props.item?.map((index) => {
        return (
          <ExpenseItem
            title={index.title}
            date={index.date}
            amount={index.amount}
          ></ExpenseItem>
        );
      })}
    </div>
  );
};

export default Expenses;
