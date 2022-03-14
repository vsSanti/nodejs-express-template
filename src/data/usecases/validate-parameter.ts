import { Validation } from '@/domain/usecases';

export class ValidateParameters implements Validation {
  async validate(input: any): Promise<Error | undefined> {
    return undefined;
  }
}
