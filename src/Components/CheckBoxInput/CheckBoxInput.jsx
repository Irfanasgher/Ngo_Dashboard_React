import React, { useState } from "react";
import { Mentions, Checkbox } from "antd";
import Image from "react-bootstrap/Image";

import "./CheckBoxInput.scss";
const CheckBoxInput = ({ item }) => {
  const [disableText, setDisableText] = useState(true);
  return (
    <div id="checkBoxInput">
      <div className="box mt-3 d-flex align-items-center">
        {/* <Input prefix={<MenuOutlined />} suffix={<FormOutlined />} value='Title' /> */}
        <Image
          src="/images/hamburger-menu.png"
          alt="hamburger-menu"
          className="px-2"
        />
        <Mentions
          style={{ width: "75%" }}
          defaultValue={item.defaultValue}
          disabled={disableText}
        />
        <Image
          src="/images/edit-square.png"
          alt="edit-square"
          className="px-2"
          onClick={() => setDisableText(false)}
        />
        {item.checkbox && <Checkbox />}
      </div>
    </div>
  );
};

export default CheckBoxInput;
