class Bork {
    instanceProperty = "bork";
    boundFunction = () => {
        return this.instanceProperty
    }

    static staticProperty = "babelIsCool";
    static staticFunction = function () {
        return Bork.staticProperty;
    }
}

let myBork = new Bork;


console.log(myBork.prototype.boundFunction);
console.log(myBork.boundFunction.call(undefined));
console.log(Bork.staticFunction());