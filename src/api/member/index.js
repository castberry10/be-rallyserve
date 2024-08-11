import Router from 'koa-router';
import { getPoint, getStar, getUserId } from './memberService.js';

/**
 * member 라우터
 * @type {module:koa-router|Router}
 */
const member = new Router();

/**
 * 사용자의 user_id를 조회함
 * GET /member/user_id
 * @param ctx
 */
member.get('/user_id', (ctx) => {
  const id = ctx.state.user.id;
  return getUserId(id)
    .then(userId => {
      ctx.status = 200;
      ctx.body = userId;
    })
    .catch(error => {
      ctx.status = error.status || 500;
      ctx.body = { error: error.message };
      console.log(error);
    });
});

/**
 * 사용자의 포인트를 조회함
 * GET /member/point
 * @param ctx
 */
member.get('/point', (ctx) => {
  const id = ctx.state.user.id;
  return getPoint(id)
    .then(point => {
      ctx.body = point;
    })
    .catch(error => {
      ctx.status = error.status || 500;
      ctx.body = { error: error.message };
      console.log(error);
    });
});

/**
 * 사용자의 스타 갯수를 조회함
 * GET /member/star
 * @param ctx
 */
member.get('/star', (ctx) => {
  const id = ctx.state.user.id;
  return getStar(id)
    .then(star => {
      ctx.body = star;
    })
    .catch(error => {
      ctx.status = error.status || 500;
      ctx.body = { error: error.message };
      console.log(error);
    });
});

/**
 * 사용자의 모든 정보를 조회함
 * GET /member/all
 * @param ctx
 */
member.get('/all', (ctx) => {
  const id = ctx.state.user.id;
  return Promise.all([getUserId(id), getPoint(id), getStar(id)])
    .then(([userId, point, star]) => {
      ctx.body = {
        'id': userId,
        'point': point,
        'star': star,
        'ranking': -1, // TODO: Ranking 정보를 추가해야함
      };
    })
    .catch(error => {
      ctx.status = error.status || 500;
      ctx.body = { error: error.message };
      console.log(error);
    });
});

export default member;
