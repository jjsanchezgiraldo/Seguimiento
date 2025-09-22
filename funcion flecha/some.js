//Some
//El método some se usa para validar que algunos elementos de array pasen la prueba
// implementada por la funcion proporcionada

const numeros = [1,2,3,4,5];
const algunosnumerossonmayoresquecero = numeros.some(num => num > 0);
console.log(algunosnumerossonmayoresquecero); // true 