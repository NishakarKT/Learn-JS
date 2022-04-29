let now = new Date(); // constructor
let myTime = new Date('8-4-2003 04:54:08');
myTime = new Date('Jun 13 1976');
myTime = new Date('10/06/1976');

console.log(now);
console.log(myTime);
console.log(now.getFullYear());
console.log(now.getMonth()); // (returns 0 to 11)
console.log(now.getDate());
console.log(now.getDay()); // (returns 0 to 6)
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.toDateString());

//changing date
now.setDate(2);
now.setMonth(0);
now.setYear(2019);
console.log(now);

// refrence time
let dt1 = new Date(0); // reference time
console.log(dt1);
let dt2 = new Date(4000); //(reference time + 4s)
console.log(dt2);

// other ways to initialize a date
let newDate1 = new Date("2089-09-30"); //yyyy-mm-dd
console.log(newDate1)

let newDate2 = new Date(2000, 01, 01, 12, 23, 50, 25); //new Date(yyyy, mm, dd, hr, min, sec, ms)
console.log(newDate2);

// now
console.log(Date.now()); //t timestamp : toltal miliseconds from Date(0)

