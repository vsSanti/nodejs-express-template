import faker from '@faker-js/faker';

import { ValidateParameters } from '@/data/usecases';

import { ValidateParametersAdapterSpy } from '@/tests/data/mocks';

const mockRequest = (): any => ({
  name: faker.name.firstName(),
});

describe('ValidateParameters usecase', () => {
  let validateParametersAdapterSpy: ValidateParametersAdapterSpy;
  let sut: ValidateParameters;
  let request: any;

  beforeEach(() => {
    validateParametersAdapterSpy = new ValidateParametersAdapterSpy();
    sut = new ValidateParameters({ validateParametersAdapter: validateParametersAdapterSpy });
    request = mockRequest();
  });

  it('should call ValidateParametersAdapter with correct values', async () => {
    await sut.validate(request);
    expect(validateParametersAdapterSpy.input).toEqual(request);
  });

  it('should return undefined if there are no errors', async () => {
    const response = await sut.validate(request);
    expect(response).toBeUndefined();
  });
});
