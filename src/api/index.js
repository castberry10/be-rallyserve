import Router from 'koa-router';
import auth from './auth/index.js'; // auth 모듈이 있는 경로에 맞게 변경
import member from './member/index.js';
import authmiddleware from '../lib/authmiddleware.js';
import matchmaking from './matchmaking/index.js';
import volunteer from './volunteer/index.js';
const api = new Router();

api.use('/auth', auth.routes());

api.use('/member', authmiddleware, member.routes()); // member 라우트를 사용할 때 authmiddleware 미들웨어 적용

api.use('/matchmaking', authmiddleware, matchmaking.routes()); // member 라우트를 사용할 때 authmiddleware 미들웨어 적용

api.use('/volunteer', volunteer.routes()); // member 라우트를 사용할 때 authmiddleware 미들웨어 적용
api.get('/', ctx => {
  ctx.body = 'hello 1365 api world';
});

export default api;
