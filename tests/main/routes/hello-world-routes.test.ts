import faker from '@faker-js/faker';
import { Express } from 'express';
import request from 'supertest';

import { setupApp } from '@/main/config/app';

describe('HelloWorld Routes', () => {
  let app: Express;

  beforeAll(async () => {
    app = await setupApp();
  });

  describe('POST /hello-world', () => {
    it('should return 400 if body validation fails', async () => {
      await request(app).post('/hello-world').send({}).expect(400);
    });

    it('should return 200 with the same message as sent', async () => {
      const message = faker.random.words();
      await request(app)
        .post('/hello-world')
        .send({
          message,
        })
        .expect(200)
        .expect({ message });
    });
  });
});
