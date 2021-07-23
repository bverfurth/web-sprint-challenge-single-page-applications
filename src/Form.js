import * as yup from "yup";
import React, { useState } from "react";
import axios from "axios";

const orderToppings = {
  name: "",
  email: "",
  phone: "",
  text: "",
  size: "",
  sauce: "",
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
  jalepenos: false,
};

const missingInformation = {
  name: "",
  email: "",
  phone: "",
};

function Form() {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Please enter your name")
      .min(3, "Name must be at least 3 characters long"),
    email: yup.string().required("Must be a valid email"),
    phone: yup.string().required("Must be a valid phone number"),
    size: yup.string().required("Pick a size"),
    sauce: yup.string().required("Pick a sauce"),
    specialInstructions: yup.string(),
    sausage: yup.string().required(),
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
    jalepenos: yup.boolean(),
  });

  const [orderValues, setOrderValues] = useState(initialOrderValues);
  const [orderErrors, setOrderErrors] = useState(initialOrderErrors);
  const [newOrder, setNewOrder] = useState(initialOrderValues);
}
export default Form;
