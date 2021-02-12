const {
  uppercase,
  getUserName,
  getRepos,
  getAnimal,
  getAnimalAge
} = require("./exercises");

// Exercício 01
describe("Exercício 01", () => {
  it('Verifica se "teste" vira "TESTE"', (done) => {
    uppercase("test", (word) => {
      expect(word).toBe("TEST");
      done();
    });
  });
});

// Exercício 02 e 03
describe("Exercícios 02 e 03", () => {
  it("Usuário encontrado", () => {
    return expect(getUserName(4)).resolves.toBe("Mark");
  });

  it("Usuário não encontrado", () => {
    return expect(getUserName(3)).rejects.toEqual({
      error: "User with 3 not found.",
    });
  });

  it("Usuário encontrado ASYNC/AWAIT", async () => {
    await expect(getUserName(4)).resolves.toBe("Mark");
  });

  it("Usuário não encontrado ASYNC/AWAIT", async () => {
    try {
      await getUserName(3);
    } catch (error) {
      expect(error).toEqual({ error: "User with 3 not found." });
    }
  });
});

// Exercício 04
describe("Exercício 04", () => {
  const url = "https://api.github.com/orgs/tryber/repos";

  // it("Verifica respositórios GitHub", () => {
  //   return getRepos(url).then(result => {
  //     expect(result).toContain('sd-01-week4-5-project-todo-list');
  //     expect(result).toContain('sd-01-week4-5-project-meme-generator');
  //   });
  // });

  it("Verifica erro no acesso ao repositório", () => {
    return getRepos(url).catch(error => {
      expect(error).toThrow();
    })
  });
});

// Exercício 05
// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));

// test('', () => console.log('1 - test'));

// describe('Scoped / Nested block', () => {
//   beforeEach(() => console.log('2 - beforeEach'));
//   afterEach(() => console.log('2 - afterEach'));

//   test('', () => console.log('2 - test'));
// });
// RESPOSTA: 1 - beforeEach | 1 - test | 1 - afterEach | 1 - beforeEach | 2 - beforeEach | 2 - test | 2 - afterEach | 1 - afterEach

// Exercício 06
describe("Exercício 06", () => {
  describe('Testando promise - findAnimalByName', () => {
    describe('Quando existe o animal com o nome procurado', () => {
      test('Retorne o objeto do animal', () => {
        expect.assertions(1);
        return getAnimal('Dorminhoco').then(animal => {
          expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
        });
      });
    });
  
    describe('Quando não existe o animal com o nome procurado', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return getAnimal('Bob').catch(error =>
          expect(error).toEqual('Nenhum animal com esse nome!')
        );
      });
    });
  });

  describe('Testando promise - findAnimalByAge', () => {
    describe('Quando existe o animal com a idade procurada', () => {
      test('Retorne o objeto do animal', () => {
        expect.assertions(1);
        return getAnimalAge(2).then(animal => {
          expect(animal).toEqual({ name: 'Soneca', age: 2, type: 'Dog' });
        });
      });
    });
  
    describe('Quando não existe o animal com a idade procurada', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return getAnimalAge(3).catch(error =>
          expect(error).toEqual('Nenhum animal com essa idade!')
        );
      });
    });
  });
});
