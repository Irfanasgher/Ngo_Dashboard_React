import React from "react";
import { Row, Col } from "antd";
// import { MenuOutlined, FormOutlined } from '@ant-design/icons';

import ProgressBar from "../../Components/ProgressBar";
import RaiseMoney from "../../Components/RaiseMoney";
import CheckBoxInput from "../../Components/CheckBoxInput";
import LeftsideDraggable from "./LeftsideDraggable";
import RightsideDraggable from "./RightsideDraggable";

import "./Form_New_Contact.scss";

const Form_New_Contact = () => {
  const leftSideData = [
    {
      id: 1,
      defaultValue: "Title",
      checkbox: true,
    },
    {
      id: 2,
      defaultValue: "First name",
      checkbox: true,
    },
    {
      id: 3,
      defaultValue: "Last name",
      checkbox: true,
    },
    {
      id: 4,
      defaultValue: "E-Mail",
      checkbox: false,
    },
    {
      id: 5,
      defaultValue: "Phone number",

      checkbox: true,
    },
    {
      id: 6,
      defaultValue: "Newsletter subscription",
      checkbox: true,
    },
    {
      id: 7,
      defaultValue: "Donation receipt",
      checkbox: true,
    },
  ];
  const rightSideData = [
    {
      id: 1,
      defaultValue: "Company",
      checkbox: true,
    },
    {
      id: 2,
      defaultValue: "Country",
      checkbox: false,
    },
    {
      id: 3,
      defaultValue: "Street and house number",
      checkbox: true,
    },
    {
      id: 4,
      defaultValue: "City code",
      checkbox: false,
    },
    {
      id: 5,
      defaultValue: "City",
      checkbox: true,
    },
  ];

  return (
    <div id="contact">
      <ProgressBar percent={60} />
      <RaiseMoney
        heading={"Form fields contact details"}
        to={"/form-new-settings"}
      />
      <p className="select">Select the fields </p>
      <Row>
        <Col md={10}>
          <p className="donation mt-2">Contact Details</p>
          {/* {leftSideData.map((item, index) => (
            <CheckBoxInput item={item} key={index} />
          ))} */}
          <LeftsideDraggable />
        </Col>
        <Col md={{ span: 10, offset: 2 }}>
          <p className="donation mt-2">Address</p>
          <RightsideDraggable />
          {/* {rightSideData.map((item, index) => (
            <CheckBoxInput item={item} key={index} />
          ))} */}
        </Col>
      </Row>
    </div>
  );
};

export default Form_New_Contact;
