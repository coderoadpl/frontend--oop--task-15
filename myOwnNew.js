// 1. creates new object
// 2. sets prototype of that object to prototype property of the constructor function
// 3. calls the constructor function in context of newly created object (1.)
// 4. return this object

const Person = function (name) {
    this.name = name
}

Person.prototype.sayMyName = function () {
    console.log(this.name)
}

const myOwnNew = function (constructorFunction, args) {
    // 1. & 2.
    const newObject = Object.create(constructorFunction.prototype)

    // 3.
    constructorFunction.apply(newObject, args)

    // 4. 
    return newObject
}