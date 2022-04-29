let element = document.createElement('li');
element.id = 'createdElement';
element.className = 'classul';

text = document.createTextNode('Hello World!!!');
element.appendChild(text);

let ul = document.querySelector('ul');
ul.appendChild(element);
console.log(ul);

// replacing an element
element2 = document.createElement('li');
text = document.createTextNode('Hello Mars!!!'); // new text node
element2.appendChild(text);

element.replaceWith(element2);

// replacing a specific element
let specificElement = document.getElementById('this');
specificElement.replaceWith(element);
let myul= document.querySelector('ul');
myul.replaceChild(element2, document.getElementById('this2'));

// removing element
myul.removeChild(element);