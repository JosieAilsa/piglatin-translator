"use strict";

var _types = require("@babel/types");

var _script = require("./script");

describe("Pig Latin translator unit tests", function () {
  // // beforeEach (() => {
  //     let word;
  //     let i;
  // // })
  describe("Checks valid input", function () {
    // Postive test: checks valid input function
    test("Should return nothing if it is anything other than singular word", function () {
      //Arrange 
      var isValid = (0, _script.checkIfValid)("hello"); // Assert

      expect(isValid).toBe("hello");
    }); // Negative test: checks invalid input function

    test("Should throw an error with negative test", function () {
      //Arrange 
      // Assert
      expect(function () {
        return (0, _script.checkIfValid)("Hello world");
      }).toThrowError("This is not a valid word");
      expect(function () {
        return (0, _script.checkIfValid)("1234");
      }).toThrowError("This is not a valid word");
      expect(function () {
        return (0, _script.checkIfValid)(["h", "e", "l", "l", "o"]);
      }).toThrowError("This is not a valid word");
      expect(function () {
        return (0, _script.checkIfValid)([]);
      }).toThrowError("This is not a valid word");
    });
  });
  describe("Checks the word is made into an array of lower case letters", function () {
    //Postive split up word into an array 
    test("getWordArr should split the word into an array", function () {
      //Arrange 
      var word = "hello";
      var wordArr = (0, _script.getWordArr)(word); // Assert

      expect(wordArr).toMatchObject(["h", "e", "l", "l", "o"]);
    }); //Negative test: shoudl split up word into an array 

    test("getWordArr should throw an error with negative tests", function () {
      //Arrange 
      var word = []; // Assert

      expect(function () {
        return (0, _script.getWordArr)(word);
      }).toThrowError(TypeError);
      expect(function () {
        return (0, _script.checkIfValid)("1234");
      }).toThrowError("This is not a valid word");
      expect(function () {
        return (0, _script.checkIfValid)(["h", "e", "l", "l", "o"]);
      }).toThrowError("This is not a valid word");
      expect(function () {
        return (0, _script.checkIfValid)([]);
      }).toThrowError("This is not a valid word");
    });
  });
  describe("Checks that getPrefix gets the prefix from the start of the word", function () {
    test("getPrefix should return the prefix from the start of the word", function () {
      //Arrange 
      var word = ["h", "e", "l", "l", "o"];
      var prefix = (0, _script.getPrefix)(word, 0); // Assert

      expect(prefix).toBe("h");
    });
    test("getPrefix should throw an error with negative tests", function () {
      //Arrange 
      // Assert
      expect(function () {
        return (0, _script.getPrefix)([], 0);
      }).toThrowError("This is not a valid word");
      expect(function () {
        return (0, _script.getPrefix)("hello", 0);
      }).toThrowError("This is not a valid word");
    });
  });
  describe("Checks that getAppenndPrefix should add the prefix to the end of the word", function () {
    // Positive test
    test("getAppenndPrefix should add the prefix to the end of the word", function () {
      //Arrange 
      var i = 0;
      var wordArr = ["h", "e", "l", "l", "o"];
      var prefix = "h"; // Act

      var appendPrefix = (0, _script.getAppendPrefix)(wordArr, i, prefix); // Assert

      expect(appendPrefix).toBe("helloh");
    });
    test("getAppendPrefix should throw an error with negative tests", function () {
      //Arrange 
      var wordArr = ["h", "e", "l", "l", "o"]; // Assert

      expect(function () {
        return (0, _script.getAppendPrefix)(wordArr, 1, 0);
      }).toThrowError("This is not a valid word");
      expect(function () {
        return (0, _script.getAppendPrefix)("hello", 0, "ell");
      }).toThrowError("This is not a valid word");
      expect(function () {
        return (0, _script.getAppendPrefix)("hello", 15, "ell");
      }).toThrowError();
    });
  });
  describe("Check getAppenndAy should append ay to the word", function () {
    test("getAppenndAy should append ay to the word ", function () {
      //Arrange 
      var appendPrefix = "elloh";
      var pigLatin = (0, _script.getAppendAy)(appendPrefix); // Assert

      expect(pigLatin).toBe("ellohay");
    });
    test("getAppendAy should throw an error with negative tests", function () {
      //Arrange 
      // Assert
      expect(function () {
        return (0, _script.getAppendAy)(56);
      }).toThrowError("This is not a valid word");
      expect(function () {
        return (0, _script.getAppendAy)(null);
      }).toThrowError("This is not a valid word");
      expect(function () {
        return (0, _script.getAppendAy)(["1", "2", "3"]);
      }).toThrowError("This is not a valid word");
    });
  });
  describe("Check getAppenndWay should append way to the word", function () {
    test("getAppenndWay should append way to the word", function () {
      //Arrange 
      var appendPrefix = "elloh";
      var pigLatin = (0, _script.getAppendWay)(appendPrefix); // Assert

      expect(pigLatin).toBe("ellohway");
    });
    test("getAppendWay should throw an error with negative tests", function () {
      //Arrange 
      // Assert
      expect(function () {
        return (0, _script.getAppendWay)(56);
      }).toThrowError("This is not a valid word");
      expect(function () {
        return (0, _script.getAppendWay)(null);
      }).toThrowError("This is not a valid word");
      expect(function () {
        return (0, _script.getAppendWay)(["1", "2", "3"]);
      }).toThrowError("This is not a valid word");
    });
  });
});
describe("Pig Latin translator integration tests", function () {});