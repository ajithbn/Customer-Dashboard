import React from "react";

const StatsItem = (props) => {
  const { count, text } = props;
  return (
    <div className="col-md-4">
      <div className="card text-dark bg-light mb-3">
        <div className="card-header">
          <h1>{count}</h1>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            {text}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default StatsItem;
