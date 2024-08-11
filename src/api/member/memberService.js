import Member from '../../models/member.js';
import MemberPoint from '../../models/memberPoint.js';
import MemberStar from '../../models/memberStar.js';
import pointDTO from "../../dto/pointDTO.js";
import HttpError from "../../exception/httpError.js";
import starDTO from "../../dto/starDTO.js";

/**
 * 유저의 아이디를 가져옴
 * @param ctx
 * @returns {Promise<Member | null>}
 */
export const getUserId = (id) => {
    return Member.findByPk(id)
        .then(userId => {
            if (!userId) {
                return Promise.reject(new HttpError(404, 'User not found'));
            }
            console.log('userId.userid: ', userId.userid)
            return userId.userid;
        })
        .catch(error => {
            console.log('error: ', error)
            return Promise.reject(new HttpError('Failed to get user information', 500));
        });
};

/**
 * 유저의 포인트를 가져옴
 * @param ctx
 * @returns {Promise<*>}
 */
export const getPoint = (id) => {
    return MemberPoint.findAll({where: {memberId: id}})
        .then(points => {

            if (!points || points.length === 0) {
                return Promise.reject(new HttpError(404, 'User point not found'));
            }

            const pointDTOs = points.map((p) => pointDTO(p));
            const pointSum = pointDTOs.reduce((acc, cur) => {
                return acc + cur.points;
            }, 0);

            return {
                points: pointDTOs,
                sum: pointSum
            };
        })
        .catch(error => {
            console.log('error: ', error)
            return Promise.reject(new HttpError('Failed to get point information', 500));
        });
};

/**
 * 유저의 스타 갯수를 가져옴
 * @param ctx
 * @returns {Promise<*>}
 */
export const getStar = (id) => {

    return MemberStar.findAll({where: {memberId: id}})
        .then(star => {
            if (!star) {
                return Promise.reject(new HttpError(404, 'User star not found'));
            }

            const starDTOs = star.map((s) => starDTO(s));
            const starSum = starDTOs.reduce((acc, cur) => {
                return acc + cur.star;
            }, 0);
            return {
                sum: starSum,
                star: starDTOs
            };
        })
        .catch(error => {
            console.log('error: ', error)
            return Promise.reject(new HttpError('Failed to get star information', 500));
        });
};
