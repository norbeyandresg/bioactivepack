import React, { useState, useEffect } from "react";
import { Formik, Form, useField } from "formik";
import {
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupText,
  Button,
} from "reactstrap";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <FormGroup>
        <Label htmlFor={props.id || props.name}>{label}</Label>
        <InputGroup>
          <Input
            className="text-input"
            {...field}
            {...props}
            type="number"
            step="0.01"
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
        humidity: 0,
        waterActivity: 0,
        mnfs: 0,
        ph: 0,
        fat: 0,
        fdm: 0,
        protein: 0,
        minerals: 0,
        termsConditions: false,
      }}
      onSubmit={(values, { setSubmitting }) => {
        handleOnSubmit(values);
      }}
    >
      {({ isSubmitting, termsConditions }) => (
        <Form>
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
          <TextInput label="Fat" name="fat" min="0" max="100" unittext="%" />
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
          <Checkbox name="termsConditions">
            {" "}
            I understand this materials may not work or have abverse effects on
            my products
          </Checkbox>
          <Button color="success" type="submit">
            Find Materials
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default MatrixForm;
