import React, { useState, useEffect } from "react";
import { Formik, Form, useField } from "formik";
import {
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupText,
  Button,
  Row,
  Col,
} from "reactstrap";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <FormGroup>
        <Label htmlFor={props.id || props.name} className="fw-light">
          {label}
        </Label>
        <InputGroup>
          <Input
            className="text-input"
            {...field}
            {...props}
            type="number"
            step="0.01"
            placeholder="0.00"
          />
          {props.unittext && <InputGroupText>{props.unittext}</InputGroupText>}
        </InputGroup>
        {meta.touched && meta.error ? (
          <div className="error">{error}</div>
        ) : null}
      </FormGroup>
    </>
  );
};

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <FormGroup>
        <Label className="checkbox-input">
          <Input required type="checkbox" {...field} {...props} />
          {children}
        </Label>
        {meta.touched && meta.error ? (
          <div className="error">{error}</div>
        ) : null}
      </FormGroup>
    </div>
  );
};

const MatrixForm = ({ handleOnSubmit }) => {
  return (
    <Formik
      initialValues={{
        humidity: "",
        waterActivity: "",
        mnfs: "",
        ph: "",
        fat: "",
        fdm: "",
        protein: "",
        minerals: "",
        termsConditions: false,
      }}
      onSubmit={(values, { setSubmitting }) => {
        handleOnSubmit(values);
      }}
    >
      {({ isSubmitting, termsConditions }) => (
        <Form>
          <p className="text-dark fs-4">
            <span className="fw-bold">Cheese</span> Description
          </p>
          <Row>
            <Col>
              <TextInput
                label="Humidity"
                name="humidity"
                min="0"
                max="100"
                unittext="%"
              />
              <TextInput
                label="Water Activity"
                name="waterActivity"
                min="0"
                max="1"
              />
              <TextInput
                label="Moinsture Non-Fat Substance (MNFS)"
                name="mnfs"
                min="0"
                max="100"
                unittext="%"
              />
              <TextInput label="pH" name="ph" type="decimal" min="0" max="14" />
            </Col>
            <Col>
              <TextInput
                label="Fat"
                name="fat"
                min="0"
                max="100"
                unittext="%"
              />
              <TextInput
                label="Fat in Dry Matter (FDM)"
                name="fdm"
                min="0"
                max="100"
                unittext="%"
              />
              <TextInput
                label="Protein"
                name="protein"
                min="0"
                max="100"
                unittext="%"
              />
              <TextInput
                label="Minerals"
                name="minerals"
                min="0"
                max="100"
                unittext="%"
              />
            </Col>
          </Row>
          <Row>
            <Checkbox name="termsConditions">
              {" "}
              I understand this materials may not work or have adverse effects
              on my products
            </Checkbox>
            <Button
              color="warning"
              outline
              type="submit"
              className="w-25 mx-auto"
            >
              Find Materials
            </Button>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default MatrixForm;
