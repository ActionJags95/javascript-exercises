const convertToCelsius = function(far) {
  var ans = Math.round(((far-32) * (5/9)) * 10) / 10;
  return ans;
};

const convertToFahrenheit = function(cel) {
  var ans = Math.round((cel * (9/5) + 32) * 10) / 10;
  return ans;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
