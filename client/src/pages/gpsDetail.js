import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Detailtable, Piechart } from "../atoms/detailTable";
import { API } from "../config/api";

const Detail = () => {
  const { id } = useParams();

  let { data: data1, refetch } = useQuery("gpsCache", async () => {
    const response = await API.get("/get-data");
    const filter = response.data.find((p) => p.deviceid == id);
    return filter;
  });
  console.log(data1);

  return (
    <div
      className="bg-black d-flex align-items-center row"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div
        style={{ height: "70%" }}
        className="border  border-white col-10 rounded-5 m-auto row p-5"
      >
        <div className="text-light">
          <h2 className="">{data1?.deviceid}</h2>
          <h3 className="mb-4"> {data1?.devicetype} </h3>
          <div className="row g-5">
            <div className="col-4">
              <Detailtable />
            </div>
            <div className="col-8">
              <Piechart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
