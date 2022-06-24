// 1)

class Developer {
    constructor(options) {
        this.name = options.name
        this.programmingLanguage = options.programmingLanguage
    }

    message() {
        console.log(`${this.name} работает с ${this.programmingLanguage}`);
    }
}

const IvanDeveloper = new Developer({ name: "Ivan", programmingLanguage: "Java" })

console.log(IvanDeveloper);
console.log(IvanDeveloper.message());

class Student extends Developer {
    constructor(options) {
        super(options)

        this.groupNumber = options.groupNumber
    }
}

const OlyaStudent = new Student({ name: "Olya", programmingLanguage: "Pithon", groupNumber: 25 })

console.log(OlyaStudent);
console.log(OlyaStudent.message());


//2)

const str = new String("Some string");

String.prototype.addedExclamationMark = function() {
    return `${this}!`
};

console.log(str.addedExclamationMark());


// 3)

const num = new Number(25);

Number.prototype.divideNumberByTwo = function() {
    return this / 2;
}

console.log(num.divideNumberByTwo());