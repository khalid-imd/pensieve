import React from "react";
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
import { Button } from "react-bootstrap";
import "../App.css";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {/* <IoIosArrowBack onClick={Pagination - 1} /> */}
      {pages.map((page, index) => {
        return (
          <Button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={
              page === currentPage
                ? "active bg-dark border border-0"
                : "bg-none border border-0 bg-transparent"
            }
          >
            {page}
          </Button>
        );
      })}
      {/* <IoIosArrowForward onClick={Pagination + 1} /> */}
    </div>
  );
};

export default Pagination;
