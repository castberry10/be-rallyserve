import dotenv from 'dotenv';
dotenv.config();

import Koa from 'koa';
import Router from 'koa-router';
import api from './api/index.js';
import bodyParser from 'koa-bodyparser';
import { sequelize } from './models/index.js';
// import jwtMiddleware from './lib/jwtMiddleware.js';

const { PORT } = process.env;

const app = new Koa();
const router = new Router();

router.use('/api', api.routes()); // api 라우트

// 라우터 적용 전 적용
app.use(bodyParser());
app.use(jwtMiddleware);
sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결됨.');
    }).catch((err) => {
        console.error(err);
    });

// app 인스터스에 라우터 적용 
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;

app.listen(port, () => {
  console.log('Listening to port %d', port);
});
