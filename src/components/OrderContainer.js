import React from "react";
import uniqCustomer from "../helpers/uniqCustomer";
import OrdersTable from "./OrdersTable";
import OrderChart from "./OrderChart";

const OrderContainer = (props) => {
  const { customers } = props;

  const customerFrequency = () => {
    const customerData = uniqCustomer(customers);
    const frequencyObj = { 1: 0, 2: 0, 3: 0, 4: 0, "5+": 0 };
    customerData.forEach((customer) => {
      const customerOrder = customers.filter((c) => {
        return c.Phone == customer.Phone;
      });
      if (customerOrder.length >= 5) {
        frequencyObj["5+"]++;
      } else {
        frequencyObj[customerOrder.length]++;
      }
    });
    return frequencyObj;
  };
  console.log(customerFrequency());

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h2>Order Distribution</h2>{" "}
        </div>
        <OrdersTable data={customerFrequency()} />
        <OrderChart data={customerFrequency()} />
      </div>
    </div>
  );
};

export default OrderContainer;
