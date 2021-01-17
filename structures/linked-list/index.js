"use strict";
var myFunction = function (value) {
    return value || "default value";
};
var myFunction2 = function (value) {
    return value || "default value";
};
module.exports = {
    myFunction: myFunction,
};
