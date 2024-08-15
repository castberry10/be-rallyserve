import Router from 'koa-router';
import {
  addPoint,
  addStar,
  getPoint,
  getStar,
  getUserId,
  updatePoint,
  updateStar,
  deletePoint,
  deleteStar, pointDTOvalid, starDTOvalid,
} from './memberService.js';
import {getUserRankingByPoint} from "../ranking/rankingService.js";

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
  return Promise.all([getUserId(id), getPoint(id), getStar(id), getUserRankingByPoint(id)])
    .then(([userId, point, star, rank]) => {
      ctx.body = {
        'id': userId,
        'point': point.sum,
        'star': star.sum,
        'ranking': rank.rank,
      };
      console.log(rank)
    })
    .catch(error => {
      ctx.status = error.status || 500;
      ctx.body = { error: error.message };
      console.log(error);
    });
});

/**
 * 사용자의 포인트를 추가함
 * POST /member/point
 * @param ctx
 */
member.post('/point', (ctx) => {
  const id = ctx.state.user.id;
  const point = ctx.request.body;
  return addPoint(id, point)
    .then((body) => {
      ctx.status = 200;
      ctx.body = body;
    })
    .catch(error => {
      ctx.status = error.status || 500;
      ctx.body = { error: error.message };
      console.log(error);
    });
});

/**
 * 사용자의 포인트를 수정함
 * PUT /member/point/:pointId
 * @param ctx
 */
member.put('/point/:pointId', (ctx) => {
  const id = ctx.state.user.id;
  const pointId = ctx.params.pointId;
  const point = ctx.request.body;
  return updatePoint(id, pointId, point)
    .then((body) => {
      ctx.status = 200;
      ctx.body = body;
    })
    .catch(error => {
      ctx.status = error.status || 500;
      ctx.body = { error: error.message };
      console.log(error);
    });
});

/**
 * 사용자의 포인트를 삭제함
 * DELETE /member/point/:pointId
 * @param ctx
 */
member.delete('/point/:pointId', (ctx) => {
  const id = ctx.state.user.id;
  const pointId = ctx.params.pointId;
  return deletePoint(id, pointId)
    .then(() => {
      ctx.status = 204;  // No Content
    })
    .catch(error => {
      ctx.status = error.status || 500;
      ctx.body = { error: error.message };
      console.log(error);
    });
});

/**
 * 사용자의 스타를 추가함
 * POST /member/star
 * @param ctx
 */
member.post('/star', (ctx) => {
  const id = ctx.state.user.id;
  const star = ctx.request.body;
  return addStar(id, star)
    .then((body) => {
      ctx.status = 200;
      ctx.body = body;
    })
    .catch(error => {
      ctx.status = error.status || 500;
      ctx.body = { error: error.message };
      console.log(error);
    });
});

/**
 * 사용자의 스타를 수정함
 * PUT /member/star/:starId
 * @param ctx
 */
member.put('/star/:starId', (ctx) => {
  const id = ctx.state.user.id;
  const starId = ctx.params.starId;
  const star = ctx.request.body;
  return updateStar(id, starId, star)
    .then((body) => {
      ctx.status = 200;
      ctx.body = body;
    })
    .catch(error => {
      ctx.status = error.status || 500;
      ctx.body = { error: error.message };
      console.log(error);
    });
});

/**
 * 사용자의 스타를 삭제함
 * DELETE /member/star/:starId
 * @param ctx
 */
member.delete('/star/:starId', (ctx) => {
  const id = ctx.state.user.id;
  const starId = ctx.params.starId;
  return deleteStar(id, starId)
    .then(() => {
      ctx.status = 204;  // No Content
    })
    .catch(error => {
      ctx.status = error.status || 500;
      ctx.body = { error: error.message };
      console.log(error);
    });
});

export default member;
