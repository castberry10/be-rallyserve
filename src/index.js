import dotenv from 'dotenv';
dotenv.config();

import Koa from 'koa';
import Router from 'koa-router';
import api from './api/index.js';
import bodyParser from 'koa-bodyparser';
import db from './models/index.js';
import cors from '@koa/cors';
import https from 'https';
import fs from 'fs';

const { PORT, NODE_ENV } = process.env;

const app = new Koa();
app.keys = [process.env.COOKIE_SECRET];
const router = new Router();
app.use(cors());
router.use('/api', api.routes()); // api 라우트

// 라우터 적용 전 적용
app.use(bodyParser());
db.sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결됨.');
    }).catch((err) => {
        console.error(err);
    });

// app 인스터스에 라우터 적용 
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 1365;

if (NODE_ENV === 'production') {
  // 프로덕션 환경
  const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/castberry.kr/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/castberry.kr/fullchain.pem')
  };
  
  https.createServer(options, app.callback()).listen(port, () => {
    console.log('Listening to port %d with HTTPS', port);
  });
} else {
  // 개발 환경
  app.listen(port, () => {
    console.log('Listening to port %d', port);
  });
}
