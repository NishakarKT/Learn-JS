let str = "Harry is a good boy and Harry owns code with Harry";

// 1) '^' => Carat symbol => "starts with"
console.log((/^Harr/g).test(str));
console.log((/^Harrr/g).test(str));
 
// 2) '^' => Dollar symbol => "ends with"
console.log((/ry$/g).test(str));
console.log((/rrr$/g).test(str));
 
// 3) '.' => Dot symbol => any "one" character at the dot
console.log((/H..ry/g).test(str));
console.log((/Ha.rry/g).test(str));

// 4) '*' => Asterisk symbol => any "0 or more" characters at the '*'
console.log((/H*ry/g).test(str));
console.log((/Ha*rry/g).test(str));

// 5) '?' => Query symbol => optional characters ("one" just before '?')
console.log((/Harrr?y/g).test(str));
console.log((/Harry?y?y/g).test(str));

// 6) escape characters => backslash symbol => search for metacharacters too
console.log(/H*ry/g.test(str));
console.log(/H\*ry/g.test(str));
console.log(/rry\$/g.test(str));