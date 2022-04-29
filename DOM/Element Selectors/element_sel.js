// (1) single element selectors
let element = document.getElementById('myfirst');
console.log(element);
console.log(element.className);

// child nodes
console.log(element.childNodes); // gives list of children
let childrenList = element.childNodes;
console.log(childrenList.length);
console.log(typeof childrenList); // object

// parent node
let parentNode = element.parentNode;
console.log(parentNode);

// color change ==> javascript changed CSS !!!
element.style.color = 'red';
// text change ==> javascript changed html text !!!
element.innerText = 'Happy Birthday';
// changing html code
element.innerHTML = '<h1>Heading changed using JS</h1>';
element.innerText = 'Happy Birthday';
// get attributes => returns an html collection of all the attributes
console.log(element.attributes());
// get attribute
console.log(element.getAttribute('id'));
// set attribute
console.log(element.setAttribute('class', 'xyz'));
console.log(element.setAttribute('style', 'border: 2px solid black'));
// remove attribute
console.log(element.removeAttribute('placeholder'));
// get attribute node
console.log(element.getAttributeNode('id'));
console.log(element.getAttributeNode('id').value); // ~ getAttribute('id)

/* *************************************************************************** */
// Query Selector
let sel = document.querySelector('#myfirst');
console.log(sel);
sel = document.querySelector('.child'); // returns the first element of the class
console.log(sel);
sel = document.querySelector('h1'); // returns the first element with this tag
console.log(sel);

// (2) multiple element selectors
elements = document.getElementsByClassName('container'); // returns an html collection
console.log(elements);
containerElems = elements[0].getElementsByClassName('child');
console.log(containerElems);

// elements by tag name
tagElems = document.getElementsByTagName('div');
console.log(tagElems);

//manipulating div tags
Array.from(tagElems).forEach(element =>{
    element.style.fontWeight ='900';
})
// you may also use the old for loop, if you dont want to convert it into an array