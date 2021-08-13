import Sname from "../Sname/Sname";
import Card from "../Card/Card";
import React from "react";
const Netflix = () => {
  return (
    <Card
      key={Sname[1].id}
      imgsrc={Sname[1].imgsrc}
      title={Sname[1].title}
      sname={Sname[1].sname}
    />
  );
};

export default Netflix;
