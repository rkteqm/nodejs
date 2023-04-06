const fs = require("fs");

// Reading text file
let text = fs.readFileSync("textfile.txt", "utf-8");
console.log("Reading textfile.txt...");
console.log(text);

text = text.replace('tree', 'Rahul');

// Writing text file
fs.writeFileSync('rahulfile.txt', text);
console.log("Writing rahulfile.txt...");
console.log(text);