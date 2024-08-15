import Router from "koa-router";
import {
    getOverallRankingByPoint,
    getOverallRankingByStar,
    getUserRankingByPoint,
    getUserRankingByStar
} from "./rankingService.js";

/**
 * ranking 라우터
 * @type {module:koa-router|Router}
 */
const ranking = new Router();

/**
 * 전체 랭킹을 조회함
 * GET /ranking/user_id
 * @param ctx
 */
ranking.get('/point/all', (ctx) => {
    return getOverallRankingByPoint()
        .then(rank => {
            ctx.status = 200;
            ctx.body = rank;
        })
        .catch(error => {
            ctx.status = error.status || 500;
            ctx.body = { error: error.message };
            console.log(error);
        });
});

/**
 * 특정 사용자의 랭킹을 조회함
 * @param ctx
 */
ranking.get('/point/:memberId', (ctx) => {
    const memberId = ctx.params.memberId;
    return getUserRankingByPoint(memberId)
        .then(rank => {
            ctx.status = 200;
            ctx.body = rank;
        })
        .catch(error => {
            ctx.status = error.status || 500;
            ctx.body = { error: error.message };
            console.log(error);
        });
})

/**
 * 전체 랭킹을 조회함
 * GET /ranking/user_id
 * @param ctx
 */
ranking.get('/star/all', (ctx) => {
    return getOverallRankingByStar()
        .then(rank => {
            ctx.status = 200;
            ctx.body = rank;
        })
        .catch(error => {
            ctx.status = error.status || 500;
            ctx.body = { error: error.message };
            console.log(error);
        });
});

/**
 * 특정 사용자의 랭킹을 조회함
 * @param ctx
 */
ranking.get('/star/:memberId', (ctx) => {
    const memberId = ctx.params.memberId;
    return getUserRankingByStar(memberId)
        .then(rank => {
            ctx.status = 200;
            ctx.body = rank;
        })
        .catch(error => {
            ctx.status = error.status || 500;
            ctx.body = { error: error.message };
            console.log(error);
        });
})

export default ranking