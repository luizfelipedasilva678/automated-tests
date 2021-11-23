describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 11;

    expect(number).toEqual(11);
    expect(number).toBe(11);
    expect(number).not.toBe(10);
    expect(number).toBeGreaterThan(9);
    expect(number).toBeCloseTo(11);
    expect(number).not.toBeNull();
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Luiz', age: 40 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
    expect(person.name).toBe('Luiz');
  });
});
