let cont1 = document.querySelector('.container'); // gets first .container
let cont2 = document.querySelector('#container'); // gets first #container
let cont3 = document.querySelector('h1'); // gets first h1 tag
let cont4 = document.querySelectorAll('.container'); // gets all .container html selection

console.log(cont.childNodes.length);
// The property that lets you select direct descendants is called children . It selects elements that are immediately nested in another element. The children returns a HTML Collection that updates when children elements are changed.
console.log(cont.children.length);
// children targets only elements, and no text, newline, comments etc
// this is the reason for fewer elements as children
// use children when dealing with elements (most of the time)

// nodeName
console.log(cont.childNodes[0].nodeName);
//nodeType
console.log(cont.childNodes[0].nodeType);

// nodetypes code
// 1 = element
// 2 = attribute
// 3 = text4
// 8 = comment
// 9 = document
// 10 = doctype

// parent element
console.log(document.querySelector('.container').parentElement);
console.log(document.querySelector('.container').parentNode);

// firstChild and firstElementChild
console.log(document.querySelector('.container').firstChild);
console.log(document.querySelector('.container').firstElementChild);

//lastChildand lastElementChild
console.log(document.querySelector('.container').lastChild);
console.log(document.querySelector('.container').lastElementChild);

//childElementCount
console.log(document.querySelector('.container').childElementCount);

//nextSibling
console.log(document.querySelector('.container').firstElementChild);
console.log(document.querySelector('.container').firstElementChild.nextElementSibling);
console.log(document.querySelector('.container').firstElementChild.nextSibling);

console.log(document.querySelector('.container').firstElementChild.previousElementSibling);
console.log(document.querySelector('.container').firstElementChild.previousSibling);

// nextSibling can fetch me anything (text, elements, comments ...), so for elements only we use nextElementSibling... similarly for rest of the 'nexts'