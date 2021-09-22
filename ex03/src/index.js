var myFood = {
    vegetable: "carrot",
    fruit: "orange",
    drink: "water"
}

function myFunction(myObj) {
    var vegetableValue = myFood["vegetable"];
    var fruitValue = myFood["fruit"];
    var waterValue = myFood["drink"];
    return { vegetableValue, fruitValue, waterValue };
}

console.log(myFunction(myFood));

module.exports = myFunction;