var inputData = [
  {
    id: 1,
    title: "hippo",
    faveFood: "carrots",
  },
  {
    id: 2,
    title: "Cat",
    faveFood: "carrots",
  },
  {
    id: 3,
    title: "ducks",
    faveFood: "breadcrumbs",
  },
];

const findAnimal = (animalName) => {
  for (let item of inputData) {
    if (item["title"] === animalName) {
      return item["faveFood"];
    }
  }
};
console.log(findAnimal("hippo"));
