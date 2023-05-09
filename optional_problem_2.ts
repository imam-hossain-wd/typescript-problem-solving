type StringOrNumber<T> = T extends string ? string : number;

interface Person {
  name: string;
  age: StringOrNumber<any>;
}

const person: Person = {
  name: "John Doe",
  age: 25
};

console.log(person);
