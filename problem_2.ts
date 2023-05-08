interface Person {
    name: string;
    age: number;
  }
  
  const getAdults = (people: Person[]): Person[] => {
     const result =  people.filter((person) => person.age >= 18);
     return result;
  }

  const people: Person[] = [
    { name: 'sadia', age: 23 },
    { name: 'nadia', age: 17 },
    { name: 'padia', age: 18 },
    { name: 'kadia', age: 30 },
    { name: 'hadia', age: 17 },
    { name: 'jadia', age: 19 }
  ];
  

  
  const adults: Person[] = getAdults(people);
  
  console.log(adults);

