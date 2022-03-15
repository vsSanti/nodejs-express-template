import Joi from 'joi';

import { HelloWorldController } from '@/presentation/controllers';
import { makeValidateParameters } from '@/main/factories';

export const makeHelloWorldController = (): HelloWorldController => {
  const schema = Joi.object({
    message: Joi.string().required(),
  });

  return new HelloWorldController({ validation: makeValidateParameters(schema) });
};
