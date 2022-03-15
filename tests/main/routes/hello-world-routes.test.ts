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
  });
});
