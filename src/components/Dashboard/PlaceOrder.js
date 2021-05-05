import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../../Firebase/config";

const PlaceOrder = ({ order, setPlaceOrder }) => {
  useEffect(() => {
    console.log(order);
    const orderRef = projectFirestore.collection("userOrders");
    const orderDate = timestamp();
    orderRef
      .add({...order, orderDate})
      .then(setPlaceOrder(false))
      .then(alert("Order Placed Successfully"));
  }, [order]);
  return <div></div>;
};

export default PlaceOrder;
