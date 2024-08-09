import Router from 'koa-router';
// import { login, register } from './auth.ctrl.js'; // auth.ctrl 모듈 경로에 맞게 변경
import { index } from './matchmaking.ctrl.js';

const matchmaking = new Router();

matchmaking.post('/', index);

export default matchmaking;
