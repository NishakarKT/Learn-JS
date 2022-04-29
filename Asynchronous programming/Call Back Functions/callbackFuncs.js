// pretend that this response is coming from the server
const student = [
    { name: "Nishakar Kumar", subject: "Data Structures" },
    { name: "Rohan Das", subject: "Python" }
]

// setTimeout => the instructions re run in te background, and we move to next set of instructions...
function enrollStudent(student, callback) {
    setTimeout(() => {
        students.push(student);
        callback(); // when the data has been successfully entered, we call getStudents()...
    }, 3000);
}

function getStudents() {
    setTimeout(() => {
        console.log("Some DOM manipulation...");
    }, 1000);
}

enrollStudent(student, getStudents);