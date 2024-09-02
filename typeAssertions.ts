let someValue: any = 123;
let stringLength: number = (someValue as string).length;

console.log(stringLength); // Output: undefined, porque "someValue" es un número y no tiene la propiedad "length"
