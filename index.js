const myInfo = require('./information');

var cowsay = require("./node_modules/cowsay");

console.log(cowsay.say({
    text: "Hey !! I am " + myInfo.infos,
    e: "oO",
    T: "U "
}));