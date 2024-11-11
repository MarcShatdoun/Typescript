function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year; 

    this.info = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

const book1 = new Book('Book One', 'John Doe', '2013')


function person(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age; 

    this.info = function() {
        return `${this.name} was written by ${this.gender} in ${this.age}`;
    }
}

const user1 = new person('Marc', 'male', 30)
console.log(user1.info());
console.log(user1.name);
console.log(user1.age);
console.log(user1.gender);


