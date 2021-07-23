import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as yup from "yup";
import axios from "axios";
import "./Pizza.css";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name")
    .min(3, "Name must be at least 3 characters long"),
  email: yup.string().required("Must be a valid email"),
  phone: yup.string().required("Must be a valid phone number"),
  size: yup.string().required("Pick a size"),
  specialInstructions: yup.string(),
  sausage: yup.boolean(),
  beef: yup.boolean(),
  chicken: yup.boolean(),
  bacon: yup.boolean(),
  anchovies: yup.boolean(),
  onions: yup.boolean(),
  garlic: yup.boolean(),
  greenPeppers: yup.boolean(),
  blackOlives: yup.boolean(),
  pineapple: yup.boolean(),
  spinach: yup.boolean(),
  pepperoni: yup.boolean(),
  extraCheese: yup.boolean(),
  mushrooms: yup.boolean(),
  jalapenos: yup.boolean(),
  noMeatTopping: yup.string().required("Must select no meat topping"),
  noVegetableTopping: yup.string().required("Must select no vegetable topping"),
});

const Display = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  align-items: center;
  color: black;
  padding: 10px 0px;
  text-align: center;
`;

export default function Pizza() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    text: "",
    size: "",
    specialInstructions: "",
    sausage: false,
    beef: false,
    chicken: false,
    bacon: false,
    anchovies: false,
    onions: false,
    garlic: false,
    greenPeppers: false,
    blackOlives: false,
    pineapple: false,
    spinach: false,
    pepperoni: false,
    extraCheese: false,
    mushrooms: false,
    jalapenos: false,
    noMeatTopping: false,
    noVegetableTopping: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    text: "",
    size: "",
    specialInstructions: "",
    sausage: "",
    beef: "",
    chicken: "",
    bacon: "",
    anchovies: "",
    onions: "",
    garlic: "",
    greenPeppers: "",
    blackOlives: "",
    pineapple: "",
    spinach: "",
    pepperoni: "",
    extraCheese: "",
    mushrooms: "",
    jalapenos: "",
    noMeatTopping: "",
    noVegetableTopping: "",
  });

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setDisabledButton(!valid);
    });
  }, [formState]);

  const [disabledButton, setDisabledButton] = useState(true);

  const [post, setPost] = useState([]);

  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };

    validateChange(e);
    setFormState(newFormData);
  };

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => {
        setPost(res.data);
        console.log("success", post);
        console.log(res.data.size);
        setFormState({
          name: "",
          email: "",
          phone: "",
          text: "",
          size: res.data.size,
          specialInstructions: "",
          sausage: false,
          beef: false,
          chicken: false,
          bacon: false,
          anchovies: false,
          onions: false,
          garlic: false,
          greenPeppers: false,
          blackOlives: false,
          pineapple: false,
          spinach: false,
          pepperoni: false,
          extraCheese: false,
          mushrooms: false,
          jalapenos: false,
          noMeatTopping: false,
          noVegetableTopping: false,
        });
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <form onSubmit={formSubmit}>
      <div style={{ color: "red" }}>
        <div>{errors.name}</div>
        <div>{errors.size}</div>
        <div>{errors.noMeatTopping}</div>
        <div>{errors.noVegetableTopping}</div>
      </div>
      <Display>
        <h1 id="order">Order Now!</h1>
        <label htmlFor="name">
          <h1>Name For The Order</h1>
          <br />
          <input
            type="text"
            name="name"
            id="nameinput"
            placeholder="Name"
            value={formState.name}
            onChange={inputChange}
          />
        </label>
        <label htmlFor="size">
          <h1>Pick Your Size</h1>
          <br />
          <select name="size" id="sizeinput" onChange={inputChange}>
            <option name="default" value={null}></option>
            <option name="Sm" value="Sm">
              Small
            </option>
            <option name="Md" value="Md">
              Medium
            </option>
            <option name="Lg" value="Lg">
              Large
            </option>
            <option name="XL" value="XL">
              XL-Large
            </option>
          </select>
        </label>
        <br />
        <div className="toppingsChecklist">
          <h2>Pick Your Toppings!</h2>
          <br />
          <div className="meatToppings">
            <h3>Meat Toppings</h3>
            <label htmlFor="sausage">
              <input
                type="checkbox"
                name="sausage"
                id="sausageCheckBox"
                checked={formState.sausage}
                onChange={inputChange}
              />{" "}
              Sausage{" "}
            </label>
            <br />
            <label htmlFor="beef">
              <input
                type="checkbox"
                name="beef"
                id="beefCheckBox"
                checked={formState.beef}
                onChange={inputChange}
              />{" "}
              Beef{" "}
            </label>
            <br />
            <label htmlFor="chicken">
              <input
                type="checkbox"
                name="chicken"
                id="chickenCheckBox"
                checked={formState.chicken}
                onChange={inputChange}
              />{" "}
              Chicken{" "}
            </label>
            <br />
            <label htmlFor="bacon">
              <input
                type="checkbox"
                name="bacon"
                id="baconCheckBox"
                checked={formState.bacon}
                onChange={inputChange}
              />{" "}
              Bacon{" "}
            </label>
            <br />
            <label htmlFor="anchovies">
              <input
                type="checkbox"
                name="anchovies"
                id="anchoviesCheckBox"
                checked={formState.anchovies}
                onChange={inputChange}
              />{" "}
              Anchovies{" "}
            </label>
            <br />
            <label htmlFor="noMeatTopping">
              <input
                type="checkbox"
                name="noMeatTopping"
                id="noMeatToppingCheckBox"
                checked={formState.noMeatTopping}
                onChange={inputChange}
              />
              No Meat Topping
            </label>
          </div>
          <br />
          <div className="vegetableToppings">
            <h3>Vegetable Toppings</h3>
            <br />
            <label htmlFor="onions">
              <input
                type="checkbox"
                name="onions"
                id="onionsCheckBox"
                checked={formState.onions}
                onChange={inputChange}
              />{" "}
              Onions{" "}
            </label>
            <br />
            <label htmlFor="garlic">
              <input
                type="checkbox"
                name="garlic"
                id="garlicCheckBox"
                checked={formState.garlic}
                onChange={inputChange}
              />{" "}
              Garlic{" "}
            </label>
            <br />
            <label htmlFor="greenPeppers">
              <input
                type="checkbox"
                name="greenPeppers"
                id="greenPeppersCheckBox"
                checked={formState.greenPeppers}
                onChange={inputChange}
              />{" "}
              Green Peppers{" "}
            </label>
            <br />
            <label htmlFor="blackOlives">
              <input
                type="checkbox"
                name="blackOlives"
                id="blackOlivesCheckBox"
                checked={formState.blackOlives}
                onChange={inputChange}
              />{" "}
              Black Olives{" "}
            </label>
            <br />
            <label htmlFor="pineapple">
              <input
                type="checkbox"
                name="pineapple"
                id="pineappleCheckBox"
                checked={formState.pineapple}
                onChange={inputChange}
              />{" "}
              Pineapple{" "}
            </label>
            <br />
            <label htmlFor="spinach">
              <input
                type="checkbox"
                name="spinach"
                id="spinachCheckBox"
                checked={formState.spinach}
                onChange={inputChange}
              />{" "}
              Spinach{" "}
            </label>
            <br />
            <label htmlFor="pepperoni">
              <input
                type="checkbox"
                name="pepperoni"
                id="pepperoniCheckBox"
                checked={formState.pepperoni}
                onChange={inputChange}
              />{" "}
              Pepperoni{" "}
            </label>
            <br />
            <label htmlFor="extraCheese">
              <input
                type="checkbox"
                name="extraCheese"
                id="extraCheeseCheckBox"
                checked={formState.extraCheese}
                onChange={inputChange}
              />{" "}
              Extra Cheese{" "}
            </label>
            <br />
            <label htmlFor="mushrooms">
              <input
                type="checkbox"
                name="mushrooms"
                id="mushroomsCheckBox"
                checked={formState.mushrooms}
                onChange={inputChange}
              />{" "}
              Mushrooms{" "}
            </label>
            <br />
            <label htmlFor="jalapenos">
              <input
                type="checkbox"
                name="jalapenos"
                id="jalapenosCheckBox"
                checked={formState.jalapenos}
                onChange={inputChange}
              />{" "}
              Jalapenos{" "}
            </label>
            <br />
            <label htmlFor="noVegetableTopping">
              <input
                type="checkbox"
                name="noVegetableTopping"
                id="noVegetableToppingCheckBox"
                checked={formState.noVegetableTopping}
                onChange={inputChange}
              />
              No Vegetable Topping
            </label>
            <br />
          </div>
        </div>
        <label htmlFor="Special Instructions">
          <h1>Special Instructions</h1>
          <br />
          <textarea
            name="specialInstructions"
            id="specialInstructionsInput"
            placeholder="Type instructions here..."
            value={formState.specialInstructions}
            onChange={inputChange}
          />
        </label>
        <button name="submit" disabled={disabledButton}>
          Submit
        </button>
        {/* <pre>{JSON.stringify(post, null, 2)}</pre> */} {/*Test For Values*/}
      </Display>
    </form>
  );
}
