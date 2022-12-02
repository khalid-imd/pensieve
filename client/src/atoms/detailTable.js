import React from "react";
import Table from "react-bootstrap/table";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { API } from "../config/api";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Detailtable = () => {
  const { id } = useParams();
  let { data: data1, refetch } = useQuery("detailCache", async () => {
    const response = await API.get("/get-data");
    return response.data;
  });

  return (
    <Table className="sm table table-bordered">
      <thead className="">
        <tr className="text-light ">
          <th>Timestamp</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody className="">
        {data1?.map(
          (item) =>
            item.deviceid == id && (
              <tr className="text-light">
                <td> {item.timestamp} </td>
                <td>{item.location}</td>
              </tr>
            )
        )}
      </tbody>
    </Table>
  );
};

export const Piechart = () => {
  const { id } = useParams();
  let { data: data1, refetch } = useQuery("pieCache", async () => {
    const response = await API.get("/get-data");
    const filter = response.data.filter((p) => p.deviceid == id);
    return filter;
  });
  // console.log(data1?.map((p) => p.location));
  const labels = data1?.map((p) => p.location);
  console.log(labels);

  const chart = {
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
                  {labels?.map((item) => (
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
