import Member from '../../models/member.js';
import MemberPoint from '../../models/memberPoint.js';
import MemberStar from '../../models/memberStar.js';
import pointDTO from "../../dto/pointDTO.js";
import HttpError from "../../exception/httpError.js";
import starDTO from "../../dto/starDTO.js";

/**
 * 공통 에러 핸들링 함수
 * @param {Error} error
 * @param {string} defaultMessage
 * @param {number} [statusCode=500]
 * @returns {Promise<never>}
 */
const handleError = (error, defaultMessage, statusCode = 500) => {
    console.error('error: ', error);
    return Promise.reject(new HttpError(statusCode, `${defaultMessage}: ${error.message}`));
};

/**
 * 유저의 아이디를 가져옴
 * @param {number} id
 * @returns {Promise<string>}
 */
export const getUserId = async (id) => {
    try {
        const user = await Member.findByPk(id);
        if (!user) {
            throw new HttpError(404, 'User not found');
        }
        return user.userid;
    } catch (error) {
        return handleError(error, 'Failed to get user information');
    }
};

/**
 * 유저의 포인트를 가져옴
 * @param {number} id
 * @returns {Promise<{sum: number, points: Array}>}
 */
export const getPoint = async (id) => {
    try {
        const points = await MemberPoint.findAll({where: {memberId: id}});
        if (!points || points.length === 0) {
            throw new HttpError(404, 'User point not found');
        }

        let pointSum = 0;
        const pointDTOs = points.map(point => {
            const dto = pointDTO(point);
            pointSum += dto.points;
            return dto;
        });

        return {
            sum: pointSum,
            points: pointDTOs
        };

    } catch (error) {
        return handleError(error, 'Failed to get point information');
    }
};

/**
 * 유저의 스타 갯수를 가져옴
 * @param {number} id
 * @returns {Promise<{sum: number, star: Array}>}
 */
export const getStar = async (id) => {
    try {
        const stars = await MemberStar.findAll({where: {memberId: id}});
        if (!stars || stars.length === 0) {
            throw new HttpError(404, 'User star not found');
        }

        let starSum = 0;
        const starDTOs = stars.map(star => {
            const dto = starDTO(star);
            starSum += dto.star;
            return dto;
        });

        return {
            sum: starSum,
            star: starDTOs
        };

    } catch (error) {
        return handleError(error, 'Failed to get star information');
    }
};
