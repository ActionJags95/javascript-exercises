const repeatString = function(string, num) {
    var ans = "";
    if(num < 0) {
        ans = "ERROR";
    } else if(num > 0) {
        for(let i=0;i<num;i++) {
            ans += string;
        }
    }

    return ans;
};

// Do not edit below this line
module.exports = repeatString;
