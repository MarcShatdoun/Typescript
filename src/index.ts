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
        return `${this.name}  ${this.age} `
    },
}

let [namev2, age] = myInfo.greetRegular()
console.log(`my name is ${namev2} and my age is ${age}`);