const findTheOldest = function(people) {
    return people.reduce((oldest, nextOne) => {
        let oldestAge = (oldest["yearOfDeath"] ? oldest["yearOfDeath"]
            : (new Date).getFullYear()) - oldest.yearOfBirth;

        let nextOneAge = (nextOne["yearOfDeath"] ? nextOne["yearOfDeath"]
            : (new Date).getFullYear()) - nextOne.yearOfBirth;
        return (oldestAge > nextOneAge ? oldest : nextOne);
    } , {});
};
// const people = [
//     {
//     name: "Carly",
//     yearOfBirth: 1942,
//     yearOfDeath: 1970,
//     },
//     {
//     name: "Ray",
//     yearOfBirth: 1962,
//     yearOfDeath: 2011,
//     },
//     {
//     name: "Jane",
//     yearOfBirth: 1912,
//     yearOfDeath: 1941,
//     },
// ]

// console.table(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
