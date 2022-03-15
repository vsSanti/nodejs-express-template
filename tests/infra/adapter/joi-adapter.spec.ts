import Joi, { Schema } from 'joi';

import { JoiAdapter } from '@/infra/adapter';

describe('Joi Adapter', () => {
  let schema: Schema;
  let sut: JoiAdapter;

  beforeAll(() => {
    schema = Joi.object({ name: Joi.string().required() });
    sut = new JoiAdapter({ schema });
  });

  describe('validate()', () => {
    it('should reject if input is not valid', async () => {
      const promise = sut.validate({});
      await expect(promise).rejects.toThrow();
    });
  });
});
