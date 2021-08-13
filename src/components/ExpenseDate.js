import "./ExpenseItem.css";

const ExpenseDate = (props) => {
  const months = props?.date?.toLocaleString("en-US", { month: "long" });
  const day = props?.date?.toLocaleString("en-US", { date: "2-digit" });
  const year = props?.date?.getFullYear();
  console.log(props.date);
  return (
    <div className="expense-date">
      <div className="expense-date__month">{months}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
