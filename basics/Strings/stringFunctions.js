let str1 = 'Hello';
let str2 = 'World'
let str3 = '!!!';

// string functions don't change actual strings, unless re-assigned.

// repeat
console.log(str1.repeat(3)); // returns concatenated string with 3 repeated str1

// string concatenation
console.log(str1 + " " + str2 + str3);
console.log(str1.concat(" ", str2, str3));
console.log(((str1.concat(" ")).concat(str2)).concat(str3)); // can aso work without separate parentheses

// string length
console.log(str1.length);

// to lower case
console.log(str1.toLowerCase());
// to upper case
console.log(str1.toUpperCase());

// dereferencing
console.log(str1[2]);
console.log(str1.charAt(2));
console.log(str1.charCodeAt(2)); // returns ascii value of the character
console.log(String.fromCharCode(65)); // print the character from ascii
console.log(str1[str1.length]); // undefined when out of range

let str = "I am learning to code";
// Replacing
str = str.replace('code', 'program'); /* replaces first "code" occurence*/
str = str.replace(/code/g, 'program'); /* replaces all "code" occurences*/
console.log(str);

// finding the "first occurence"
console.log(str.indexOf('am'));
console.log(str.search('am'));
console.log(str.indexOf('apple')); // returns '-1' if the substring is not present

// finding the "last occurence" using "lastIndexOf"
console.log(str.lastIndexOf('am'));

// "first occurence" detailed array using "Match()"
console.log(str.match("am"));
// finding all occurences using "Match"
console.log(str.match(/am/g)); /* g => globally (complete string) */

// slice(strat index, end index (default = end+1))
console.log(str.slice(0, 10)) // from index = 0 to index = 9.
console.log(str.slice(0)) // from index = 0 to end (default)
console.log(str.slice(0, -1)) // can accept negative values

// substring(start index, end index (default = last+1))
console.log(str.substring(0, 10)) // from index = 0 to index = 9.
console.log(str.substring(0)) // from index = 0 to end (default)
// can not accept negative values

// substr(start index, total characters to extract)
console.log(str.substr(1, 10)); // starting index = 1, total characters substringed = 10

// Split
console.log(str.split(' ')); //returns an array of substrings, splitted at every '(space)'

// trim 
let str4 ="         apple                 ";
console.log(str4.trim());

// isPresent stuff
// endsWith()
console.log(str.endsWith('progra'))
console.log(str.endsWith('am'))

// startsWith()
console.log(str.startsWith('A'))
console.log(str.startsWith('I a'))

// includes()
console.log(str.includes('learning to p'));
