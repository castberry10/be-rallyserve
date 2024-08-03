import Router from 'koa-router';
import { getUserId, getPoint, getStar } from './memberService.js';

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
  getUserId(ctx)
    .then(userId => {
      ctx.body = userId;
    })
    .catch(error => {
      ctx.status = ctx.status || 500;
      ctx.body = { error: error.message };
    });
});

/**
 * 사용자의 포인트를 조회함
 * GET /member/point
 * @param ctx
 */
member.get('/point', (ctx) => {
  getPoint(ctx)
    .then(point => {
      ctx.body = point;
    })
    .catch(error => {
      ctx.status = ctx.status || 500;
      ctx.body = { error: error.message };
    });
});

/**
 * 사용자의 스타 갯수를 조회함
 * GET /member/star
 * @param ctx
 */
member.get('/star', (ctx) => {
  getStar(ctx)
    .then(star => {
      ctx.body = star;
    })
    .catch(error => {
      ctx.status = ctx.status || 500;
      ctx.body = { error: error.message };
    });
});

/**
 * 사용자의 모든 정보를 조회함
 * GET /member/all
 * @param ctx
 */
member.get('/all', (ctx) => {
  Promise.all([getUserId(ctx), getPoint(ctx), getStar(ctx)])
    .then(([userId, point, star]) => {
      ctx.body = {
        "id": userId,
        "point": point,
        "star": star,
        "ranking": -1, // TODO: Ranking 정보를 추가해야함
      };
    })
    .catch(error => {
      ctx.status = ctx.status || 500;
      ctx.body = { error: error.message };
    });
});

export default member;
