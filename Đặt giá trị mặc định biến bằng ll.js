var a;

console.log(a); //undefined

a = a || 'default value';

console.log(a); //default value

a = a || 'new value';

console.log(a); //default value