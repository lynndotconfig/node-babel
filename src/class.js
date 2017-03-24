class Foo {
    set bar(a) {
        throw new Error("foo!");
    }
}

class Bar extends Foo {
    bar() {
        //will throw an error when this method is defined
    }
}