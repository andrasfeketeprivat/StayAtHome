console.log("numbers 0-9")
for (let i = 0; i < 10; i++) {
    console.log(i);    
}

console.log("numbers 1-10")
for (let i=1; i<=10; i++) {
    console.log(i);
}

console.log("odd numbers 1-20")
for (let i=1; i<=10; i++) {
    console.log(i*2);
}

console.log("odd numbers 1-20, 2nd solution")
for (let i=1; i<=20; i++) {
    if (i%2===0) {
        console.log(i)
    }
}
console.log("printNumbersTill(20)")
let printNumbersTill = (number) => {
    for (i=1; i<=number; i++) {
        console.log(i)
    }
}
console.log(printNumbersTill(20))

console.log("Geeting")
let getGreetingTo = (name) => {
    //return(`Hello ${name}`) //Solution 1
    return ("hello "+name)
}

getGreetingTo('Mark');              // Should not print to the console
console.log(getGreetingTo('Mark')); // Should print 'Hello Mark!'

console.log("print array elements")
let valuesToPrint = [0, 3, 6, 9, 12, 15];
let printValues = (values) => {
    for (let i = 0; i < values.length; i++) {
        console.log(values[i]);
    }
}
printValues(valuesToPrint);

console.log("print array elements 2nd solution")
let myNumbers = [1,2,3,5,8,13,21];
myNumbers.forEach((number) => {
    console.log(number);
});