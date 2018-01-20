function add(a, b) {
    return a + b;
}
function add2(a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
}
function add3(a) {
    var parmas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        parmas[_i - 1] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < parmas.length; i++) {
        sum += parmas[i];
    }
    return sum + a;
}
add(1); //由于b是可选参数，所以可以不传b
add2(1, 2);
add2(1);
alert(add3(1, 2, 3, 4, 5, 6, 7, 87));
