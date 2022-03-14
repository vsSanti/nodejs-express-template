import { ValidateParameters } from '@/data/usecases/validate-parameter';

describe('ValidateParameters usecase', () => {
  let sut: ValidateParameters;

  beforeEach(() => {
    sut = new ValidateParameters();
  });

  it('should return undefined if there are no errors', async () => {
    const response = await sut.validate({});
    expect(response).toBeUndefined();
  });
});
