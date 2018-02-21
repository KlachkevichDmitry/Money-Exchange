// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var base=currency;
    var solution={};

    if (currency>10000) {return{error: "You are rich, my friend! We don't have so much coins for exchange"}};

    function howMany(x) {
        for (var i=0; base-x>=0 ; i++) {
            base-=x;}
        return i;
    }

    var fifty=howMany(50);
    console.log(fifty);
    fifty>0?solution.H=fifty:0;

    var twentyFive=howMany(25);
    twentyFive>0?solution.Q=twentyFive:0;

    var ten=howMany(10);
    ten>0?solution.D=ten:0;

    var five=howMany(5);
    five>0?solution.N=five:0;

    var one=howMany(1);
    one>0?solution.P=one:0;

    return solution;
}