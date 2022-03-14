import { HttpRequest, HttpResponse } from '@/presentation/protocols';

export interface Controller {
  handle: (params: HttpRequest) => Promise<HttpResponse>;
}
