import fs from "fs";

// Sin yargs
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// readline.question(`Ingresa un número: \n`, (num: number) => {

//     const headerMessage = `==========================
//         Tabla del ${num}   
// ==========================\n`;
    
//     let res = headerMessage+'\n';

//     for (let i: number = 1; i <= 10; i++ ) {
//         res += `${num} x ${i} = ${num * i} \n`;
//     }

//     console.log( res );
//     readline.close();

//     const outputPath = `outputs`;
    
//     fs.mkdirSync( outputPath, { recursive: true } );
//     fs.writeFileSync( `${ outputPath }/tabla-${num}.txt`, res );
//     console.log(`File tabla-${num}.txt created!`);
// });


// con Yargs
import { yarg } from "./config/plugins/args.plugin";

const { b:base, l:limit, s:showTable } = yarg;

const headerMessage = `==========================
        Tabla del ${base}   
==========================\n`;

let res = headerMessage+'\n';

for ( let i: number = 1; i <= limit; i++ ) {
    res += `${base} x ${i} = ${base * i} \n`;
}

if ( showTable ) console.log( res );

const outputPath = `outputs`;

fs.mkdirSync( outputPath, { recursive: true } );
fs.writeFileSync( `${ outputPath }/tabla-${base}.txt`, res );
console.log(`File tabla-${base}.txt created!`);
