import express from 'express';
import * as Sentry from '@sentry/node';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';

import api from './api';

const app = express();

Sentry.init({ dsn: process.env.SENTRY_DSN });

app.use(Sentry.Handlers.requestHandler());

// Setup Request logging
const logFormat = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';

app.use(
  morgan(logFormat, {
    skip(_req, res) {
      if (process.env.NODE_ENV === 'test') {
        return true;
      }

      return res.statusCode < 400;
    },
    stream: process.stderr
  })
);

app.use(
  morgan(logFormat, {
    skip(_req, res) {
      if (process.env.NODE_ENV === 'test') {
        return true;
      }

      return res.statusCode >= 400;
    },
    stream: process.stdout
  })
);

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', api);

app.use(Sentry.Handlers.errorHandler());

export default app;
