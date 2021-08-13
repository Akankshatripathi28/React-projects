import Card from "./components/Card/Card";
import "./App.css";
import Sname from "./components/Sname/Sname";
import Netflix from "./components/Netflix/Netflix";
import Amazon from "./components/Amazon/Amazon";
function App() {
  const favSeries = "Netflix";

  const favS = () => {
    if (favSeries === "Netflix") {
      <Netflix />;
    } else {
      <Amazon />;
    }
  };
  return (
    <>
      <h1 className="heading_style">List of top series on Netflix</h1>
      <div className="main_container">
        {Sname.map((value) => {
          return (
            <Card
              key={value.id}
              imgsrc={value.imgsrc}
              title={value.title}
              sname={value.sname}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
