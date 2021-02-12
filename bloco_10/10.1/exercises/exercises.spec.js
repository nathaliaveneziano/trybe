const {
  sum,
  encode,
  decode,
  techList,
  hydrate,
  searchEmployee,
} = require("./exercises");

/* Parte I */
describe("A função sum(a, b) retorna a soma do parâmetro a com o b", () => {
  it("Testa se o retorno de sum(4, 5) é 9", () => {
    expect(9).toBe(sum(4, 5));
  });

  it("Testa se o retorno de sum(0, 0) é 0", () => {
    expect(0).toBe(sum(0, 0));
  });

  it('Testa se a função sum lança um erro quando os parametros são 4 e "5" (string 5)', () => {
    expect(() => {
      sum(4, "5");
    }).toThrow();
  });

  it('Testa se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => {
      sum(4, "5");
    }).toThrow(new Error("parameters must be numbers"));
  });
});

/* Parte II */
// Exercício 01
describe("Refatorando as funções encode e decode", () => {
  // ENCODE
  it("Testa se encode e decode são funções", () => {
    expect(typeof encode).toEqual("function");
  });

  it("Testa se as vogais A são convertidas em 1", () => {
    expect(encode("arara")).toEqual("1r1r1");
  });

  it("Testa se as vogais E são convertidas em 2", () => {
    expect(encode("ele")).toEqual("2l2");
  });

  it("Testa se as vogais I são convertidas em 3", () => {
    expect(encode("fim")).toEqual("f3m");
  });

  it("Testa se as vogais O são convertidas em 4", () => {
    expect(encode("ovo")).toEqual("4v4");
  });

  it("Testa se as vogais U são convertidas em 5", () => {
    expect(encode("rum")).toEqual("r5m");
  });

  it("Testa se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro", () => {
    expect(encode("borboleta").length).toBe(9);
  });

  // DECODE
  it("Testa se decode e decode são funções", () => {
    expect(typeof decode).toEqual("function");
  });

  it("Testa se as vogais 1 são convertidas em A", () => {
    expect(decode("1r1r1")).toEqual("arara");
  });

  it("Testa se as vogais 2 são convertidas em E", () => {
    expect(decode("2l2")).toEqual("ele");
  });

  it("Testa se as vogais 3 são convertidas em I", () => {
    expect(decode("f3m")).toEqual("fim");
  });

  it("Testa se as vogais 4 são convertidas em O", () => {
    expect(decode("4v4")).toEqual("ovo");
  });

  it("Testa se as vogais 5 são convertidas em U", () => {
    expect(decode("r5m")).toEqual("rum");
  });

  it("Testa se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro", () => {
    expect(decode("borboleta").length).toBe(9);
  });
});

// Exercício 02
describe("Testa a função techList", () => {
  it("Testa se a função techList é definida", () => {
    expect(techList).toBeDefined();
  });
  it("Testa se techList é uma função", () => {
    expect(typeof techList).toBe("function");
  });
  it("Lista com 5 tecnologias deve retornar uma lista de objetos ordenados", () => {
    expect(
      techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas")
    ).toEqual([
      {
        tech: "CSS",
        name: "Lucas",
      },
      {
        tech: "HTML",
        name: "Lucas",
      },
      {
        tech: "JavaScript",
        name: "Lucas",
      },
      {
        tech: "Jest",
        name: "Lucas",
      },
      {
        tech: "React",
        name: "Lucas",
      },
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], "Lucas")).toBe("Vazio!");
  });
});

// Exercício 03
describe("Testa a função hydrate", () => {
  it("Testa se a função hydrate é definida", () => {
    expect(hydrate).toBeDefined();
  });
  it("Testa se hydrate é uma função", () => {
    expect(typeof hydrate).toBe("function");
  });
  it("Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber", () => {
    expect(hydrate("1 cerveja")).toBe("1 copo de água");
    expect(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho")).toBe(
      "7 copos de água"
    );
    expect(hydrate("2 shots de tequila, 2 cervejas e 1 corote")).toBe(
      "5 copos de água"
    );
    expect(hydrate("1 copo de catuaba, 1 cervejas e 1 copo de vinho")).toBe(
      "3 copos de água"
    );
    expect(hydrate("4 caipirinhas e 2 cervejas")).toBe("6 copos de água");
  });
});

// Bônus
describe("Testa a função searchEmployee", () => {
  it("Testa se searchEmployee é uma função", () => {
    expect(typeof searchEmployee).toBe("function");
  });
  it('Testa se searchEmployee(id, "firstName") retorna o primeiro nome do usuário da id consultada', () => {
    const actual = searchEmployee("1256-4", "firstName");
    const expected = "Linda";

    expect(actual).toBe(expected);
  });
  it('Testa se searchEmployee(id, "lastName") retorna o segundo nome do usuário da id consultada', () => {
    const actual = searchEmployee("1256-4", "lastName");
    const expected = "Bezos";

    expect(actual).toBe(expected);
  });
  it('Testa se searchEmployee(id, "specialities") retorna um array com todas as habilidades do id pesquisado', () => {
    const actual = searchEmployee("1256-4", "specialities");
    expect(actual).toContain("Hooks", "Context API", "Tailwind CSS");
  });
  it('Testa se um erro com a mensagem "ID não identificada" é retornado quando a ID não existir', () => {
    expect(() => {
      searchEmployee("1256-8", "specialities");
    }).toThrow();
  });
  it("Testa a mensagem do erro para ID inexistente", () => {
    expect(() => {
      searchEmployee("1256-8", "specialities");
    }).toThrowError(new Error("ID não identificada"));
  });
  it("Testa se lança um erro quando a informação e o ID são inexistentes", () => {
    expect(() => {
      searchEmployee();
    }).toThrow();
  });
  it("Testa a mensagem do erro para informação inexistente", () => {
    expect(() => {
      searchEmployee("4678-2", "shift");
    }).toThrowError(new Error("Informação indisponível"));
  });
});
