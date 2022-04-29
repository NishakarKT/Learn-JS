// html collection is array like, but not an array, so you have iterate the following way

let a = document; // gets the document (html)

// document 
console.log(document.all); //gets all the nodes/tags
console.log(document.head); //gets head content
console.log(document.body); //gets body content
console.log(document.forms); //gets forms
console.log(document.images); //gets images
console.log(document.doctype); //gets doctype detail
console.log(document.URL); //gets website url
console.log(document.baseURI); //gets complete website url
console.log(document.domain); //gets website domain
console.log(document.anchors); //gets anchhors

Array.from(document.forms).forEach(element =>{
    console.log(element);
})

// printing all the links/anchor tags in html
Array.from(document.links).forEach(element => {
    console.log(element);
})
console.log(document.links[1].href); // returns href link