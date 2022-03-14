import { ValidateParametersAdapter } from '@/data/protocols';
import { Validation } from '@/domain/usecases';
import { ObjectValidationError } from '@/presentation/errors';

export class ValidateParameters implements Validation {
  private readonly validateParametersAdapter: ValidateParametersAdapter;

  constructor(params: ValidateParameters.Params) {
    Object.assign(this, params);
  }

  async validate(input: any): Promise<Error | undefined> {
    try {
      await this.validateParametersAdapter.validate(input);
      return undefined;
    } catch (error) {
      return new ObjectValidationError();
    }
  }
}

declare namespace ValidateParameters {
  export type Params = {
    validateParametersAdapter: ValidateParametersAdapter;
  };
}
