"use strict";

function Coffee(flavour, addMilk, size) {
    this.flavour = flavour;
    this.temperature = "cold";
    this.ounces = size;
    this.milk = addMilk;
    this.heat = function(time) {
        if (time < 2) {
            this.temperature = "warm"
        } else if (time = > 2 && time < 4) {
            this.temperature = "piping Hot!"
        } else {
            this.temperature = "blazing Hot!"
        }
    };
};

var myCoffee = new Coffee("espresso", false, "small");
console.log(myCoffee.flavour);
console.log(Coffee.prototype);

console.log(Coffee.prototype === myCoffee.__proto__);

// var myCoffee = "1";

console.log(myCoffee);
