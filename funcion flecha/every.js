// Every:
//El método every() comprueba si todos los elementos del array pasan la prueba
// implementada por la función proporcionada.

const numeros =  [1,2 ,3, 4, 5];
const todoslosnumerossonmayoresquecero = numeros.every(num => num > 0);
console.log(todoslosnumerossonmayoresquecero); // true