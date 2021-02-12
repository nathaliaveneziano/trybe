const exercises = require("./exercises");
// jest.mock("./exercises");

describe("Exercícios", () => {
  describe("Exercício 01", () => {
    it("Testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
      exercises.randomNumber = jest.fn();

      exercises.randomNumber.mockReturnValue(10);
      exercises.randomNumber();
      expect(exercises.randomNumber).toHaveBeenCalled();
      expect(exercises.randomNumber).toHaveBeenCalledTimes(1);
      expect(exercises.randomNumber()).toBe(10);
    });
  });

  describe("Exercício 02", () => {
    it("Testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
      exercises.randomNumber.mockClear();
      exercises.randomNumber.mockImplementationOnce((a, b) => a / b);

      expect(exercises.randomNumber(10, 2)).toBe(5);
      expect(exercises.randomNumber).toHaveBeenCalled();
      expect(exercises.randomNumber).toHaveBeenCalledTimes(1);

      exercises.randomNumber.mockClear();
      exercises.randomNumber.mockReturnValue(10);
      expect(exercises.randomNumber()).toBe(10);
      expect(exercises.randomNumber).toHaveBeenCalled();
      expect(exercises.randomNumber).toHaveBeenCalledTimes(1);
    });
  });

  describe("Exercício 03", () => {
    it("Mockando função para receber 3 parâmetros e retornar sua multiplicação", () => {
      exercises.randomNumber.mockClear();
      exercises.randomNumber.mockImplementation((a, b, c) => a * b * c);

      expect(exercises.randomNumber(1, 2, 3)).toBe(6);
      expect(exercises.randomNumber).toHaveBeenCalled();
      expect(exercises.randomNumber).toHaveBeenCalledTimes(1);
    });
    it("Mockando função que recebe um parâmetro e retorna seu dobro", () => {
      exercises.randomNumber.mockClear();
      exercises.randomNumber.mockImplementation((a) => a * 2);

      exercises.randomNumber();
      expect(exercises.randomNumber).toHaveBeenCalled();
      expect(exercises.randomNumber).toHaveBeenCalledTimes(1);
      expect(exercises.randomNumber(5)).toBe(10);
    });
  });

  describe("Exercício 04", () => {
    it("Mockando função para receber um parâmetro e retornar em caixa baixa", () => {
      const convertSpyOn = jest
        .spyOn(exercises, "convertString")
        .mockImplementation((a) => a.toLowerCase());

      expect(convertSpyOn("TEXT")).toBe("text");
      expect(convertSpyOn).toHaveBeenCalled();
      expect(convertSpyOn).toHaveBeenCalledTimes(1);
    });
    it("Mockando função que recebe um parâmetro e retorna a última letra", () => {
      exercises.firstLetter = jest.fn();
      exercises.firstLetter.mockImplementation((a) => a.charAt(a.length - 1));

      expect(exercises.firstLetter("Text")).toBe("t");
      expect(exercises.firstLetter).toHaveBeenCalled();
      expect(exercises.firstLetter).toHaveBeenCalledTimes(1);
    });
    it("Mockando função que recebe 3 parâmetros e os concatena", () => {
      exercises.concatTexts = jest.fn();
      exercises.concatTexts.mockImplementation((a, b, c) => `${a} ${b} ${c}`);

      expect(exercises.concatTexts("Some", "text", "!")).toBe("Some text !");
      expect(exercises.concatTexts).toHaveBeenCalled();
      expect(exercises.concatTexts).toHaveBeenCalledTimes(1);
    });
  });

  describe("Exercício 05", () => {
    it("Mockando função para receber um parâmetro e retornar em caixa baixa", () => {
      exercises.convertString.mockRestore();

      const first = jest
        .spyOn(exercises, "convertString")
        .mockImplementation((a) => a.toLowerCase());

      expect(first("UPPERCASE")).toBe("uppercase");
      expect(first).toHaveBeenCalled();
      expect(first).toHaveBeenCalledTimes(1);
      expect(first).toHaveBeenCalledWith("UPPERCASE");

      exercises.convertString.mockRestore();

      expect(exercises.convertString("lowercase")).toBe("LOWERCASE");
    });
  });

  describe("Exercício 06", () => {
    exercises.fetchDog = jest.fn();
    afterEach(exercises.fetchDog.mockRestore);

    test("testando requisição caso a promisse resolva", async () => {
      exercises.fetchDog.mockResolvedValue("request sucess");

      expect(exercises.fetchDog()).resolves.toBe("request sucess");
      expect(exercises.fetchDog).toHaveBeenCalled();
      expect(exercises.fetchDog).toHaveBeenCalledTimes(1);
    });
    test("testando requisição caso a promisse seja rejeitada", async () => {
      exercises.fetchDog.mockRejectedValue("request failed");

      expect(exercises.fetchDog()).rejects.toBe("request failed");
      expect(exercises.fetchDog).toHaveBeenCalled();
      expect(exercises.fetchDog).toHaveBeenCalledTimes(1);
    });
  });

  describe("Bônus", () => {
    const API_URL = "https://icanhazdadjoke.com/";

    const fetchJoke = () => {
      return fetch(API_URL, { headers: { Accept: "application/json" } })
        .then((response) => response.json())
        .then((data) => data.joke);
    };

    const result = {
      id: "7h3oGtrOfxc",
      joke: "Whiteboards ... are remarkable.",
      status: 200,
    };

    const fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(result),
      })
    );

    test("espera-se que o fetch retorne uma piada", async () => {
      expect(fetchJoke()).resolves.toBe(
        "Whiteboards ... are remarkable."
      );
    });
  });
});
