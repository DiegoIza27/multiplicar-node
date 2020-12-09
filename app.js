// tabla de multiplicar  del dos 

const { listabla } = require('./multiplicar/multiplicar');
const { creararchivo } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yars');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listabla(argv.base, argv.limite)

    case 'crear':

        creararchivo(argv.base, argv.limite).then((archivo) => {
            console.log(` Archivo creado ${ argv.base}`)
        }).catch((err) => {

            console.log(err);
        })

        break;
    default:
        console.log('Comando no reconocido');

}

// console.log(argv);
// process.argv manda los objetos 
// let parametro = argv[2];
// let numero = parametro.split('=')[1]