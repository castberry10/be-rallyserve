import Router from 'koa-router';
import auth from './auth/index.js'; // auth 모듈이 있는 경로에 맞게 변경

const api = new Router();

api.use('/auth', auth.routes());

export default api;
