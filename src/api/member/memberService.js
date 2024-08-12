import Member from '../../models/member.js';
import MemberPoint from '../../models/memberPoint.js';
import MemberStar from '../../models/memberStar.js';
import pointDTO from "../../dto/pointDTO.js";
import HttpError from "../../exception/httpError.js";
import starDTO from "../../dto/starDTO.js";
import { ValidationError } from 'sequelize';

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
 * 주어진 ID의 사용자가 존재하는지 확인하는 함수
 * @param {number} id
 * @returns {Promise<boolean>}
 */
export const isMemberExist = async (id) => {
    try {
        const user = await Member.findByPk(id);
        return !!user;
    } catch (error) {
        return handleError(error, 'Failed to check user existence');
    }
}

/**
 * 주어진 ID의 사용자를 가져오는 함수
 * @param {number} id
 * @returns {Promise<Member>}
 * @throws {HttpError} 사용자가 존재하지 않을 때
 */
const getMemberById = async (id) => {
    const user = await Member.findByPk(id);
    if (!user) {
        throw new HttpError(404, 'User not found');
    }
    return user;
};

/**
 * 유저의 아이디를 가져오는 함수
 * @param {number} id
 * @returns {Promise<string>}
 */
export const getUserId = async (id) => {
    try {
        const user = await getMemberById(id);
        return user.userid;
    } catch (error) {
        return handleError(error, 'Failed to get user information');
    }
};

/**
 * 유저의 포인트를 가져오는 함수
 * @param {number} id
 * @returns {Promise<{sum: number, points: Array}>}
 */
export const getPoint = async (id) => {
    try {
        const points = await MemberPoint.findAll({ where: { memberId: id } });
        if (points.length === 0) {
            throw new HttpError(404, 'User not found');
        }

        const pointDTOs = points.map(point => pointDTO(point));
        const pointSum = pointDTOs.reduce((sum, dto) => sum + dto.point, 0);

        return {
            sum: pointSum,
            points: pointDTOs
        };
    } catch (error) {
        return handleError(error, 'Failed to get point information');
    }
};

/**
 * 유저의 스타 갯수를 가져오는 함수
 * @param {number} id
 * @returns {Promise<{sum: number, star: Array}>}
 */
export const getStar = async (id) => {
    try {
        const stars = await MemberStar.findAll({ where: { memberId: id } });
        if (stars.length === 0) {
            throw new HttpError(404, 'User not found');
        }

        const starDTOs = stars.map(star => starDTO(star));
        const starSum = starDTOs.reduce((sum, dto) => sum + dto.star, 0);

        return {
            sum: starSum,
            star: starDTOs
        };
    } catch (error) {
        return handleError(error, 'Failed to get star information');
    }
};

/**
 * 유저에게 포인트를 추가하는 함수
 * @param {number} id
 * @param {object} point
 * @returns {Promise<object>}
 */
export const addPoint = async (id, point) => {
    try {
        await getMemberById(id);  // 사용자 존재 여부 확인

        const pointEntity = await MemberPoint.create({ memberId: id, point: point.point, message: point.message });
        return pointDTO(pointEntity);
    } catch (error) {
        if (error instanceof ValidationError) {
            return Promise.reject(new HttpError(400, error.message));
        } else {
            return handleError(error, 'Failed to add point');
        }
    }
}

/**
 * 유저에게 스타를 추가하는 함수
 * @param {number} id
 * @param {object} star
 * @returns {Promise<object>}
 */
export const addStar = async (id, star) => {
    try {
        await getMemberById(id);  // 사용자 존재 여부 확인

        const starEntity = await MemberStar.create({ memberId: id, star: star.star, message: star.message });
        return starDTO(starEntity);
    } catch (error) {
        if (error instanceof ValidationError) {
            return Promise.reject(new HttpError(400, error.message));
        } else {
            return handleError(error, 'Failed to add star');
        }
    }
}
