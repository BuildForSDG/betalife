import express from 'express';
import bodyParser from 'body-parser';
import * as Sentry from '@sentry/node';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';

import api from './api';
import { sequelize } from './database/config';

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.use(bodyParser.json());

Sentry.init({ dsn: process.env.SENTRY_DSN });

if (process.env.NODE_ENV === 'development') {
  sequelize
    .authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(error => {
      console.error(error.message);
      Sentry.captureException(error);
      process.exit(1);
    });
}

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
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);

app.use('*', (req, res) => res.status(404).send('route does not exist'));

app.use(Sentry.Handlers.errorHandler());

export default app;
