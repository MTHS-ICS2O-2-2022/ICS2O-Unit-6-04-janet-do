// Copyright (c) 2022 Janet Do All rights reserved
//
// Created by: Janet Do
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function converts Fahrenheit to Celsius
 */
window.onload = function () {
  // Get the Fahrenheit value from the query string
  const params = new URLSearchParams(document.location.search)
  const fahrenheit = parseFloat(params.get("fahrenheit"))

  // Input validation
  if (isNaN(fahrenheit)) {
    document.getElementById("output").innerHTML = "Invalid Fahrenheit value"
    return
  }

  // Convert Fahrenheit to Celsius
  const celsius = (fahrenheit - 32) * (5 / 9)
  const roundedCelsius = celsius.toFixed(2)

  // Output
  document.getElementById("dimension").innerHTML = "Fahrenheit = " + fahrenheit
  document.getElementById("output").innerHTML = "Converted to Celsius: " + roundedCelsius + " °C"
}
