function toTitleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
 
toTitleCase("mY NAME is SomeThing WeIrD"); // My Name Is Something Weird
