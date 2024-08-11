import Router from 'koa-router';
// import { login, register } from './auth.ctrl.js'; // auth.ctrl 모듈 경로에 맞게 변경
import { getPosts } from './volunteer.ctrl.js';

const volunteer = new Router();

volunteer.get('/', getPosts);

export default volunteer;
