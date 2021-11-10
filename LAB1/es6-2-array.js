
const C = ["Toyota", "Kubota", "Mazda"]
const P = [];
P[4] = "F16"
P[1] = "BOING 747";
console.log(C);
console.log(P);
const cities = new Array("Buriram", 31000)
console.log(cities[1]);
let car = C.pop();
console.log(C);
newC.push("Honda")
console.log(C);
newC.shift();
console.log(C);
newC.unshift("Tata");
console.log(C);
const jpC = C.slice(1, 3);
console.log(jpC);
C.splice(1, 1, "Subaru", "Lexus");
console.log(C);
const mixArr = C.concat(P);
console.log(mixArr);
const mixString = mixArr.toString();
console.log(mixString);
for (let value of mixArr) {
    console.log(value);
}
console.log(mixArr.length);
for (let index of mixArr.keys()) {
    console.log(index);
}
let text = "";
mixArr.forEach(conString);
console.log(text);
function conString(value, index, array) {
    text += value + " : "
}
const numbs = [10, 20, 15, 5, 2];
const numbs2 = numbs.map(multi2)
console.log(numbs2);
function multi2(value, index, array) {
    return value * 3;
}
const over10 = numbs2.filter(over10fn)
console.log(over10);
function over10fn(value) {
    return value > 15;
}