import React, { useEffect } from "react";

import {
  projectFirestore,
  timestamp,
} from "../../Firebase/config";

const PlaceOrder = ({ order, setPlaceOrder }) => {
  useEffect(() => {
    console.log(order);
    const orderRef = projectFirestore.collection("userOrders");
    const orderDate = timestamp();
    orderRef
      .add({ ...order, orderDate })
      .then(setPlaceOrder(false));
  }, [order, setPlaceOrder]);
  return <div></div>;
};

export default PlaceOrder;
