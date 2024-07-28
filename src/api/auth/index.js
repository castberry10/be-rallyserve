import Router from 'koa-router';
import { register, login, check, logout } from './auth.ctrl.js'; // auth.ctrl 모듈 경로에 맞게 변경

const auth = new Router();

auth.post('/register', register);
auth.post('/login', login);
auth.get('/check', check);
auth.post('/logout', logout);

export default auth;
