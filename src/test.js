

function CreateInstance(Fn, ...args) {
    const newInstance = Object.create({});
    Object.setPrototypeOf(newInstance, Fn.prototype);
    const result = Fn.apply(newInstance, args);
    return result instanceof Object ? result : newInstance;
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}



setTimeout(() => {
    console.info("11111")
    setTimeout(() => {
        console.info("3333333")
    }, 0);
}, 0);


setTimeout(() => {
    console.info("2222222")
}, 0);