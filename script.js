// import { typeAlias } from "@babel/types";

///Break down into an array and make lower case
export const getWordArr = word => {
   return word.toLowerCase().split("");
}
///Get the starting section of the word based on its index 
export  const getPrefix = (arr,i) => {
    if( !Array.isArray(arr) || arr.length === 0){
        throw new Error(`This is not a valid word`)
    }else {
    return arr.slice(0,i+1).join("");
    }
}
///Move the bottom section of the word to the end. 
export const getAppendPrefix = (arr,i,prefix) => {
 if (!Array.isArray(arr) || arr.length === 0 || !(typeof prefix === "string")){
        throw new Error(`This is not a valid word`)
 } else {
 return arr.slice(i).join("") + prefix;
 }
}
//Append the right suffix 
export  const getAppendAy = appendedPrefix => {
    if (!(typeof appendedPrefix === "string")){
    throw new Error(`This is not a valid word`)
    }
    return `${appendedPrefix}ay`
    }
export const getAppendWay = word => {
    if (!(typeof word === "string")){
        throw new Error(`This is not a valid word`)
    }
    return `${word}way`
   }

export const checkIfValid = word => {
    const validRegExp = new RegExp (/^[a-zA-Z]+$/)
    if (!validRegExp.test(word) || !typeof word === "string"){
        throw new Error(`This is not a valid word`);
    } else {
        return true;
    }

}
//Main function 
export const getPigLatin = (word) => {
    //Add a regex at the start to throw error if not a word.
    const isValid = checkIfValid(word);
    if (isValid) {
        let pigLatin = "";
    //Split up into an array 
        const wordArr = getWordArr(word);
    //Declare the vowels
        let vowels = ["a","e","i","o","u"];
        vowels.every(vowel => {
    //If a vowel is the first letter in the array, add 'way' after 
            if (wordArr.indexOf(vowel) === 0){
                pigLatin = getAppendWay(word)
                return pigLatin
            } 
        });
        if(!pigLatin) {
        for (let i = 0; i < wordArr.length; i++) {
        let isVowelMatch = vowels.includes(wordArr[i]);
        if (isVowelMatch){
            const prefix = getPrefix(wordArr,i);
            const appendPrefix = getAppendPrefix(wordArr,i,prefix)
            pigLatin = getAppendAy(appendPrefix)
            return pigLatin
            }
        } 
        }   
        
        return pigLatin
    }   
}
console.log(getPigLatin("hello")); 
