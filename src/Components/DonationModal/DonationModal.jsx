import React, { useState, useEffect } from "react";
import {
  Upload,
  Form,
  Input,
  Modal,
  Button,
  Row,
  Col,
  Checkbox,
  Space,
} from "antd";

import Image from "react-bootstrap/Image";
import Switche from "../../Components/Switche";

import "./DonationModal.scss";

const { TextArea } = Input;
const { Search } = Input;
const DonationModal = ({ isModalVisible, setIsModalVisible, ...props }) => {
  const [leftDisplay, setLeftDisplay] = useState(false);
  const [rightDisplay, setRightDisplay] = useState(false);
  const [stateValueLeft, setStateValueLeft] = useState(0);
  const [stateValueRight, setStateValueRight] = useState(0);

  // const [render, setRender] = useState(false);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  const [form] = Form.useForm();

  // useEffect(() => {
  //   const item = JSON.parse(localStorage.getItem("LeftFieldData"));
  //   if (item) {
  //     setData1(item);
  //   }
  // }, []);

  // useEffect(() => {
  //   const item = JSON.parse(localStorage.getItem("RightFieldData"));
  //   if (item) {
  //     setData2(item);
  //   }
  // }, []);

  const AddField = () => {
    setLeftDisplay(true);
    console.log(data1);
  };
  const AddFieldRight = () => {
    setRightDisplay(true);
  };

  const onSearchLeft = (value) => {
    // let idvalue = 0;
    setStateValueLeft(stateValueLeft + 1);
    let tryValue = data1.slice();
    {
      value && tryValue.push({ newValues: value, id: stateValueLeft });
    }
    setData1(tryValue);
    // let newValues = value;
    // let LeftFieldData = JSON.parse(localStorage.getItem("LeftFieldData")) || [];
    // {
    //   newValues &&
    //     localStorage.setItem(
    //       "LeftFieldData",
    //       JSON.stringify(LeftFieldData.concat({ newValues }))
    //     );
    // }
    setLeftDisplay(false);
  };

  const onSearchRight = (value) => {
    setStateValueRight(stateValueRight + 1);
    let tryValue = data2.slice();
    {
      value && tryValue.push({ newValues: value, id: stateValueRight });
    }

    console.log(tryValue, "tryValue");
    setData2(tryValue);
    let newValues = value;
    // let RightFieldData =
    //   JSON.parse(localStorage.getItem("RightFieldData")) || [];
    // {
    //   newValues &&
    //     localStorage.setItem(
    //       "RightFieldData",
    //       JSON.stringify(RightFieldData.concat({ newValues }))
    //     );
    // }
    setRightDisplay(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleDeleteLeft = (id) => {
    const sorted = data1.filter((data) => data.id !== id);
    console.log(sorted, "sorted");
    setData1(sorted);
  };
  const handleDeleteRight = (id) => {
    const sorted = data2.filter((data) => data.id !== id);
    console.log(sorted, "sorted");
    setData2(sorted);
  };
  const onFinish = (values) => {
    values.data1 = data1;
    values.data2 = data2;
    console.log("Success:", values);
    // console.log(data1);
  };

  const onFinishFailed = (errorInfo) => {
    errorInfo.data1 = data1;
    errorInfo.data2 = data2;
    console.log("Failed:", errorInfo);
    // console.log(data1);
  };
  // const checkBoxValidator = (value) => {
  //   console.log("checkValue", value);
  //   // console.log(data1);
  // };

  return (
    <div id="donationModal">
      <Modal
        wrapClassName="donationModal"
        width={"100vw"}
        // title='Basic Modal'
        visible={isModalVisible}
        destroyOnClose={false}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div className="d-flex align-items-center justify-content-between pt-2 px-3">
            <h1 className="add-project">Add simple project topic</h1>
            <div>
              <Button onClick={handleCancel} className="cancel-button">
                Cancel
              </Button>
              <Button className="add-button ml-3" htmlType="submit">
                Add
              </Button>
            </div>
          </div>
          <hr className="mt-2" />

          <Row className="py-2 px-3">
            <Col md={{ span: 11 }}>
              <p className="donation my-2">
                Title - what are the donations used for?
              </p>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please write the purpose of donation",
                  },
                ]}
              >
                <Input
                  className="custom-input"
                  placeholder="e.g. protect elephants in Africa"
                />
              </Form.Item>
              <p className="donation mb-2">Description</p>
              <Form.Item
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Please input some detail here ",
                  },
                ]}
              >
                <TextArea
                  style={{ height: "auto" }}
                  className="custom-input"
                  rows={4}
                  placeholder="Briefly summarize what exactly you are collecting for and why, and how the money will be used. It is best to make bullet points."
                />
              </Form.Item>
              <p className="donation">Satellite image</p>
              <p className="recommend mt-2">
                You can set here on Google Maps the location where your project
                will be implemented. Depending on the template, an interactive
                map will appear.
              </p>
              <Form.Item
                name="url"
                rules={[
                  {
                    required: true,
                    type: URL,
                  },
                ]}
              >
                <div className="image-box d-flex align-items-center">
                  <Input
                    className="location-input"
                    placeholder="Add location url here"
                  />

                  {/* <Upload>
                    <Button>Click here to set location</Button>
                  </Upload> */}
                </div>
              </Form.Item>
            </Col>
            <Col md={{ span: 11, offset: 2 }}>
              <p className="donation mt-2">Teaser-Image</p>
              <p className="recommend mt-2">
                We recommend that you upload a good photo that matches your
                donation purpose. We have found that projects with pictures
                receive significantly more donations.{" "}
              </p>
              <Form.Item
                name="teaserImage"
                rules={[
                  {
                    required: true,
                    message: "Please Upload Teaser Image ",
                  },
                ]}
              >
                <div className=" image-box d-flex align-items-center">
                  <Image
                    src="images/image.png"
                    alt="box-image"
                    className="mx-3"
                  />
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture"
                    maxCount={1}
                  >
                    <Button>
                      Hier klicken, um Bild <br /> hochzuladen
                    </Button>
                  </Upload>
                </div>
              </Form.Item>
              <p className="donation mt-3">Sidebar-Image</p>
              <p className="recommend mt-2">
                This image is displayed on the left side.
              </p>
              <Form.Item
                name="sidebarImage"
                rules={[
                  {
                    required: true,
                    message: "Please Upload Sidebar Image ",
                  },
                ]}
              >
                <div className="image-box d-flex align-items-center">
                  <Image
                    src="images/image.png"
                    alt="box-image"
                    className="mx-3"
                  />
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture"
                    maxCount={1}
                  >
                    <Button>
                      Hier klicken, um Bild <br /> hochzuladen
                    </Button>
                  </Upload>
                </div>
              </Form.Item>
            </Col>
          </Row>

          <hr />
          <Form.Item
            name="checkbox-group"
            className="px-3"
            valuePropName="checked"
            //   rules={
            //     [
            //     {
            //       validator: (_, value) =>
            //         value.length > 0
            //           ? Promise.resolve()
            //           : Promise.reject(new Error("Select at least one checkbox")),
            //     },
            //   ]
            // }
          >
            {/* <Checkbox.Group> */}
            <Row className="mt-3 ">
              <Col md={{ span: 11 }}>
                <div className="d-flex align-items-center w-100">
                  <Switche />
                  <p className="activate ml-3">Activate one-time donations</p>
                </div>
                <p className="donation-level mt-3">
                  What donation levels do you want to offer for one-time
                  donations?
                </p>
                {/* <div className="d-flex align-items-center">
                    <h3 className="number mr-2">10</h3>
                    <Image src="/images/Group 7.png" alt="group" />
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <h3 className="number mr-2">50</h3>
                    <Image src="/images/Group 7.png" alt="group" />
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <h3 className="number mr-2">100</h3>
                    <Image src="/images/Group 7.png" alt="group" />
                  </div> */}
                {data1.map((value, key) => {
                  return (
                    <div key={key} className="d-flex align-items-center mt-3">
                      <h3 className="number mr-2">{value.newValues}</h3>
                      <Image src="/images/hamburger-menu.png" alt="group" />
                      <Image
                        src="/images/close.png"
                        alt="group"
                        onClick={() => handleDeleteLeft(value.id)}
                      />
                    </div>
                  );
                })}
                <Space
                  direction="vertical"
                  style={{
                    display: leftDisplay ? "block" : "none",
                    marginTop: "10px",
                  }}
                >
                  <Search
                    enterButton="Add"
                    placeholder="Enter Price Value"
                    onSearch={onSearchLeft}
                    className="customAddField"
                    style={{ width: 200, borderRadius: "50px" }}
                  />
                </Space>
                {/* <Form.List name="users">
                    {(fields, { add, remove }) => (
                      <>
                        {fields.map((field) => (
                          <Space
                            key={field.key}
                            style={{ display: "flex", marginBottom: 8 }}
                            align="baseline"
                          >
                            <Form.Item
                              {...field}
                              name={[field.name, "first"]}
                              fieldKey={[field.fieldKey, "first"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Missing first name",
                                },
                              ]}
                            >
                              <Input placeholder="First Name" />
                            </Form.Item>
                            <MinusCircleOutlined
                              onClick={() => remove(field.name)}
                            />
                          </Space>
                        ))}
                        <Form.Item>
                          <Button
                            type="dashed"
                            onClick={() => add()}
                            block
                            icon={<PlusOutlined />}
                          >
                            Add field
                          </Button>
                        </Form.Item>
                      </>
                    )}
                  </Form.List>
                  <Form.Item>
                    <Button type="submit" >Submit</Button>
                  </Form.Item> */}

                <p className="donation-amount mt-3" onClick={AddField}>
                  Add donation amount
                </p>
                <div className="d-flex align-items-center w-100 mt-3">
                  <Switche />
                  <p className="activate ml-3">
                    Add freely selectable donation amount for one-time donations
                  </p>
                </div>
              </Col>
              <Col md={{ span: 11, offset: 2 }}>
                <div className="d-flex align-items-center w-100">
                  <Switche />
                  <p className="activate ml-3">Activate monthly donations</p>
                </div>
                <p className="donation-level mt-3">
                  What donation levels do you want to offer for monthly
                  donations?
                </p>
                {/* <div className="d-flex align-items-center">
                    <h3 className="number mr-2">5</h3>
                    <Image src="/images/Group 7.png" alt="group" />
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <h3 className="number mr-2">12</h3>
                    <Image src="/images/Group 7.png" alt="group" />
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <h3 className="number mr-2">15</h3>
                    <Image src="/images/Group 7.png" alt="group" />
                  </div> */}
                {data2.map((value, key) => {
                  return (
                    <div key={key} className="d-flex align-items-center mt-3">
                      <h3 className="number mr-2">{value.newValues}</h3>
                      <Image src="/images/hamburger-menu.png" alt="group" />
                      <Image
                        src="/images/close.png"
                        alt="group"
                        onClick={() => handleDeleteRight(value.id)}
                      />
                    </div>
                  );
                })}
                <Space
                  direction="vertical"
                  style={{
                    display: rightDisplay ? "block" : "none",
                    marginTop: "10px",
                  }}
                >
                  <Search
                    enterButton="Add"
                    placeholder="Enter Price Value"
                    onSearch={onSearchRight}
                    className="customAddField"
                    style={{ width: 200, borderRadius: "50px" }}
                  />
                </Space>
                <p className="donation-amount mt-3" onClick={AddFieldRight}>
                  Add donation amount
                </p>
                <div className="d-flex align-items-center w-100 mt-3">
                  <Switche />
                  <p className="activate ml-3">
                    Add freely selectable donation amount for monthly donations
                  </p>
                </div>
              </Col>
            </Row>
            {/* </Checkbox.Group> */}
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default DonationModal;
