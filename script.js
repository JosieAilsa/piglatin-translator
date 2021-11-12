///Break down into an array and make lower case
export const getWordArr = (word)=> {
   return word.toLowerCase().split("");
}
///Move the section of word to the end based on its index 
export const getPrefix = (arr,i) => {
    return arr.slice(0,i).join("");
}
///Move the section of word to the end based on its index 
export const getAppendPrefix = (arr,i,prefix) => {
 return arr.slice(i).join("") + prefix;
}
export const getAppendAy = (appendedPrefix) => {
 return `${appendedPrefix}ay`
}
export const getAppendWay = (appendedPrefix) => {
    return `${appendedPrefix}way`
   }

// Pig latin translator 
//
const getPigLatin = (word) => {
    const wordArr = getWordArr(word);
//Declare the vowles
    let vowels = ["a","e","i","o","u"];
    vowels.forEach(vowel => {
//If a vowel is the first letter in the array, move it to the end and add 'way' after 
        if (wordArr.indexOf(vowel) === 0){
            const prefix = getPrefix(wordArr,0);
            const appendedPrefix = getAppendPrefix(wordArr, 0, prefix);
            const pigLatin = getAppendWay(appendedPrefix);
            return pigLatin
            }
        });
    const getPigLatin = wordArr.map((letter,index,arr) => {
    switch (letter){
        case "a":
        let i = index;
        const prefix = getPrefix(arr,i);
        const appendPrefix = getAppendPrefix(arr,i,prefix)
        const pigLatin = getAppendAy(appendPrefix)
        return pigLatin;
        break;
        case "e":
        let i = index;
        const prefix = getPrefix(arr,i);
        const appendPrefix = getAppendPrefix(arr,i,prefix)
        const pigLatin = getAppendAy(appendPrefix)
        return pigLatin;
        break;
        case "i":
        let i = index;
        const prefix = getPrefix(arr,i);
        const appendPrefix = getAppendPrefix(arr,i,prefix)
        const pigLatin = getAppendAy(appendPrefix)
        return pigLatin;
        break;
        case "o":
        let i = index;
        const prefix = getPrefix(arr,i);
        const appendPrefix = getAppendPrefix(arr,i,prefix)
        const pigLatin = getAppendAy(appendPrefix)
        return pigLatin;
        break;
        case "u":
        let i = index;
        const prefix = getPrefix(arr,i);
        const appendPrefix = getAppendPrefix(arr,i,prefix)
        const pigLatin = getAppendAy(appendPrefix)
        return pigLatin;
        break;
        }
    })
    return getPigLatin;




}