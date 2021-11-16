import { exportAllDeclaration } from "@babel/types";
import { getAppendAy, getAppendPrefix, getPrefix, getWordArr,getAppendWay,checkIfValid, getPigLatin, getPigFirstLetterVowel} from "./script";

describe("Pig Latin translator unit tests", () => {
    // // beforeEach (() => {
    //     let word;
    //     let i;
    // // })
    describe("Checks valid input", () => {
     // Postive test: checks valid input function
        test("Should return nothing if it is anything other than singular word", () => {
            //Arrange 
            const isValid = checkIfValid("hello");
            // Assert
            expect(isValid).toBe(true);
        });
    // Negative test: checks invalid input function
        test("Should throw an error with negative test", () => {
            //Arrange 
            // Assert
            expect(() =>checkIfValid("Hello world")).toThrowError(`This is not a valid word`);
            expect(() =>checkIfValid("1234")).toThrowError(`This is not a valid word`);
            expect(() =>checkIfValid(["h","e","l","l","o"])).toThrowError(`This is not a valid word`);
            expect(() =>checkIfValid([])).toThrowError(`This is not a valid word`);
        });
    });
    describe ("Checks the word is made into an array of lower case letters", () => {
        //Postive split up word into an array 
        test("getWordArr should split the word into an array", () => {
            //Arrange 
            const word = "hello"
            const wordArr = getWordArr(word);
            // Assert
            expect(wordArr).toMatchObject(["h","e","l","l","o"]);
        });
        //Negative test: shoudl split up word into an array 
        test("getWordArr should throw an error with negative tests", () => {
            //Arrange 
            const word = [];
            // Assert
            expect(() => getWordArr(word)).toThrowError(TypeError);
            expect(() =>checkIfValid("1234")).toThrowError(`This is not a valid word`);
            expect(() =>checkIfValid(["h","e","l","l","o"])).toThrowError(`This is not a valid word`);
            expect(() =>checkIfValid([])).toThrowError(`This is not a valid word`);
        });
    });
    describe ("Checks that getPrefix gets the prefix from the start of the word", () => {
        test("getPrefix should return the prefix from the start of the word", () => {
            //Arrange 
            const word = ["h","e","l","l","o"]
            const prefix = getPrefix(word,0);
                // Assert
            expect(prefix).toBe("h");
        })
        test("getPrefix should throw an error with negative tests", () => {
            //Arrange 
            // Assert
            expect(() => getPrefix([], 0)).toThrowError(`This is not a valid word`);
            expect(() => getPrefix("hello", 0)).toThrowError(`This is not a valid word`);
        })
    });
    describe ("Checks that getAppenndPrefix should add the prefix to the end of the word", () => {
        // Positive test
        test("getAppenndPrefix should add the prefix to the end of the word", () => {
            //Arrange 
            const i = 0;
            const wordArr = ["h", "e", "l", "l", "o"];
            const prefix = "h"; 
            // Act
            const appendPrefix = getAppendPrefix(wordArr,i,prefix)
            // Assert
            expect(appendPrefix).toBe("helloh");
        })
        test("getAppendPrefix should throw an error with negative tests", () => {
            //Arrange 
            const wordArr = ["h", "e", "l", "l", "o"];
            // Assert
            expect(() => getAppendPrefix(wordArr, 1, 0)).toThrowError(`This is not a valid word`);
            expect(() => getAppendPrefix("hello", 0, "ell")).toThrowError(`This is not a valid word`);
            expect(() => getAppendPrefix("hello", 15, "ell")).toThrowError();
        })
    });
    describe("Check getAppenndAy should append ay to the word", () => {
        test("getAppenndAy should append ay to the word ", () => {
            //Arrange 
            const appendPrefix = "elloh"
            const pigLatin = getAppendAy(appendPrefix)
            // Assert
            expect(pigLatin).toBe("ellohay");
        })
        test("getAppendAy should throw an error with negative tests", () => {
            //Arrange 
            // Assert
            expect(() => getAppendAy(56)).toThrowError(`This is not a valid word`);
            expect(() => getAppendAy(null)).toThrowError(`This is not a valid word`);
            expect(() => getAppendAy(["1","2","3"])).toThrowError(`This is not a valid word`);
        })
    });
    describe("Check getAppenndWay should append way to the word", () => {
        test("getAppenndWay should append way to the word", () => {
            //Arrange 
            const appendPrefix = "elloh"
            const pigLatin = getAppendWay(appendPrefix)
            // Assert
            expect(pigLatin).toBe("ellohway");
        })
        test("getAppendWay should throw an error with negative tests", () => {
            //Arrange 
            // Assert
            expect(() => getAppendWay(56)).toThrowError(`This is not a valid word`);
            expect(() => getAppendWay(null)).toThrowError(`This is not a valid word`);
            expect(() => getAppendWay(["1","2","3"])).toThrowError(`This is not a valid word`);
        })
    });
});

describe("Pig Latin translator integration tests", () => {
    describe("Positive integration tests", () => {
        test("Test first letter vowel", () => {
            const pigLatin = getPigLatin("ate")
            expect(pigLatin).toBe("ateway");
        });
        test("Test first letter consonant", () => {
            const pigLatin = getPigLatin("hello")
            expect(pigLatin).toBe("ellohay");
        });
    })
    describe("Negative integration tests", () => {
        test("Should throw error with invalid input", () => {
            expect(() => getPigLatin("Hello world")).toThrowError(`This is not a valid word`);
            expect(() => getPigLatin([])).toThrowError(`This is not a valid word`);
            expect(() => getPigLatin(null)).toThrowError();
            expect(() => getPigLatin(1)).toThrowError(`This is not a valid word`);

        })
    })
});
