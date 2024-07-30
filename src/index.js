import dotenv from 'dotenv';
dotenv.config();

// import cookie from 'koa-cookie';
import Koa from 'koa';
import Router from 'koa-router';
import api from './api/index.js';
import bodyParser from 'koa-bodyparser';
import db from './models/index.js';
// const cors = require('@koa/cors');
import cors from '@koa/cors';
// import jwtMiddleware from './lib/jwtMiddleware.js';

const { PORT } = process.env;

const app = new Koa();
app.keys = [process.env.COOKIE_SECRET];
const router = new Router();
app.use(cors());
router.use('/api', api.routes()); // api 라우트

// 라우터 적용 전 적용
app.use(bodyParser());
// app.use(jwtMiddleware);
// app.use(cookie());
db.sequelize.sync({ force: false })
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
