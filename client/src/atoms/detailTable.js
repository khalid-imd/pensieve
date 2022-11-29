import React from "react";
import Table from "react-bootstrap/table";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = [
  {
    timeStamp: "31-08-2022 10:05",
    location: "L1",
  },
  {
    timeStamp: "31-08-2022 10:10",
    location: "L1",
  },
  {
    timeStamp: "31-08-2022 10:15",
    location: "L1",
  },
  {
    timeStamp: "31-08-2022 10:20",
    location: "L1",
  },
  {
    timeStamp: "31-08-2022 10:25",
    location: "L2",
  },
];

const chart = {
  labels: ["L1", "L2"],
  datasets: [
    {
      label: "% time spent on time location",
      data: [4, 1],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

export const Detailtable = () => {
  return (
    <Table className="sm table table-bordered">
      <thead className="">
        <tr className="text-light ">
          <th>Timestamp</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody className="">
        {data.map((item) => (
          <tr className="text-light">
            <td> {item.timeStamp} </td>
            <td>{item.location}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export const Piechart = () => {
  return (
    <Table className="sm table table-bordered">
      <thead className="">
        <tr className="text-light row">
          <th className="col-7">
            <div className="col-8 mx-auto">
              <Pie data={chart} />
            </div>
          </th>
          <th className="col-5 d-flex relative align-items-center">
            <div className="mx-auto">
              <div>
                <p>{chart.datasets[0].label}</p>
                <ul>
                  {chart?.labels.map((item) => (
                    <li>
                      <div>{item}</div>
                      <div>80%</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </th>
        </tr>
      </thead>
    </Table>
  );
};
