const fetchPromise = async () => {
  const promise = await new Promise((resolve, reject) => {
    const arrayRamdomNumbers = [];

    for (let index = 0; index < 10; index += 1) {
      arrayRamdomNumbers.push(Math.floor(Math.random() * 50) + 1);
    }

    const sum = arrayRamdomNumbers
      .map((number) => number * number)
      .reduce((acc, item) => acc + item, 0);

    sum < 8000 ? resolve(sum) : reject();
  })
    .then((sum) => [sum / 2, sum / 3, sum / 5, sum / 10])
    .then((array) => console.log(array.reduce((acc, value) => acc + value, 0)))
    .catch(() =>
      console.log("É mais de oito mil! Essa promise deve estar quebrada!")
    );
};

fetchPromise();
