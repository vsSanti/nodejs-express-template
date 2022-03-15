import { Router } from 'express';

import { adaptRoute } from '@/main/adapters';
import { makeHelloWorldController } from '@/main/factories';

export default (router: Router): void => {
  router.post('/hello-world', adaptRoute({ controller: makeHelloWorldController() }));
};
