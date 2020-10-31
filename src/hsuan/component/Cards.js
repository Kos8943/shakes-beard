import React from "react";
import { Link } from "react-router-dom";
import "../Project.css";
import tie from "../icon/tie-01.jpg";
import { Breadcrumb } from "react-bootstrap";

function Cards(props) {
  console.log("Cards", props);
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Data
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
      <div className="hsuanproduct">
        <img
          src={require("../icon/tie-01.jpg")}
          className="card-img-top"
          alt="..."
        />
      </div>
    </>
  );
}
// FaRegHeart、FaHeart

export default Cards;
