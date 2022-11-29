import React from "react";
import { Detailtable, Piechart } from "../atoms/detailTable";

const Id = "D-1657";
const type = "Aircraft";

const Detail = () => {
  return (
    <div
      className="bg-black d-flex align-items-center row"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div
        style={{ height: "600px" }}
        className="border border-white col-10 rounded-5 m-auto row p-5"
      >
        <div className="text-light">
          <h2 className="">{Id}</h2>
          <h3 className="mb-4"> {type} </h3>
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
