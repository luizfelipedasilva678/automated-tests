describe('Testando alguma coisa', () => {
  it('Descrição do test (IT) ', () => {
    const number = 1;
    expect(number).toBe(1);
  });
});

describe('Testando alguma coisa', () => {
  test('Descrição do teste (Teste)', () => {
    const nome = 'Luiz';
    expect(nome).toBe('Luiz');
  });
});
