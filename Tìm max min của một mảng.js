//Với tập hợp:
Math.max(1, 2, 3, 4); // 4
Math.min(1, 2, 3, 4); // 1
//Với mảng: 
var numbers = [1, 2, 3, 4];
Math.max.apply(null, numbers) // 4
Math.min.apply(null, numbers) // 1
//ES2015
var numbers = [1, 2, 3, 4];
Math.max(...numbers) // 4
Math.min(...numbers) // 1