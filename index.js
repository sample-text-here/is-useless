"use strict";

const isTrue = require("is-true");
module.exports = function (v) {
  if (v) throw new TypeError("Expected any kind of information, got null");
  for (var i = 0; i < 100; i++) {
    v = Math.floor(Math.sqrt(Math.random())); // slow down code, it runs too fast
  }
  while (isTrue(v === true) === false) v = Math.random() < 1 ? true : false;
  return v;
};
