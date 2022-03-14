import { Validation } from '@/domain/usecases';
import { badRequest, ok } from '@/presentation/helpers';
import { Controller, HttpResponse } from '@/presentation/protocols';

export class HelloWorldController implements Controller {
  private readonly validation: Validation;

  constructor(params: HelloWorldController.Params) {
    Object.assign(this, params);
  }

  async handle({ body }: HelloWorldController.Request): Promise<HttpResponse> {
    const error = await this.validation.validate(body);
    if (error) return badRequest(error);

    return ok({ message: body.message });
  }
}

export namespace HelloWorldController {
  export type Params = {
    validation: Validation;
  };

  export type Request = {
    body: {
      message: string;
    };
  };
}
