enum Color {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
}

function getColorMessage(color: Color): string {
  return `The selected color is ${color}.`;
}

// Ejemplos de uso
console.log(getColorMessage(Color.Red)); // Output: The selected color is Red.
console.log(getColorMessage(Color.Green)); // Output: The selected color is Green.
console.log(getColorMessage(Color.Blue)); // Output: The selected color is Blue.
