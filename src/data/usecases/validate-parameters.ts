import { ValidateParametersAdapter } from '@/data/protocols';
import { Validation } from '@/domain/usecases';

export class ValidateParameters implements Validation {
  private readonly validateParametersAdapter: ValidateParametersAdapter;

  constructor(params: ValidateParameters.Params) {
    Object.assign(this, params);
  }

  async validate(input: any): Promise<Error | undefined> {
    this.validateParametersAdapter.validate(input);
    return undefined;
  }
}

declare namespace ValidateParameters {
  export type Params = {
    validateParametersAdapter: ValidateParametersAdapter;
  };
}
