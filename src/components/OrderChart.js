import React from "react";

const OrderChart = (props) => {
  const { data } = props;

  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);
  const chartData = [["No of Orders", "Count of Customers"]];
  for (let key in data) {
    chartData.push([key, data[key]]);
  }
  function drawChart() {
    const data = google.visualization.arrayToDataTable(chartData);

    const options = {
      title: "Order Distribution",
    };

    const chart = new google.visualization.PieChart(
      document.getElementById("piechart")
    );

    chart.draw(data, options);
  }
  return (
    <div className="col-md-6">
      <div id="piechart" style={{ width: "450px", height: "250px" }}></div>
    </div>
  );
};

export default OrderChart;
