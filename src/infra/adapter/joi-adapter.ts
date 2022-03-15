import { Schema } from 'joi';

import { ValidateParametersAdapter } from '@/data/protocols';

export class JoiAdapter implements ValidateParametersAdapter {
  private readonly schema: Schema;

  constructor(params: JoiAdapter.Params) {
    Object.assign(this, params);
  }

  async validate(input: any): Promise<void> {
    await this.schema.validateAsync(input);
  }
}

declare namespace JoiAdapter {
  export type Params = {
    schema: Schema;
  };
}
