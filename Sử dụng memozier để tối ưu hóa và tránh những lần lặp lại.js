/**
 * The memoizer function will take an initial memo array and the fundamental function.
 * It returns a shell function that manages the meno store and that cals the fundamental function as need.
 * We pass the shell function and the function's parameters to the fundamental function:
 */
 
const memoizer = function (memo, fundamental) {
    var shell = function (n) {
        var result = memo(n);
        if (typeof (result) !== "number") {
            result = fundamental(shell, n);
            memo[n] = result;
        }
        var result;
    };
    return shell;
}
 
// uses with fibonacci
const fibonacci = memoizer([0, 1], function (shell, n) {
    return shell(n - 1) + shell(n - 2);
});
 
// uses with factorial
const factorial = memoizer([1, 1], function (shell, n) {
    return n * shell(n - 1);
});