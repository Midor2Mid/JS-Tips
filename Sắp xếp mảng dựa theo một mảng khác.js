itemsArray = [ 
    ['Anne', 'a'],
    ['Bob', 'b'],
    ['Henry', 'b'],
    ['Andrew', 'd'],
    ['Jason', 'c'],
    ['Thomas', 'b']
]

sortingArr = [ 'b', 'c', 'b', 'b', 'a', 'd' ]

=> itemsArray = [    
    ['Bob', 'b'],
    ['Jason', 'c'],
    ['Henry', 'b'],
    ['Thomas', 'b']
    ['Anne', 'a'],
    ['Andrew', 'd'],
]
//_______________________________________________
items = [ 
    ['Anne', 'a'],
    ['Bob', 'b'],
    ['Henry', 'b'],
    ['Andrew', 'd'],
    ['Jason', 'c'],
    ['Thomas', 'b']
]

sorting = [ 'b', 'c', 'b', 'b', 'c', 'd' ];
result = []

sorting.forEach(function(key) {
    var found = false;
    items = items.filter(function(item) {
        if(!found && item[1] == key) {
            result.push(item);
            found = true;
            return false;
        } else 
            return true;
    })
})

result.forEach(function(item) {
    document.writeln(item[0]) /// Bob Jason Henry Thomas Andrew
})

//_______________________________________________

result = items.map(function(item) {
    var n = sorting.indexOf(item[1]);
    sorting[n] = '';
    return [n, item]
}).sort().map(function(j) { return j[1] })
//=> destroy sorting array.

//_______________________________________________

itemsArray.sort(function(a, b){  
  return sortingArr.indexOf(a) - sortingArr.indexOf(b);
});