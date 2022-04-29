let str = "Harry is a good boy    and $arry ow7ns c55678ode with $%^&*rry";

// "\w" => word character (undersore, alphabets or numbers)
console.log(/\warry/g.test(str)); // here \w takes up "H"
console.log(/\w+ry/g.test(str)); // here \w+ takes up "Har"

// "\W" => Non-word character (undersore, alphabets or numbers)
console.log(/\Warry/g.test(str)); // here \W takes up "$"
console.log(/\W+rry/g.test(str)); // here \W+ takes up "$%^&*"

// "\d" => digits/numbers
console.log(/\dns/g.test(str)); // here \d takes up "7"
console.log(/\d+ode/g.test(str)); // here \d+ takes up "55678"

// "\D" => non-digits/non-numbers
console.log(/\D7ns/g.test(str)); // here \d takes up "w"
console.log(/\D+7ns/g.test(str)); // here \d+ takes up "ow"

// "\s" => space character
console.log(/\sboy/g.test(str)); // here \s takes up " "
console.log(/\s+and/g.test(str)); // here \s+ takes up "    "

// "\S" => nono-space character
console.log(/\Soy/g.test(str)); // here \S takes up "B"
console.log(/\S+ry/g.test(str)); // here \S+ takes up "Har"

// \b => word boundary => if the word separation is present
console.log(/and\b/g.test(str));
console.log(/\bgoo/g.test(str));
console.log(/an\b/g.test(str));

// Assertions
console.log(/H(?=a)/g.test(str)); // if a is after 'H'
console.log(/H(?!a)/g.test(str)); // if a is NOT after 'H'