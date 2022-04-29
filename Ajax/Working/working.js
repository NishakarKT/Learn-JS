let loadData = () => {
    // creating an XMLHttpRequest object
    let xhttp = new XMLHttpRequest();
    
    /* ********************************************************************* */
    // monitoring ready state changes
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            // DOM operations
            // console.log(this.responseText);
            // response from server:- either (1) response text or (2) response xml
            // now only the element is refreshed, not the whole page
            document.querySelector('p').innerText = this.responseText;
        }
        else if(this.readyState == 4 && this.status == 404){
            document.querySelector('p').innerText = "404 - not found";
        }
    };

    // we may also use onload ~ on completion => modern method...
    // xhttp.onload = function(){
    //     if (this.status == 200) {
    //         // DOM operations
    //         // console.log(this.responseText);
    //         // response from server:- either (1) response text or (2) response xml
    //         // now only the element is refreshed, not the whole page
    //         document.querySelector('p').innerText = this.responseText;
    //     }
    //     else if(this.readyState == 4 && this.status == 404){
    //         document.querySelector('p').innerText = "404 - not found";
    //     }
    // };

    // to track progress (optional), we may use => xhttp.onprogress = () => {};
    // while progress, you may want a spinner animation...etc
    
    /* ********************************************************************* */
    // method => "GET"(open form) & "POST"(hidden form)
    // async mode => true/false => should the request be synchronous or asynchronous
    xhttp.open("GET"/* method */, "sample.txt", true /*async mode*/);
    
    /* ********************************************************************* */
    xhttp.send();
}

// events handling
button = document.querySelector("button");
button.addEventListener('click', loadData);

// you can monitor the responses & timing in the "Network" tab & "Timing" tab in the chrome devloper console...
