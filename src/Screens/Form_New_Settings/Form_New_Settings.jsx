import React from "react";
import Form from "react-bootstrap/Form";
import { Upload, Button } from "antd";
import { Formik } from "formik";
import * as yup from "yup";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import ProgressBar from "../../Components/ProgressBar";
import RaiseMoney from "../../Components/RaiseMoney";

import LayoutComponent from "../../Layout";
import "./Form_New_Settings.scss";

const schema = yup.object().shape({
  formName: yup.string().required(),
  currency: yup.string().required(),
  pageTitle: yup.string().required(),
  message: yup.string().required(),
  thankyouTitle: yup.string().required(),
});
const Form_New_Settings = () => {
  return (
    <div id="setting">
      <ProgressBar percent={80} />
      <RaiseMoney heading={"Form Settings"} to={"/form-new-done"} />
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          formName: "",
          currency: "",
          pageTitle: "",
          message: "",
          thankyouTitle: "",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row>
              <Col md={5}>
                <p className="donation mt-2">General settings</p>
                <Form.Group controlId="formGridEmail" className="mt-3">
                  <Form.Label>Form name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="z. B. Gletscher schützen in der Schweiz"
                    name="formName"
                    value={values.formName}
                    onChange={handleChange}
                    isValid={touched.formName && !errors.formName}
                  />
                  <Form.Label className="mt-3">Currency</Form.Label>
                  <Form.Control
                    as="select"
                    name="currency"
                    value={values.currency}
                    onChange={handleChange}
                    isValid={touched.currency && !errors.currency}
                  >
                    <option>$1</option>
                    <option>$2</option>
                    <option>$3</option>
                    <option>$4</option>
                    <option>$5</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={{ span: 5, offset: 1 }}>
                <p className="donation mt-2">Design and Text</p>
                <Form.Group controlId="formGridEmail" className="mt-3">
                  <Form.Label>Title on the front page</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="z. B. Spende jetzt und rette die Eisbäre"
                    name="pageTitle"
                    value={values.pageTitle}
                    onChange={handleChange}
                    isValid={touched.pageTitle && !errors.pageTitle}
                  />
                  <Form.Label className="mt-3">
                    Message on the front page
                  </Form.Label>
                  <Form.Control
                    style={{ height: "auto" }}
                    as="textarea"
                    rows={5}
                    placeholder="Fasse kurz zusammen, für was du weshalb genau sammelst und wie das Geld eingesetzt wird. Am besten machst du Stichpunkte."
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    isValid={touched.message && !errors.message}
                  />
                  <Form.Label className="mt-3">
                    Form image (left sidebar)
                  </Form.Label>
                  <p className="project">
                    This image is displayed on the left side if the donor has
                    not selected a project yet.{" "}
                  </p>
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

                  <Form.Label className="mt-3">
                    Title on the thank you page
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="z. B. Danke für deine Spende"
                    name="thankyouTitle"
                    value={values.thankyouTitle}
                    onChange={handleChange}
                    isValid={touched.thankyouTitle && !errors.thankyouTitle}
                  />
                  <Form.Label className="mt-3">
                    Text on the thank you page
                  </Form.Label>
                  <Form.Control
                    style={{ height: "auto" }}
                    as="textarea"
                    rows={5}
                    placeholder="Bedanke dich für die Spende"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Form_New_Settings;
