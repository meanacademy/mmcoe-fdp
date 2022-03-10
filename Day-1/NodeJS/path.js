let path = require('path');

let fileLocation = path.join(__dirname, "notes123.txt");
console.log(fileLocation);

let fileName = path.basename(fileLocation);
console.log(fileName);

let fileExt = path.extname(fileName);
console.log(fileExt);

