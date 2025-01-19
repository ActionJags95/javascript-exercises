const fibonacci = function(num) {
    num = Number(num);

    if(num < 0) return 'OOPS';

    let fib1 = 0, fib2 = 1;

    if(num == 0) return fib1;
    else if(num == 1) return fib2;
    else {
        let ans = 0;
        for(let i=2;i<=num;i++) {
            ans = fib1 + fib2;
            fib1 = fib2;
            fib2 = ans;
        }

        return ans;
    }
};

// Do not edit below this line
module.exports = fibonacci;
