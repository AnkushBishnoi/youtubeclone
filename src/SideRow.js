import React from "react";
import "./SideRow.css";
 function SideRow({selected, Icon, title} ){
  return (
    <div className={`sideRow ${selected && "selected"}`}>
      <Icon className="sideRow__icon" />
      <h1 className="sideRow__title">{title}</h1>
    </div>
  );
}
export default SideRow;
