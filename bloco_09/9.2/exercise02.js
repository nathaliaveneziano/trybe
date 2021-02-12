const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const arrayRamdomNumbers = [];

    for (let index = 0; index < 10; index += 1) {
      arrayRamdomNumbers.push(Math.floor(Math.random() * 50) + 1);
    }

    const sum = arrayRamdomNumbers
      .map((number) => number * number)
      .reduce((acc, item) => acc + item, 0);

    if (sum < 8000) {
      resolve(sum);
    } else {
      reject();
    }
  });

  promise
    // 1) Exibe se deu sucesso
    // .then(() => console.log('Dentro dos oito mil'))

    // 2) Exibe o resultado da divisão desse número por 2, 3, 5 e 10 em um array
    .then((sum) => [sum / 2, sum / 3, sum / 5, sum / 10])

    // 4) Encadeie nela uma segunda Promise que some os elementos do array.
    .then((array) => console.log(array.reduce((acc, value) => acc + value, 0)))

    // 3) Quando rejeitada exibe a frase
    .catch(() =>
      console.log("É mais de oito mil! Essa promise deve estar quebrada!")
    );
};

fetchPromise();
