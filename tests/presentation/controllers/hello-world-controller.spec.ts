import faker from '@faker-js/faker';

import { HelloWorldController } from '@/presentation/controllers';
import { ok } from '@/presentation/helpers';

import { ValidationSpy } from '@/tests/domain/mocks';

const mockRequest = (): HelloWorldController.Request => ({
  body: {
    message: faker.random.words(5),
  },
});

describe('HelloWorld Controller', () => {
  let validationSpy: ValidationSpy;
  let sut: HelloWorldController;
  let request: HelloWorldController.Request;

  beforeEach(() => {
    validationSpy = new ValidationSpy();
    sut = new HelloWorldController({ validation: validationSpy });
    request = mockRequest();
  });

  it('should call Validation with correct params', async () => {
    await sut.handle(request);
    expect(validationSpy.input).toEqual(request.body);
  });

  it('should return 200 with correct body on success', async () => {
    const response = await sut.handle(request);
    expect(response).toEqual(ok(request.body));
  });
});
