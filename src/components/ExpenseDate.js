const ExpenseDate = (props) => {
  const months = props?.date?.toLocaleString("en-US", { month: "long" });
  const date = props?.date?.toLocaleString("en-US", { date: "2-digit" });
  const year = props?.date?.getFullYear();
  console.log(props.date);
  return (
    <div>
      <div>{months}</div>
      <div>{date}</div>
      <div>{year}</div>
    </div>
  );
};

export default ExpenseDate;
