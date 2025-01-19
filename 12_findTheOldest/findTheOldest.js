const findTheOldest = function(people) {
    var retPerson;
    var maxAge = 0;

    people.forEach(person => {
        const yob = Number(person.yearOfBirth);
        const yod = Number(person.yearOfDeath === undefined ? 2024 : Number(person.yearOfDeath));

        const age = (yod - yob);
        if((yod-yob) > maxAge) {
            retPerson = person;
            maxAge = age;
        }
    });

    return retPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
