import React from "react";

const Item = (props) => {
  return (
    <div className={props.className}>
      <span>{props.children}</span>
    </div>
  );
};

export default Item;
