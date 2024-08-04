import Member from '../../models/member.js';
import MemberPoint from '../../models/memberPoint.js';
import MemberStar from '../../models/memberStar.js';

/**
 * 유저의 아이디를 가져옴
 * @param ctx
 * @returns {Promise<Member | null>}
 */
export const getUserId = (ctx) => {
  const id = ctx.state.user.id;

  return Member.findByPk(id)
    .then(userId => {
      if (!userId) {
        ctx.status = 404;
        ctx.body = { error: 'User not found' };
        return Promise.reject(new Error('User not found'));
      }
      return userId.userid;
    })
    .catch(error => {
      ctx.status = 500;
      ctx.body = { error: 'Failed to get user information' };
      return Promise.reject(error);
    });
};

/**
 * 유저의 포인트를 가져옴
 * @param ctx
 * @returns {Promise<*>}
 */
export const getPoint = (ctx) => {
  const id = ctx.state.user.id;

  return MemberPoint.findOne({ where: { memberId: id } })
    .then(point => {
      if (!point) {
        ctx.status = 404;
        ctx.body = { error: 'Point not found' };
        return Promise.reject(new Error('Point not found'));
      }
      return point;
    })
    .catch(error => {
      ctx.status = 500;
      ctx.body = { error: 'Failed to get point information' };
      return Promise.reject(error);
    });
};

/**
 * 유저의 스타 갯수를 가져옴
 * @param ctx
 * @returns {Promise<*>}
 */
export const getStar = (ctx) => {
  const id = ctx.state.user.id;

  return MemberStar.findOne({ where: { memberId: id } })
    .then(star => {
      if (!star) {
        ctx.status = 404;
        ctx.body = { error: 'Star not found' };
        return Promise.reject(new Error('Star not found'));
      }
      return star;
    })
    .catch(error => {
      ctx.status = 500;
      ctx.body = { error: 'Failed to get star information' };
      return Promise.reject(error);
    });
};
