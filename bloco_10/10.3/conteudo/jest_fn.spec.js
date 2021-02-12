const service = require("./jest_fn");

describe("jest.fn()", () => {
  test("Método tradicional - #randomRgbColor", () => {
    // // Método Tradicional - testando se a função foi chamada
    // service.randomRgbColor();
    // expect(service.randomRgbColor).toHaveBeenCalled();
  });

  test("Mockando a #randomRgbColor", () => {
    // testando se a função foi chamada. Não simulamos nenhum comportamento aqui, pois, para esse teste, isso não importa! Queremos saber se ela foi chamada e ponto final.
    service.randomRgbColor = jest.fn();

    service.randomRgbColor();
    expect(service.randomRgbColor).toHaveBeenCalled();
  });

  test("Mockando com valor a #randomRgbColor", () => {
    // testando se a função foi chamada e qual seu retorno
    service.randomRgbColor = jest.fn().mockReturnValue("rgb(255, 255, 255)");

    service.randomRgbColor();
    expect(service.randomRgbColor).toHaveBeenCalled();
    expect(service.randomRgbColor()).toBe("rgb(255, 255, 255)");
  });

  test("Mockando vários valores a #randomRgbColor", () => {
    // testando quantas vezes a função foi chamada e qual seu retorno
    service.randomRgbColor = jest
      .fn()
      .mockReturnValue("default value")
      .mockReturnValueOnce("first call")
      .mockReturnValueOnce("second call");

    expect(service.randomRgbColor).toHaveBeenCalledTimes(0);

    expect(service.randomRgbColor()).toBe("first call");
    expect(service.randomRgbColor).toHaveBeenCalledTimes(1);

    expect(service.randomRgbColor()).toBe("second call");
    expect(service.randomRgbColor).toHaveBeenCalledTimes(2);

    expect(service.randomRgbColor()).toBe("default value");
    expect(service.randomRgbColor).toHaveBeenCalledTimes(3);
  });
});
