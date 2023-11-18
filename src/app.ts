
// console.log( process.argv );
// const [tsnode, app, ...args ] = process.argv;
// console.log( args );

import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";
// console.log( yarg );


(async() => {
    await main(); 
    // console.log('Fin del programa');
})();


async function main() {
    // console.log('Main ejecutado');
    const { b:base, l:limit, s:showTable, n:fileName, d:fileDestination } = yarg;
    
    // console.log( yarg );
    ServerApp.run({
        base,
        limit,
        showTable,
        fileName,
        fileDestination
    });
}

