
const animals = ['강아지', '고양이', '사람'];
const animals2 = animals;
var anotherAnimals = [...animals];

console.log(animals, animals2, anotherAnimals);

console.log(animals == animals2);
console.log(animals == anotherAnimals);

console.log(...animals);


var anotherAnimals = [...animals, '공룡', ...animals];
console.log(anotherAnimals); 