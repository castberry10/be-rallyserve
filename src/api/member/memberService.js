import Member from '../../models/member.js';
import MemberPoint from '../../models/memberPoint.js';
import MemberStar from '../../models/memberStar.js';
import pointDTO from '../../dto/pointDTO.js';
import HttpError from '../../exception/httpError.js';
import starDTO from '../../dto/starDTO.js';
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
    if (error instanceof HttpError) {
        return Promise.reject(error);
    } else {
        return Promise.reject(new HttpError(statusCode, `${defaultMessage}: ${error.message}`));
    }
};

/**
 * starDTO가 올바른지 검증하는 함수
 * @param {object} star
 * @returns {object}
 * @throws {HttpError} star에 point가 있을 때
 */
export const starDTOvalid = (star) => {
    if (star.point != null) {
        throw new HttpError(400, 'Invalid operation: A star object should not contain a point.');
    }
    return star;
};

/**
 * pointDTO가 올바른지 검증하는 함수
 * @param {object} point
 * @returns {object}
 * @throws {HttpError} point에 star가 있을 때
 */
export const pointDTOvalid = (point) => {
    if (point.star != null) {
        throw new HttpError(400, 'Invalid operation: A point object should not contain a star.');
    }
    return point;
};

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

        let pointSum = 0;
        const pointDTOs = points.map(point => {
            const dto = pointDTO(point);
            pointSum += dto.point;
            return dto;
        });

        return {
            sum: pointSum,
            points: pointDTOs,
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

        let starSum = 0;
        const starDTOs = stars.map(star => {
            const dto = starDTO(star);
            starSum += dto.star;
            return dto;
        });

        return {
            sum: starSum,
            star: starDTOs,
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

        point = pointDTOvalid(point);
        point = pointDTO(point);

        const pointEntity = await MemberPoint.create({ memberId: id, point: point.point, message: point.message });
        return pointDTO(pointEntity);
    } catch (error) {
        if (error instanceof ValidationError) {
            return Promise.reject(new HttpError(400, error.message));
        } else {
            return handleError(error, 'Failed to add point');
        }
    }
};

/**
 * 유저에게 스타를 추가하는 함수
 * @param {number} id
 * @param {object} star
 * @returns {Promise<object>}
 */
export const addStar = async (id, star) => {
    try {
        await getMemberById(id);

        star = starDTOvalid(star);
        star = starDTO(star);

        const starEntity = await MemberStar.create({ memberId: id, star: star.star, message: star.message });
        return starDTO(starEntity);
    } catch (error) {
        if (error instanceof ValidationError) {
            return Promise.reject(new HttpError(400, error.message));
        } else {
            return handleError(error, 'Failed to add star');
        }
    }
};

/**
 * 유저의 포인트를 수정하는 함수
 * @param {number} id
 * @param {number} pointId
 * @param {object} point
 * @returns {Promise<object>}
 */
export const updatePoint = async (id, pointId, point) => {
    try {
        await getMemberById(id);

        point = pointDTOvalid(point);
        point = pointDTO(point);

        const pointEntity = await MemberPoint.findOne({ where: { id: pointId, memberId: id } });
        if (!pointEntity) {
            throw new HttpError(404, 'Point not found');
        }

        await pointEntity.update({ point: point.point, message: point.message });
        return pointDTO(pointEntity);
    } catch (error) {
        if (error instanceof ValidationError) {
            return Promise.reject(new HttpError(400, error.message));
        } else {
            return handleError(error, 'Failed to update point');
        }
    }
};

/**
 * 유저의 포인트를 삭제하는 함수
 * @param {number} id
 * @param {number} pointId
 * @returns {Promise<void>}
 */
export const deletePoint = async (id, pointId) => {
    try {
        await getMemberById(id);  // 사용자 존재 여부 확인

        const pointEntity = await MemberPoint.findOne({ where: { id: pointId, memberId: id } });
        if (!pointEntity) {
            throw new HttpError(404, 'Point not found');
        }

        await pointEntity.destroy();
    } catch (error) {
        return handleError(error, 'Failed to delete point');
    }
};

/**
 * 유저의 스타를 수정하는 함수
 * @param {number} id
 * @param {number} starId
 * @param {object} star
 * @returns {Promise<object>}
 */
export const updateStar = async (id, starId, star) => {
    try {
        await getMemberById(id);

        star = starDTOvalid(star);
        star = starDTO(star);

        const starEntity = await MemberStar.findOne({ where: { id: starId, memberId: id } });
        if (!starEntity) {
            throw new HttpError(404, 'Star not found');
        }

        await starEntity.update({ star: star.star, message: star.message });
        return starDTO(starEntity);
    } catch (error) {
        if (error instanceof ValidationError) {
            return Promise.reject(new HttpError(400, error.message));
        } else {
            return handleError(error, 'Failed to update star');
        }
    }
};

/**
 * 유저의 스타를 삭제하는 함수
 * @param {number} id
 * @param {number} starId
 * @returns {Promise<void>}
 */
export const deleteStar = async (id, starId) => {
    try {
        await getMemberById(id);  // 사용자 존재 여부 확인

        const starEntity = await MemberStar.findOne({ where: { id: starId, memberId: id } });
        if (!starEntity) {
            throw new HttpError(404, 'Star not found');
        }

        await starEntity.destroy();
    } catch (error) {
        return handleError(error, 'Failed to delete star');
    }
};