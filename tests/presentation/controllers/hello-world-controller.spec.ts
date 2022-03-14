import faker from '@faker-js/faker';

import { HelloWorldController } from '@/presentation/controllers';
import { ok } from '@/presentation/helpers';

const mockRequest = (): HelloWorldController.Request => ({
  body: {
    message: faker.random.words(5),
  },
});

describe('HelloWorld Controller', () => {
  let sut: HelloWorldController;
  let request: HelloWorldController.Request;

  beforeEach(() => {
    sut = new HelloWorldController();
    request = mockRequest();
  });

  it('should return 200 with correct body on success', async () => {
    const response = await sut.handle(request);
    expect(response).toEqual(ok(request.body));
  });
});
