import { useContext } from "react";
import { React, useState } from "react";
import { Container, Form } from "react-bootstrap";

import { LocationContext } from "../LocationsList";

import "./AddLocation.css";
const AddLocation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const { locations, newLocation } = useContext(LocationContext);

  const hendleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(values).length && !Object.keys(errors).some((k) => errors[k])) {
      newLocation(values);
      e.target.reset();
    }
  };

  const hendleChenge = (e) => {
    const input = e.target;
    validate(input);
    setValues({
      ...values,
      [input.name]: input.value,
    });
  };

  const validate = (input) => {
    let err = "";
    if (!input.value)
      err = `${input.name} is required`;

    if (input.name === "name" && locations.find((l) => l.name === input.value))
      err = `This name is already exist!`;

    if (input.name === "latitude" && !(input.value >= -90 && input.value <= 90))
      err = `Please enter values between -90 and 90`;

    if (input.name === "longitude" && !(input.value >= -180 && input.value <= 180))
      err = `Please enter values between -180 and 180`;

    setErrors({ ...errors, [input.name]: err });
  };

  return (
    <Container className="mt-2">
      <h1 className="AddTitle"> Add Location:</h1>

      <Form
        className=" bg-light border border-1  p-2 w-75 "
        onSubmit={hendleSubmit}
      >
        <Form.Group className="mb-2">
          <Form.Label>Name:</Form.Label>
          <Form.Control className="mt-0" onChange={hendleChenge} name="name" />
          <Form.Text className="text-danger">{errors.name || ""}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Latitude:</Form.Label>
          <Form.Control name="latitude" onChange={hendleChenge} />
          <Form.Text className="text-danger">{errors.latitude || ""}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Longitude:</Form.Label>
          <Form.Control
            className="h-2"
            onChange={hendleChenge}
            name="longitude"
          />
          <Form.Text className="text-danger">
            {errors.longitude || ""}
          </Form.Text>
        </Form.Group>

        <input
          className="addLocation"
          value="Add Location"
          type="submit"
    
        />
      </Form>
    </Container>
  );
};
export default AddLocation;
