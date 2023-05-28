// Copyright (c) 2022 Janet Do All rights reserved
//
// Created by: Janet Do
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2OR-Unit-6-04/sw.js", {
    scope: "/ICS2OR-Unit-6-04/",
  })
}

/**
 * This function displays an alert.
 */
window.onload = function () {
  // this calculates volume of a pyramid

  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get("r")
  console.log(radius)

  // process
  const volume = (4 / 3) * Math.PI * (radius ** 3)
  const roundedVolume = volume.toFixed(2)


  // output
  document.getElementById("dimension").innerHTML = "r = " + radius
  document.getElementById("output").innerHTML = "Volume: " + roundedVolume + " cm³"
}