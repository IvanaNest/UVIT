const niz_brojeva = [0,1,2,3];

let suma = 0;
for(let i = 0; i < niz_brojeva.length; ++i){
    const broj = niz_brojeva[i];
    suma += broj;
}

console.log(suma);


for(const broj of niz_brojeva){
    suma += broj;
}

console.log(suma);