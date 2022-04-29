// (ajax + jquery) vs xmlhttprequest, both have their pros and cons...
// but ES6 came up with a better method => "Fetch()"...

// fetch(URL/file) => returns a "Promise"
// so we use "then" and "catch" with fetch()
// fetch is asynchronous

let loadData1 = () => {
    fetch("sample.txt").then((response)=>{
        // console.log(response);
        return response.text();
    }).then((result)=>{
        document.querySelector('p').innerText = result;
    }).catch((error)=>{
        console.log(error);
    })
}

// event handling
let button1 = document.querySelector('#btn1');
button1.addEventListener('click', loadData1);

// Insert, Update & Delete
let loadData2 = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST", // insert data
        // method: "PUT" // update data
        // method: "DELETE" // delete data
        // method: "GET" (default) // retrieve data
    
        body: JSON.stringify(
            {name: "Nishakar Kumar",
                roll: "20IE10019"}
        ),  // data
    
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded' // for form data
        }
    }).then((response)=>{
        return response.json();
    }).then((json)=>{ // .json() sends the parsed data in json format
        console.log(json);
    });
}

let button2 = document.querySelector('#btn2');
button2.addEventListener('click', loadData2);

// form data submission
document.getElementById('save').addEventListener('click', (e)=>{
    e.preventDefault(); // prevents "complete page" refresh

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST", // insert data
    
        body: new FormData(document.getElementById('myForm')),
    
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded' // for form data
        }
    }).then((response)=>{
        return response.json();
    }).then((json)=>{
        console.log(json);
    });
});

// if browser supports the fetch method
if (window.fetch){
    // fetch method
}
else{
    // ajax method
}

// fetch api using single .then()
async function loadData3(){
    console.log("Before response");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log("After response");
    console.log("Before users");
    const users = await response.json();
    console.log("After users");
    return users;
}

console.log("Before func call");
loadData3().then(users => console.log(users)); // executes at the end...
console.log("After func call");
