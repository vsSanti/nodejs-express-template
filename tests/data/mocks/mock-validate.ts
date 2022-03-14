import { ValidateParametersAdapter } from '@/data/protocols';

export class ValidateParametersAdapterSpy implements ValidateParametersAdapter {
  input: any;

  async validate(input: any): Promise<void> {
    this.input = input;
  }
}
