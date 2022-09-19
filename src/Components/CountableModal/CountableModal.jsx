import React, { useState } from "react";
import { Upload, Form, Input, Modal, Button, Row, Col, Mentions } from "antd";
import Image from "react-bootstrap/Image";
import Switche from "../../Components/Switche";

import "./CountableModal.scss";

const { TextArea } = Input;
const CountableModal = ({ isModalVisible, setIsModalVisible }) => {
  // const [isModalVisible, setIsModalVisible] = useState(false);
  const [disableText, setDisableText] = useState(true);
  const [showStore, setshowStore] = useState(false);
  const [boxValues, setBoxValues] = useState({
    save: "Save",
    minQuantity: "",
    maxQuantity: "",
    cpu: "",
    animal: "elephant",
  });
  let concatinateString = `${boxValues.save} ${boxValues.minQuantity} to ${boxValues.maxQuantity} ${boxValues.animal} Cost per unit will be ${boxValues.cpu} `;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleFocus = () => {
    setshowStore(!showStore);
  };
  // Handle the concatination of values

  const handleElephant = (e) => {
    setBoxValues((prevState) => ({
      ...prevState,
      animal: e,
    }));
  };

  const handleMinQuantity = (e) => {
    setBoxValues((prevState) => ({
      ...prevState,
      minQuantity: e.target.value,
    }));
  };
  const handleMaxQuantity = (e) => {
    setBoxValues((prevState) => ({
      ...prevState,
      maxQuantity: e.target.value,
    }));
  };
  const handleCpu = (e) => {
    setBoxValues((prevState) => ({
      ...prevState,
      cpu: e.target.value,
    }));
  };

  // onsubmit function
  const onFinish = (values) => {
    values.calculatedValues = concatinateString;
    // values.data2 = data2;
    console.log("Success:", values);
    // console.log(data1);
  };

  const onFinishFailed = (errorInfo) => {
    errorInfo.calculatedValues = concatinateString;

    // errorInfo.data2 = data2;
    console.log("Failed:", errorInfo);
  };
  console.log(showStore);
  return (
    <div id="countableModal">
      {/* <Button type='primary' onClick={showModal}>
				Open Modal
			</Button> */}

      <Modal
        wrapClassName="countableModal"
        width={"100vw"}
        // title='Basic Modal'
        visible={isModalVisible}
        destroyOnClose={false}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="modal"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div className="d-flex align-items-center justify-content-between pt-3 px-3">
            <h1 className="add-project">Add simple project topic</h1>
            <div>
              <Button onClick={handleCancel} className="cancel-button">
                Cancel
              </Button>
              <Button htmlType="submit" className="add-button ml-3">
                Add
              </Button>
            </div>
          </div>
          <hr />

          <Row className="mt-3 px-3 pb-3">
            <Col md={{ span: 11 }}>
              <p className="donation my-2">
                Title - what are the donations used for?
              </p>
              <Form.Item
                name="text"
                rules={[
                  {
                    required: true,
                    message: "Title is required",
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
                name="textarea"
                rules={[
                  {
                    required: true,
                    message: "Description is required",
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
                name="satelliteImage"
                rules={[
                  {
                    required: true,
                    message: "Please add url ",
                    type: URL,
                  },
                ]}
              >
                <div className="image-box d-flex align-items-center">
                  <Input
                    className="location-input"
                    placeholder="Add location url here"
                  />
                  {/* <Upload> */}
                  {/* <Button>Click here to set location</Button> */}
                  {/* </Upload> */}
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
                name="TeaserImage"
                rules={[
                  {
                    required: true,
                    message: "Please Upload Image ",
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
              <p className="donation mt-3">Sidebar-Image</p>
              <p className="recommend mt-2">
                This image is displayed on the left side.
              </p>
              <Form.Item
                name="sidebarImage"
                rules={[
                  {
                    required: true,
                    message: "Please Upload Image ",
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
          <div className="mt-3 px-3">
            <div className="d-flex align-items-center w-100">
              <Switche />
              <p className="activate ml-3">Activate one-time donations</p>
            </div>
            <div className="d-flex align-items-center w-100 mt-2">
              <Switche />
              <p className="activate ml-3">Activate monthly donations</p>
            </div>
          </div>
          <hr />
          <div className="bottomFields px-3">
            <p className="sentence">Sentence generator</p>
            <Row gutter={10}>
              <Col span={12}>
                <div
                  className="box box1 mt-3 d-flex align-items-center pl-2 mr-2"
                  onFocus={() => setshowStore(false)}
                >
                  {/* <Input prefix={<MenuOutlined />} suffix={<FormOutlined />} value='Title' /> */}

                  <Mentions
                    style={{ width: "90%" }}
                    defaultValue={boxValues.save}
                    disabled={disableText}
                  />
                  <Image
                    src="/images/edit-square.png"
                    alt="edit-square"
                    className="px-2"
                    onClick={() => setDisableText(false)}
                  />
                </div>
              </Col>
              <Col span={4}>
                <div
                  className="box box2 mt-3 d-flex align-items-center pl-2 mr-2"
                  onFocus={() => setshowStore(true)}
                >
                  {/* <Input prefix={<MenuOutlined />} suffix={<FormOutlined />} value='Title' /> */}

                  <Mentions defaultValue="X" disabled={disableText} />
                  <Image
                    src="/images/edit-square.png"
                    alt="edit-square"
                    className="px-2"
                    onClick={() => setDisableText(false)}
                  />
                </div>
              </Col>
              <Col span={8}>
                <div
                  className="box mt-3 box3 d-flex align-items-center pl-2"
                  onFocus={() => setshowStore(false)}
                >
                  {/* <Input prefix={<MenuOutlined />} suffix={<FormOutlined />} value='Title' /> */}

                  <Mentions
                    style={{ width: "90%" }}
                    defaultValue="elephants"
                    onChange={handleElephant}
                    disabled={disableText}
                  />
                  <Image
                    src="/images/edit-square.png"
                    alt="edit-square"
                    className="px-2"
                    onClick={() => setDisableText(false)}
                  />
                </div>
              </Col>
            </Row>
            {}
            <div
              className="customTooltip px-4 pt-4 "
              style={{ display: showStore ? "block" : "none" }}
            >
              <div className="d-flex align-items-center mb-4 ">
                <Switche />
                <p className="activate ml-3">
                  Only enter numbers (no decimals)
                </p>
              </div>
              <Row>
                <Col span={5}>
                  <p className="quantity">Minimum quantity</p>
                  <Input className="customInput" onChange={handleMinQuantity} />
                </Col>
                <Col span={5}>
                  <p className="quantity">Maximum quantity</p>
                  <Input className="customInput" onChange={handleMaxQuantity} />
                </Col>
                <Col span={14}>
                  <p className="description">
                    If you do not want to specify a minimum and maximum
                    quantity,
                  </p>
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col span={24}>
                  <p className="quantity">Cost per unit </p>
                  <Input className="costCustomInput" onChange={handleCpu} />
                </Col>
              </Row>
            </div>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default CountableModal;
