import React from "react";
import { Fragment } from "react";

import DummyOrders from './../../DummyOrders'
import GridItem from "./GridItem";

const OTGrid = (props) => {

  return (
    <Fragment>
    {DummyOrders.map((item) => {
      return <GridItem item={item} key={item._id} />;
    })}
    </Fragment>
  );
};

export default OTGrid;
