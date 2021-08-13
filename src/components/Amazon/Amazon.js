import Sname from "../Sname/Sname";
import Card from "../Card/Card";
import React from "react";
const Amazon = () => {
  return (
    <Card
      key={Sname[7].id}
      imgsrc={Sname[7].imgsrc}
      title={Sname[7].title}
      sname={Sname[7].sname}
    />
  );
};

export default Amazon;
