var a;
for (a = 1; a <= 5; a++) {
    console.log("The value of a is", a);
}

car = ["Enova", "BMW", "Audi", "Ford", "lamborgni"]
var i;
for (i = 0; i <= car.length; i++) {
    console.log(car[i]);
}

var global = 30;

function test() {

    var local = 10
    //inner funtion
    function inner() {
        var block = 25
        return block;
    }
    return inner;
}

// call function
let x = test()
let result = x()
console.log("result is", result)