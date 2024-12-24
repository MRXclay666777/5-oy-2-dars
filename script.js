const ism = prompt("String ma'lumot kiriting");
const num = +prompt("Raqam ma'lumot kiriting");
const hayoq = prompt("Boolean ma'lumot kiriting (true yoki false)");
const kattaSon = BigInt(prompt("BigInt ma'lumot kiriting (juda katta raqam)"));
const nullValue = null;
let aniqlanmagan;
const noyob = Symbol("Symbol");
const obekt = { name: "M.R.X", age: 13 };

alert("Dastur tugadi.");

console.log(`
    ${ism} - ${typeof ism} ma'lumot turiga kiradi
    ${num} - ${typeof num} ma'lumot turiga kiradi
    ${Boolean(hayoq)} - ${typeof Boolean(hayoq)} ma'lumot turiga kiradi
    ${kattaSon} - ${typeof kattaSon} ma'lumot turiga kiradi
    null - ${nullValue}  ma'lumot turiga kiradi
    ${aniqlanmagan} - ${typeof aniqlanmagan} ma'lumot turiga kiradi
    ${noyob.toString()} - ${typeof noyob} ma'lumot turiga kiradi
    ${JSON.stringify(obekt)} - ${typeof obekt} ma'lumot turiga kiradi
`);