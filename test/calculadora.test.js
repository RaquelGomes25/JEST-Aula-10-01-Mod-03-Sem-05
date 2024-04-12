const {soma, subtracao, multiplicacao, divisao} = require('../src/calculadora');

test('Adiciona 1 + 2 igual a 3', () => {
  expect(soma(1, 2)).toBe(3);
  expect(soma("1","2")).toBe("12");
  expect(soma("1", -1)).toBe("1-1");
  expect(soma("1", 1)).toBe("11");
});

test('Testar a Função Subtrair', () => {
    expect(subtracao(2, 1)).toBe(1);
    expect(subtracao(-8,-5)).toBe(-3);
    expect(subtracao(-8, 5)).toBe(-13);
    expect(subtracao(8, -5)).toBe(13);
});

test('Testar a Função Multiplicar', () => {
  expect(multiplicacao(2, 1)).toBe(2);
  expect(multiplicacao(8,5)).toBe(40);
  expect(multiplicacao(6, 2)).toBe(12);
  expect(multiplicacao(4, 4)).toBe(16);
});

test('Testar a Função Divisão', () => {
  expect(divisao(4, 2)).toBe(2);
  expect(divisao(6,0)).toBe(Infinity);
  expect(divisao(80, 4)).toBe(20);
  expect(divisao(9, 3)).toBe(3);
});

 