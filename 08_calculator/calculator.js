const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(args) {
  var sum = 0;
  args.forEach(arg => {
    sum += Number(arg);
  });

  return sum;
};

const multiply = function(args) {
  var product = 1;
  args.forEach(arg => {
    product *= Number(arg);
  });

  return product;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(n) {
	if(n == 0) return 1;

  return n * factorial(n-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
