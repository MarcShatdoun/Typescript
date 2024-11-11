const person: {name: string; age: number; hobbies: string[]} = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking']
  };

console.log(person)

function printUser(): {name: string; age: number; hobbies: string[]} {
    return{
    name: 'Marc',
        age: 30,
        hobbies: ['Sports', 'Cooking']
    }
} 

let rest = printUser()
console.log(rest);

type User = {
    name: string;
    age: number;
    mail?: string;

}

let user: User = {
    name: 'Max',
    age: 30
}

console.log(user);

/*=====================*/
type userInfo = {
    name: string;
    age: number;
    mail?: string;
}

type userDetails = {
    password: string;
    isAdmin: boolean;
} 
type user = userInfo & userDetails;

const Marc: user = {
    name: 'Marc',
    age: 30,
    password: '1234',
    isAdmin: true
}

console.log(Marc);

/*=====================*/

const myInfo = {

    name: "Marc",
    age: 30,
    isAdmin: true,
    greetRegular: function (){
        return `my name is ${this.name} and my age is ${this.age}`
    },
}

let res = myInfo.greetRegular()
console.log(res)

/*=====================*/

class human{
    public name: string;
    private age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age
    }

    humanInfo(){
        return `${this.name} is ${this.age} years old`
    }
}

class person1 extends human{
    public gender: string;

    constructor(name: string, age: number, gender: string){
        super(name, age)
        this.gender = gender;
    }
}

let res1 = new person1('Marc', 30, 'male')
console.log(res1);


/*=====================*/

interface Person {
    name: string;
    age: number;
    gender: string;
    sayHello(): void;
  }

  function greet(person:Person){
    console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
    person.sayHello();
  }

  const marc: Person = {
    name: 'Marc',
    age: 10,
    gender: 'male',
    sayHello() {
      console.log('Hello!');
    },
  }