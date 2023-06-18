function fibonacci(n) {
    var sequence = [0,1];

    var i = 0;
    var j = 1;
    var sum ;
    for (let i = 2; i < n; i++) {
        sum = i + j;
        fibonacci.push(sum);
        i = j;
        j = sum;
    }

    return sequence;
}

var n = 10;
var result = fibonacci(n);
console.log(result);