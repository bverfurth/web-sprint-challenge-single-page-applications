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

function Form() {}
export default Form;
