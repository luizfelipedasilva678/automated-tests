import { Individual, Enterprise } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): Individual => {
  return new Individual(firstName, lastName, cpf);
};

describe('IndividualCustomer', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have firstname, lastname, cpf', () => {
    const sut = createIndividualCustomer('Luiz', 'Otávio', '111.111');
    expect(sut).toHaveProperty('firstName', 'Luiz');
    expect(sut).toHaveProperty('lastName', 'Otávio');
  });

  it('should have methods to get name and idn', () => {
    const sut = createIndividualCustomer('Luiz', 'Otávio', '111.111');
    expect(sut.getName()).toBe('Luiz Otávio');
  });
});
