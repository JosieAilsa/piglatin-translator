"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPigLatin = exports.checkIfValid = exports.getPigFirstLetterVowel = exports.getAppendWay = exports.getAppendAy = exports.getAppendPrefix = exports.getPrefix = exports.getWordArr = void 0;

var _types = require("@babel/types");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

///Break down into an array and make lower case
var getWordArr = function getWordArr(word) {
  return word.toLowerCase().split("");
}; ///Get the starting section of the word based on its index 


exports.getWordArr = getWordArr;

var getPrefix = function getPrefix(arr, i) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("This is not a valid word");
  } else {
    return arr.slice(0, i + 1).join("");
  }
}; ///Move the bottom section of the word to the end. 


exports.getPrefix = getPrefix;

var getAppendPrefix = function getAppendPrefix(arr, i, prefix) {
  if (!Array.isArray(arr) || arr.length === 0 || !(typeof prefix === "string")) {
    throw new Error("This is not a valid word");
  } else {
    return arr.slice(i).join("") + prefix;
  }
}; //Append the right suffix 


exports.getAppendPrefix = getAppendPrefix;

var getAppendAy = function getAppendAy(appendedPrefix) {
  if (!(typeof appendedPrefix === "string")) {
    throw new Error("This is not a valid word");
  }

  return "".concat(appendedPrefix, "ay");
};

exports.getAppendAy = getAppendAy;

var getAppendWay = function getAppendWay(appendedPrefix) {
  if (!(typeof appendedPrefix === "string")) {
    throw new Error("This is not a valid word");
  }

  return "".concat(appendedPrefix, "way");
};

exports.getAppendWay = getAppendWay;

var getPigFirstLetterVowel = function getPigFirstLetterVowel(wordArr) {
  var prefix = getPrefix(wordArr, 0);
  var appendedPrefix = getAppendPrefix(wordArr, 0, prefix);
  var pigLatin = getAppendWay(appendedPrefix);
  return pigLatin;
};

exports.getPigFirstLetterVowel = getPigFirstLetterVowel;

var checkIfValid = function checkIfValid(word) {
  var validRegExp = new RegExp(/^[a-zA-Z]+$/);

  if (!validRegExp.test(word) || !_typeof(word) === "string") {
    throw new Error("This is not a valid word");
  } else {
    return word;
  }
};

exports.checkIfValid = checkIfValid;

var getPigLatin = function getPigLatin(word) {
  //Add a regex at the start to throw error if not a word.
  checkIfValid(word); //Split up into an array 

  var wordArr = getWordArr(word); //Declare the vowels

  var vowels = ["a", "e", "i", "o", "u"];
  var pigLatin;
  vowels.every(function (vowel) {
    //If a vowel is the first letter in the array, move it to the end and add 'way' after 
    if (wordArr.indexOf(vowel) === 0) {
      return pigLatin = getPigFirstLetterVowel(wordArr);
    }
  });

  for (var i = 0; i < wordArr.length; i++) {
    var isVowelMatch = vowels.includes(wordArr[i]);

    if (isVowelMatch) {
      var prefix = getPrefix(wordArr, i);
      var appendPrefix = getAppendPrefix(wordArr, i, prefix);
      return pigLatin = getAppendAy(appendPrefix);
    }
  }

  return pigLatin;
};

exports.getPigLatin = getPigLatin;
var hello = getPigLatin("max");
console.log(hello);