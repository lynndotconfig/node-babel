var a = () => {};
var a =(b)=>b;

console.log(a("1"))

const double = [1, 2, 3].map((item) => item * 2);
console.log(double);

const sum = [1, 2, 3].reduce((acc, val) => acc + val, 0);
console.log(sum)

var bob = {
  _name: 'Bob',
  _friends: ["Sally", "Tom"],
  printFriends() {
    this._friends.forEach(f => 
      console.log(this._name + " knows " + f));
  }
}

console.log(bob.printFriends());