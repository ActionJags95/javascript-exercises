const getTheTitles = function(books) {
    var ans = [];

    books.forEach(book => {
        ans.push(book.title);
    });

    return ans;
};

// Do not edit below this line
module.exports = getTheTitles;
