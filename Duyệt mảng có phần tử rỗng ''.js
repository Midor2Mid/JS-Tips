console.log('parameter1', , 'parameter3');
=> Error: Unexpected token ,

console.log(...['parameter1', , 'parameter3']); 
"parameter1" undefined "parameter3"