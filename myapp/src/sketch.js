import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var centerX;
var centerY;
var radius;
var totalDegrees = 367;
var r;
var g;
var b;

function setup() {
  createCanvas(
  	window.innerWidth,
  	window.innerHeight
  	);
  background(50);
  centerX = width / 2;
  centerY = height / 2;
  radius = height / 2;
  angleMode(DEGREES);
  r = random(150, 255);
  g = random(55);
  b = random(55);
}


function draw() {
  noFill();

  stroke(r, g, b, 55);
  beginShape();
    for (var i = 0; i <= totalDegrees; i++) {
      var noiseFactor = noise(i / 35, frameCount / 120);
      var x = centerX + radius * cos(i) * noiseFactor;
      var y = centerY + radius * sin(i) * noiseFactor;
      curveVertex(x, y);
    }
  endShape(CLOSE);
  radius -= .65;
  r -= 2;
  g += 1;
  b += 2;

  if (radius <= 0) {
  	centerX = mouseX;
  	centerY = mouseY;
  }

  if (radius <= 0) {
  	noLoop();
  }
}
