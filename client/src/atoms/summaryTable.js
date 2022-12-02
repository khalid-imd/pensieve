import React, { useState } from "react";
import Table from "react-bootstrap/table";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { BsArrowRightSquare } from "react-icons/bs";
import Pagination from "./paginations";
import { API } from "../config/api";
import { useQuery } from "react-query";
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";

const SummaryTable = () => {
  let { data: data1, refetch } = useQuery("summaryCache", async () => {
    const response = await API.get("/get-data");
    return response.data;
  });
  console.log(data1);

  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredData = data1?.filter((el) => {
    if (inputText === "") {
      return el;
    } else {
      return (
        el?.deviceid.toLowerCase().includes(inputText) ||
        el?.devicetype.toLowerCase().includes(inputText)
      );
    }
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredData?.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <div className="mb-3 row justify-content-between ">
        <Form.Group className="col-3">
          <Form.Control
            className="rounded-pill border-0 text-light bg-dark text-center"
            type="text"
            placeholder="Search by Device Id/Type"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={inputHandler}
          />
        </Form.Group>
        <div className="col-3 text-end">
          {currentPage * 5 - 4} -{" "}
          {currentPage * 5 <= data1?.length ? currentPage * 5 : data1?.length}{" "}
          of {data1?.length}
        </div>
      </div>
      <Table responsive="sm mb-4">
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
          {currentPosts?.map((item) => (
            <tr className="text-light">
              <td></td>
              <td>{item.deviceid}</td>
              <td> {item.devicetype} </td>
              <td> {item.timestamp} </td>
              <td> {item.location}</td>
              <td className="text-end">
                <Link
                  to={`/detail/${item.deviceid}`}
                  className="text-decoration-none text-black hover"
                >
                  see detail <BsArrowRightSquare className="text-white" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-center">
        <Pagination
          totalPosts={data1?.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default SummaryTable;
