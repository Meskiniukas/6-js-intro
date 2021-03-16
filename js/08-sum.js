/*
Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai)
ATS:
Intervale nuo 0 iki 4 suma yra 10.
0 - 4           = 10
10 - 14         = 60
20 - 24         = 110
-50 - 50        = 0
0 - 100         = 5050
574 - 815       = labai didelis skaicius
-70 - 30        = santykinai didelis neigiamas skaicius (-2020)
0 - 0           = 0
0 - 99999999999 = astronomiskai didelis skaicius
*/

const nuo = 0;
const iki = 20;
let suma = 0;
let ats = '';
let pozymis = 0;

if (nuo <= iki) {
    pozymis = 1;
    for (let i = nuo; i <= iki; i++) {
        suma += i;
    }
} else {
    for (let i = iki; i <= nuo; i++) {
        suma += i;
    }
}

if (pozymis === 1) {
        ats = `Intervale nuo ${nuo} iki ${iki} suma yra ${suma}.`;
} else {
        ats = `Intervale nuo ${iki} iki ${nuo} suma yra ${suma}.`;
}

console.log(ats);

const x = Number.MAX_SAFE_INTEGER + 1;
const y = Number.MAX_SAFE_INTEGER + 2;
console.log(`Didžiausias saugus sveikas skaičius`);
console.log(Number.MAX_SAFE_INTEGER);
console.log(`X = ${x} (X = MAX_SAFE_INTEGER + 1)
Y = ${y} (Y = MAX_SAFE_INTEGER + 2).`);
console.log('X = Y ? ', x === y);