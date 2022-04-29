let str = "Harry is a good boy and Harry owns code with H7rry";

// Character sets []
console.log(/H[a-z]rry/g.test(str)); // if any character between a-z is present => matches
console.log(/H[a-zA-Z0-9]rry/g.test(str)); // if any character between a-z or A-Z or 0-9 is present => matches
console.log(/H[pwaur]rry/g.test(str)); // if any character (p, w , a, u or r) is present => MATCHES
console.log(/H[^pwaur]rry/g.test(str)); // if any character (p, w , a, u or r) is present => DOES NOT MATCH

// Quantifiers {}
console.log(/Har{2}y/g.test(str));
console.log(/Har{3}y/g.test(str));
console.log(/Har{0,3}y/g.test(str)); // matches for 0,1,2 or 3 R's

// Groupings ()
console.log(/(Har){1,2}ry/g.test(str)); // "Har" is repeated 1 or 2 times
console.log(/(Har){2,3}ry/g.test(str)); // "Har" is repeated 2 or 3 times
