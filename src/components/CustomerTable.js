import React from "react";

const CustomerTable = (props) => {
  const { customers, showDetails } = props;
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Mobile</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer, i) => {
          return (
            <tr key={customer.Phone}>
              <td>{i + 1}</td>
              <td>{customer.Name}</td>
              <td>{customer.Phone}</td>
              <td>
                <button
                  onClick={() => showDetails(customer)}
                  className="btn btn-primary"
                >
                  Show
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CustomerTable;
