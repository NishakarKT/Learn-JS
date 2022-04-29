let imgBox = document.querySelector('.imgBox');
let whiteBoxes = document.getElementsByClassName('whiteBox');

imgBox.addEventListener("dragstart", (e) =>{
    e.target.className += " hold";
    setTimeout(()=>{
        e.target.className = "hide";
    }, 0); // setTimeout with 0s => runs when all the other tasks are successfullty executed...
});

imgBox.addEventListener('dragend', (e) => {
    e.target.className = "imgBox";
});

for(let element of whiteBoxes){
    element.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    element.addEventListener('dragenter', (e) => {
        e.target.className += " dashed";
    });
    element.addEventListener('dragleave', (e) => {
        e.target.className = "whiteBox";
    });
    element.addEventListener('drop', (e) => {
        console.log("nbk");
        e.target.append(imgBox);
    });
}