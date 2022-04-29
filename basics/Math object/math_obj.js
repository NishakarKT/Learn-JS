let m = Math;
console.log(m);

// ln(x)
console.log(m.log(2))
console.log(m.LN2)
console.log(m.LN10)

// log10(x)
console.log(m.log10(2))

// integer round of
console.log(m.round(12.4999));
console.log(m.ceil(12.34));
console.log(m.floor(12.78));

// trunc => removes decimals (no rounding)
console.log(m.trunc(8.12));
console.log(m.trunc(8.92));

// abs
console.log(m.abs(5-87));

// trigonometric
console.log(m.sin(m.PI));
console.log(m.sin(m.E)); // Euler's constant

// min max
console.log(m.min(1,5,3));
console.log(m.max(1,5,3));

// random
console.log(m.random()); // 0-1
console.log(m.random()*290+10); // 10-300
console.log(m.ceil(m.random()*(300-10) + 10)); // 10-300 integers
console.log(m.floor(m.random()*(300-10) + 10)); // 10-300 integers

// sqrt and cbrt
console.log(m.sqrt(4));
console.log(m.cbrt(8));

// pow(m,n)
console.log(m.pow(4,3));

// PI
console.log(m.PI);

// and many more....