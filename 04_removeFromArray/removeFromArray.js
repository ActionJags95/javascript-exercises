const removeFromArray = function(arr, ...args) {
    var ans = [];
    arr.forEach(item => {
        if(!args.includes(item)) {
            ans.push(item);
        }
    });

    return ans;
};

// Do not edit below this line
module.exports = removeFromArray;
