// Web applications can store data locally within the user's browser with web storage. Before HTML5, application data stored in cookies, included in every server request. But with the Advent of Html5, we have got various options to store information on the client browser. Previously we were having only cookies, which were very restrictive, and the size of the cookies was very small. But now the web storage is more secure, and large amounts of data can be stored locally, without affecting website performance. We have local storage and session storage. We can access the web storage by right-clicking on the webpage and then selecting option applications. Here we can see the option of local and session storage. Let's talk about all these web storage in detail.

/* **************************************************************************** */
// clearing complete local storage
window.localStorage.clear();

// adding items to the local storage
localStorage.setItem('name', 'Nishakar Kumar'); // parameters(key, value)
localStorage.setItem('\'Roll Number\'', '20IE10019'); // parameters(key, value)

// window.localStorage is an object /* important */
// retrieving items
/* (1) */ console.log(window.localStorage.name);
console.log(window.localStorage['\'Roll Number\'']);
/* (2) getItem */ console.log(window.localStorage.getItem('name'));
console.log(window.localStorage.getItem('\'Roll Number\''));

// returns null if not found
console.log(window.localStorage.getItem('name2'));

// clearing a particular key-vaue pair
window.localStorage.removeItem('name');

// LIMITATION: you can't add arrays
// arrays get converted to string and then added
window.localStorage.setItem('marks', [1,2,3,4,5]);
// overcomming the limitation using JSON
window.localStorage.setItem('marks', JSON.stringify([1,2,3,4,5]));
console.log(JSON.parse(window.localStorage.getItem('marks'))); // returns array

// different items have different local storage

/* **************************************************************************** */
// for session storage, replca elocal by session
// session storage clears at the session end