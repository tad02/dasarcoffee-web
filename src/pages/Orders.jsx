import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderList from "../pages/OrderList";
import localLink from "../config";
import AppUtils from "../utils/AppUtils";

function Orders() {
  return (
    <>
      <OrderList />
    </>
  );
}

export default Orders;
