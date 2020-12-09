const opciones = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        demand: true,
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar ', opciones)
    .command('crear', 'imprime en consola la tabla de multiplicar ', opciones)
    .help()
    .argv;
module.exports = {
    argv
}