import Router from 'koa-router';
import auth from './auth/index.js'; // auth 모듈이 있는 경로에 맞게 변경
import member from './member/index.js';
import authmiddleware from '../lib/authmiddleware.js';

const api = new Router();

api.use('/auth', auth.routes());

api.use('/member', authmiddleware, member.routes()); // member 라우트를 사용할 때 authmiddleware 미들웨어 적용

api.get('/', ctx => {
  ctx.body = 'hello 1365 api world';
});

export default api;
