// Ajax stands for Asynchronous Javascript And XML (AJAX)
// not a programming language, but a set of existing technologies
// modern websites use JSON, instead of XML

// WHY USE AJAX
// 1) No reload/reresh of the whole page/content, for a small section reload/refresh
// 2) Better user experience
// 3) save network bandwidth
// 4) very interactive

// How Does AJAX Work?
// JavaScript and XML combine to make asynchronous updating happen through the use of something called an XMLHttpRequest (XHR) object. When the user visits a web page which is designed using AJAX technology, and a prescribed event occurs (a button, or fills out a form) the JavaScript creates an XMLHttpRequest (XHR) object, which then transfers data in an XML format between a web browser and a web. The XMLHttpRequest(XHR) object sends a request for updated page data to the web server, the server process the request, a response is created at server-side and sent back to the browser, which then uses JavaScript to process the response and display it on the screen as updated content.

// 5 STEPS OF AJAX WORKING (readyStates)
// 0) request not yet initialized
// 1) server connection established
// 2) request recieved
// 3) processing request
// 4) request processing is finished and response is generated
// 0,1,2,3,4 are readyState values

// status codes
// 200 => ok
// 403 => forbidden
// 404 => not found
// many more... => https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
