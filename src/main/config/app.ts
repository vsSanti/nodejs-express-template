import express, { Express } from 'express';

import setupMiddlewares from '@/main/config/middlewares';

export const setupApp = async (): Promise<Express> => {
  const app = express();
  setupMiddlewares(app);
  return app;
};
