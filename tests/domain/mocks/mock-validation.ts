import { Validation } from '@/domain/usecases';

export class ValidationSpy implements Validation {
  error: Error | undefined;
  input: any;

  async validate(input: any): Promise<Error | undefined> {
    this.input = input;
    return this.error;
  }
}
