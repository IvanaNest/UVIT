
function najveca_vrednost(x, y){
    const result = x > y ? x : y;
    return result;
}

console.log(typeof najveca_vrednost);
console.log(najveca_vrednost+2,typeof(najveca_vrednost+2));

const maksimum = najveca_vrednost(1,-1);
console.log(maksimum);