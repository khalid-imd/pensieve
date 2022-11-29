import React from "react";
import Table from "react-bootstrap/table";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { BsArrowRightSquare } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const SummaryData = [
  {
    deviceId: "D-1567",
    deviceType: "Aircraft",
    Timestamp: "31-08-2022 10:05",
    location: "L1",
  },
  {
    deviceId: "D-1567",
    deviceType: "Aircraft",
    Timestamp: "31-08-2022 10:10",
    location: "L1",
  },
  {
    deviceId: "D-1567",
    deviceType: "Aircraft",
    Timestamp: "31-08-2022 10:15",
    location: "L1",
  },
  {
    deviceId: "D-1567",
    deviceType: "Aircraft",
    Timestamp: "31-08-2022 10:20",
    location: "L1",
  },
  {
    deviceId: "D-1567",
    deviceType: "Aircraft",
    Timestamp: "31-08-2022 10:25",
    location: "L2",
  },
  {
    deviceId: "D-1568",
    deviceType: "Personal",
    Timestamp: "31-08-2022 10:05",
    location: "L3",
  },
  {
    deviceId: "D-1568",
    deviceType: "Personal",
    Timestamp: "31-08-2022 10:10",
    location: "L3",
  },
  {
    deviceId: "D-1568",
    deviceType: "Personal",
    Timestamp: "1-08-2022 10:15",
    location: "L3",
  },
];

const SummaryTable = () => {
  return (
    <div>
      <div className="mb-3 row justify-content-between ">
        <Form.Group className="col-3">
          <Form.Control
            className="rounded-pill border-0 text-light bg-dark text-center"
            type="search"
            placeholder="Search by Device Id/Type"
            aria-label="Search"
            aria-describedby="search-addon"
          />
        </Form.Group>
        <div className="col-3 text-end">
          1 - 5 of 6 <IoIosArrowBack /> <IoIosArrowForward />
        </div>
      </div>
      <Table responsive="sm">
        <thead>
          <tr className="text-light">
            <th></th>
            <th>Device ID</th>
            <th>Device Type</th>
            <th>Time Stamp</th>
            <th>Location</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {SummaryData.map((item) => (
            <tr className="text-light">
              <td></td>
              <td>{item.deviceId}</td>
              <td> {item.deviceType} </td>
              <td> {item.Timestamp} </td>
              <td> {item.location}</td>
              <td className="text-end">
                <Link
                  to="/detail"
                  className="text-decoration-none text-black hover"
                >
                  see detail <BsArrowRightSquare className="text-white" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SummaryTable;
