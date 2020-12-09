var Color = require('color');
const fs = require('fs');
const { resolve } = require('path');

let listabla = (numero, limite) => {
    return new Promise((resolve) => {
        let i = 1;
        let o = 0;
        let datos = '';
        for (i = 1; i <= limite; i++) {
            o = numero * i;
            datos += (`${numero}*${i}=${o} \n`);

        }

        resolve(console.log(datos));
        console.log('========');
        console.log(`====tabla de ${numero}`);
        console.log('========');
    })

}

let creararchivo = (numero, limite) => {
    return new Promise((resolve, rejects) => {
        if (!Number(numero)) {
            rejects(`El  valor ingresado ${numero} no es un numero`);
            return;
        }
        let i = 1;
        let o = 0;
        let datos = '';
        for (i = 1; i <= limite; i++) {
            o = numero * i;
            datos += (`${numero}*${i}=${o} \n`);
        }

        const data = new Uint8Array(Buffer.from(datos));
        fs.writeFile(`tablas/tabla del-${numero}.txt`, data, (err) => {
            if (err)
                rejects(err);
            else
                resolve(console.log(` tabla del-${numero}.txt `));
        });
    })
}


module.exports = {
    creararchivo,
    listabla
}