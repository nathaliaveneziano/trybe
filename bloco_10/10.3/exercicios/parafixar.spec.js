const math = require('./parafixar');
jest.mock('./parafixar');

describe('Exercícios Para Fixar', () => {
  it('Faça o mock da funcão subtrair e teste sua chamada.', () => {
    math.subtrair = jest.fn();

    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
    expect(math.subtrair).toHaveBeenCalledTimes(1);
  });

  it('Faça o mock da função multiplicar e implemente como retorno padrão o valor "10". Teste a chamada e o retorno.', () => {
    math.multiplicar = jest.fn().mockReturnValue(10);

    math.multiplicar(2, 5);
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar).toHaveBeenCalledTimes(1);
    expect(math.multiplicar).toHaveBeenCalledWith(2, 5);
    expect(math.multiplicar(2, 5)).toBe(10);
  });

  it('Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.', () => {
    math.somar.mockImplementation((a, b) => a + b);

    math.somar(2, 5);
    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledTimes(1);
    expect(math.somar).toHaveBeenCalledWith(2, 5);
    expect(math.somar(2, 5)).toBe(7);
  });

  it('Faça o mock da função dividir e implemente um retorno padrão com o valor "15". Implemente também os seguintes valores para a primeira e segunda chamadas: "2" e "5". Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.', () => {
    math.dividir.mockReturnValue(15);
    math.dividir.mockReturnValueOnce(2);
    math.dividir.mockReturnValueOnce(5);

    expect(math.dividir(4, 2)).toBe(2);
    expect(math.dividir).toHaveBeenCalled();
    expect(math.dividir).toHaveBeenCalledTimes(1);
    expect(math.dividir).toHaveBeenCalledWith(4, 2);

    expect(math.dividir(15, 3)).toBe(5);
    expect(math.dividir).toHaveBeenCalled();
    expect(math.dividir).toHaveBeenCalledTimes(2);
    expect(math.dividir).toHaveBeenCalledWith(15, 3);

    expect(math.dividir(45, 3)).toBe(15);
    expect(math.dividir).toHaveBeenCalled();
    expect(math.dividir).toHaveBeenCalledTimes(3);
    expect(math.dividir).toHaveBeenCalledWith(45, 3);
  });

  it('Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor "20". Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.', () => {
    const subtrairMock = jest.spyOn(math, 'subtrair');

    subtrairMock.mockResolvedValue(20);
    expect(subtrairMock).toHaveBeenCalled();
    expect(subtrairMock).toHaveBeenCalledTimes(1);

    subtrairMock.mockClear();
    return expect(subtrairMock(30, 10)).resolves.toBe(20);
  });
});