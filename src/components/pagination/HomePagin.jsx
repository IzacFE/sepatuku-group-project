import React from "react";
import { Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomePagin() {
  return (
    <>
      <Pagination>
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>

        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item active>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </>
  );
}
