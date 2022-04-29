let choice = -1;

switch (choice) {
    case 1:
        console.log("You chose 1");
        break;

    case 2:
        console.log("You chose 2");
        break;

    case 3:
        console.log("You chose 3");
        break;
    default:
        console.log("Choose again");
}

// another way of implementation
switch (true) { /* switch(true) => switch will run always */
    case (2 > 3):
        console.log("2 > 3");
        break;

    case ("apple" === "mango"):
        console.log(`"apple" == "mango"`);
        break;

    case (null == undefined):
        console.log("null == undefined");
        /* null == undefined => true, null === undefined => false */
        break;
    default:
        console.log("Choose again");
}
