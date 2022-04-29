// creating an element
let element = document.createElement('li');
console.log(element); // prints an empty list, unless modified further

// adding class name
element.className = 'classul';
// adding id
element.id = 'createdElement';

// ADDING TEXT
element.innerText = 'Hello World!!!';

// ANOTHER WAY TO ADD TEXT
let text = document.createTextNode('Hello World!!!');
element.appendChild(text); // appends at the end just like push
// for adding styled text, we have tu use innerHTML
element.innerHTML = '<b>Hello <i>World</i>!!!</b>';

// adding entity at a desired position using "Insert Before"
let target = document.querySelector('.container');
target.insertBefore(newComment, target.childNodes[2]);

// adding any attribute
element.setAttribute('title', 'myTitle');
console.log(element);

// ADDING THE ELEMENT
let ul = document.querySelector('ul'); // selecting the target
ul.appendChild(element); // dynamic insertion

// ADDING A COMMENT
let newComment = document.createComment(" a comment ");
ul.appendChild(newComment); // dynamic insertion

// simultaneously creating and appending
// adjacent element
target.insertAdjacentElement('beforebegin', newComment);
target.insertAdjacentElement('afterbegin', newComment);
target.insertAdjacentElement('beforeend', newComment);
target.insertAdjacentElement('afterend', newComment);
// adjacent html
target.insertAdjacentHTML('beforebegin', '<p>apple is a fruit</p>');
// adjacent text node
target.insertAdjacentText('beforebegin', "I am a good boy");

// replace child
target.replaceChild(target.childNodes[3], element);

// remove child
target.removeChild(target.childNodes[3]);

// clone node
let cloneNode = target.childNodes[4].cloneNode(false);
// true = copies the tag with all the attributes and "value"
// false (default) = copies the tag with all the attributes and not "value"
target.appendChild(cloneNode);
// you can add/clone any tag: div, span, li, ol,ul, p.....

// contains
console.log(target.contains(cloneNode)); // returns true if the element is present "inside" the target (at any level)...

// hasAttribute
console.log(target.hasAttribute('class')); // checks is the element has a particular attribute defined by the user (even if: class = "")

// hasChildNode
console.log(target.hasChildNodes()); // checks if the element has any child node

// isEqualNode
// nodes are equal if :-
// 1) same node type
// 2) same node name
// 3) same node value
// 4) same child nodes
// 5 same attributes
console.log(target.isEqualNode(target)); // checks if they are equal nodes
