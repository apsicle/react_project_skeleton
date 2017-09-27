class Check {
    constructor() {
        this.name = 'Abby'
        this.template = (
            <div>
                <button onClick={this.someEventHandler}></button>
            </div>
        )
    }
    
    fun1() {
        console.log(this);
        const fun2 = () => {
            console.log(this);
        };
        fun2();
    }

    testFun() {
        console.log(this);
    }

    fun2() {
        (function test() {
            console.log('from test inside fun2' + this);
        })();
    }

    testFun2() {
        this.testFun();
    }

    someEventHandler() {
        console.log(this);
    }
}

let check = new Check();
check.fun1(); // binds this of object. This is based on from whence the function is called
// arrow function inside is called without an object parent, but arrow functions share the
// this binding of their parent lexical scope, which, in this case, is the outer function
// which binds the object to this.
check.fun2(); // doesn't print out anything because this isn't bound to anything. It's being
// called from an anonymous function within fun2().
check.testFun(); // binds the object as this because it is called as a method.
check.testFun2(); // binds the object, even though it's called within testFun2(), it is
// still called as a method on this (which is equivalent to check on the parent method call)
// and so this binds the parent object.
check.someEventHandler(); // binds this when called as a method from the global context,
// but when set as the onClick method, something happens in the background JS that I don't
// understand which makes it so that the context is lost when firing due to the
// event happening. Avoid this by manually setting onclick=someEventHandler.bind(this);

const broken = check.testFun2();
broken() // breaks the binding because now we're calling it from the global context.