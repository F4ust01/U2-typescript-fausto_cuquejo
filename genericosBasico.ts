function identity<T>(arg: T): T {
  return arg;
}

// Ejemplos de uso
let numberIdentity = identity<number>(42);
let stringIdentity = identity<string>("Hello");
let booleanIdentity = identity<boolean>(true);

console.log(numberIdentity);
console.log(stringIdentity);
console.log(booleanIdentity);