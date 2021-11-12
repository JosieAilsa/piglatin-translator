import { exportAllDeclaration } from "@babel/types";
import { getAppendAy, getAppendPrefix, getPrefix, getWordArr,getAppendWay } from "./script";

describe("PigLatin translator", () => {
let word;
let i;
    beforeEach (() => {
    word = "hello"
    i  = 1;
    })

    // Write and Negatives tests for each function
    test("getWordArr should split the word into an array", () => {
        //Arrange 
        const wordArr = getWordArr(word);
         // Assert
        expect(wordArr).toMatchObject(["h","e","l","l","o"]);
    })
    test("getPrefix should return the prefix from the start of the word", () => {
        //Arrange 
        const wordArr = getWordArr(word);
        const prefix = getPrefix(wordArr,i);
         // Assert
        expect(prefix).toBe("h");
    })
    // Positive test
    test("getAppenndPrefix should add the prefix to the end of the word", () => {
        //Arrange 
        const wordArr = ['h', 'e', 'l', 'l', 'o'];
        const prefix = 'h'; 
        // Act
        const appendPrefix = getAppendPrefix(wordArr,i,prefix)
         // Assert
        expect(appendPrefix).toBe("elloh");
    })
    // Negative test here
    test("getAppenndPrefix should add the prefix to the end of the word", () => {
        //Arrange 
        const wordArr = [];
        const prefix = 'h'; 
        // Act
        const appendPrefix = getAppendPrefix(wordArr,i,prefix)
         // Assert
        expect(appendPrefix).toBe("elloh");
    })
    test("getAppenndPrefix should add the prefix to the end of the word", () => {
        //Arrange 
        const prefix = 'h'; 
        // Act
        const appendPrefix = getAppendPrefix(null,i,prefix)
         // Assert
        expect(appendPrefix).toBe("");
    })

    test("getAppenndAy should append ay to the word ", () => {
        //Arrange 
        const wordArr = getWordArr(word);
        const prefix = getPrefix(wordArr,i);
        const appendPrefix = getAppendPrefix(wordArr,i,prefix)
        const pigLatin = getAppendAy(appendPrefix)
         // Assert
        expect(pigLatin).toBe("ellohay");
    })
    test("getAppenndWay should append way to the word", () => {
        //Arrange 
        const wordArr = getWordArr(word);
        const prefix = getPrefix(wordArr,i);
        const appendPrefix = getAppendPrefix(wordArr,i,prefix)
        const pigLatin = getAppendWay(appendPrefix)
         // Assert
        expect(pigLatin).toBe("ellohway");
    })
});