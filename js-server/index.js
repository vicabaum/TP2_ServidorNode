console.log("Probando el primer TP de TP2 :)")


function filtrarPorTipo(array, tipo) {
    try {
        return array.filter(elemento => {
            switch (tipo) {
                case 'array':
                    return Array.isArray(elemento);
                    // acá verifico que sea un objeto, que no sea null y que sea un array
                case 'object':
                    return elemento !== null && typeof elemento === 'object' && !Array.isArray(elemento);
                case 'number':
                case 'string':
                case 'boolean':
                case 'function':
                case 'undefined':
                    return typeof elemento === tipo;
                default:
                    throw new Error('Tipo de dato no soportado.');
            }
        });
    } catch (error) {
        console.error(error.message);
        return []; // Retorna un array vacío en caso de error
    }
}
// **************** Pruebas! ****************
const arrayMixto = [2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r", "c", false];

console.log('*************** Array sin filtrar! ****************')
console.log(arrayMixto)

console.log('*************** Solo números ****************')
console.log(filtrarPorTipo(arrayMixto, 'number'));    

console.log('*************** Solo Strings ****************')
console.log(filtrarPorTipo(arrayMixto, 'string'));    

console.log('*************** Solo booleanos ****************')
console.log(filtrarPorTipo(arrayMixto, 'boolean'));  

console.log('*************** Solo arrays ****************')
console.log(filtrarPorTipo(arrayMixto, 'array')); 

console.log('*************** Solo objetos ****************')
console.log(filtrarPorTipo(arrayMixto, 'object'));    

console.log('*************** Solo funciones ****************')
console.log(filtrarPorTipo(arrayMixto, 'function'));  

// Prueba usando un tipo de dato no soportado ('date')
console.log('*************** Solo funciones ****************')
const resultado = filtrarPorTipo(arrayMixto, 'date');