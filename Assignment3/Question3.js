let string = 'INDIA';

let chars = string.split('');

chars.splice(3, 0, 'O', 'N', 'E', 'S');

let modifiedString = chars.join('');

console.log(modifiedString); 
