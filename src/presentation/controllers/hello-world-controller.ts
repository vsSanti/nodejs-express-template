import { ok } from '@/presentation/helpers';
import { Controller, HttpResponse } from '@/presentation/protocols';

export class HelloWorldController implements Controller {
  async handle({ body }: HelloWorldController.Request): Promise<HttpResponse> {
    return ok({ message: body.message });
  }
}

export namespace HelloWorldController {
  export type Request = {
    body: {
      message: string;
    };
  };
}
