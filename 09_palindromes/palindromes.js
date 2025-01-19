const palindromes = function (string) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

    const orgString = string.toLowerCase().split('').filter((char) => alphanumerical.includes(char)).join('');

    const revString = orgString.split('').reverse().join('');

    return (orgString === revString);
};

// Do not edit below this line
module.exports = palindromes;
