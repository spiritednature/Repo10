var myPet = {
    species: "golden",
    name: "bella",
    legs: 4,
    friends: ["Nadina", "Elma"]
}

function myFunction(myObj) {
    return(myObj);
}

console.log(myFunction(myPet));

module.exports = { myPet, myFunction };