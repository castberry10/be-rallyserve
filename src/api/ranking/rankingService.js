import { col, fn, literal } from 'sequelize';
import MemberPoint from '../../models/memberPoint.js';
import { checkMemberIsExist, getUserId } from '../member/memberService.js';
import handleError from '../../utill/handleError.js';
import rankDTO from '../../dto/rankDTO.js';
import MemberStar from "../../models/memberStar.js";
import HttpError from "../../exception/httpError.js";

/**
 * 컬럼 이름을 기반으로 총합 속성 이름을 생성합니다.
 * @param {string} column - 컬럼 이름 ('point' 또는 'star')
 * @returns {string} - 총합 속성 이름 ('totalPoints' 또는 'totalStars')
 */
const makeSumColumnName = (column) => {
    return `total${column.charAt(0).toUpperCase() + column.slice(1)}s`;
};

/**
 * 특정 기준으로 전체 사용자들의 랭킹을 가져옵니다.
 * @param {Model} model - Sequelize 모델 (MemberPoint 또는 MemberStar)
 * @param {string} column - 합산할 컬럼명 ('point' 또는 'star')
 * @returns {Promise<Array>} - 랭킹 리스트
 */
const getOverallRanking = async (model, column) => {
    try {
        const memberSums = await model.findAll({
            attributes: [
                'memberId',
                [fn('SUM', col(column)), makeSumColumnName(column)],
            ],
            group: ['memberId'],
            order: [[literal(makeSumColumnName(column)), 'DESC']],
            raw: true,
        });

        let currentRank = 1;
        let previousTotal = null;
        const rankings = await Promise.all(memberSums.map(async (member, index) => {
            const total = member[makeSumColumnName(column)];
            // console.log(total)
            if (previousTotal !== total) {
                currentRank = index + 1;
            }
            previousTotal = total;
            return rankDTO({
                rank: currentRank,
                memberId: member.memberId,
                userId: await getUserId(member.memberId),
                total: parseInt(total),
                type: column,
            });
        }));

        return rankings;
    } catch (error) {
        return handleError(error, `Failed to get overall ranking by ${column}`);
    }
};

/**
 * 특정 기준으로 사용자의 랭킹을 가져옵니다.
 * @param {Model} model - Sequelize 모델 (MemberPoint 또는 MemberStar)
 * @param {string} column - 합산할 컬럼명 ('point' 또는 'star')
 * @param {number} memberId - 랭킹을 확인할 사용자 ID
 * @returns {Promise<Object>} - 사용자 랭킹 정보
 */
const getUserRanking = async (model, column, memberId) => {
    try {
        await checkMemberIsExist(memberId);

        const userResult = await model.findOne({
            attributes: [
                [fn('SUM', col(column)), makeSumColumnName(column)],
            ],
            where: { memberId },
            group: ['memberId'],
            raw: true,
        });

        if (!userResult) {
            throw new HttpError(404, `User ${column}s not found`);
        }

        const total = userResult[makeSumColumnName(column)];

        const sameTotalCountResult = await model.findAll({
            attributes: [
                [fn('SUM', col(column)), makeSumColumnName(column)],
            ],
            group: ['memberId'],
            having: literal(`SUM(${column}) >= ${total}`),
            raw: true,
        });

        const sameTotalCount = sameTotalCountResult.length - 1;
        const rank = sameTotalCount - sameTotalCountResult.findIndex(user => user.memberId === memberId);

        return rankDTO({
            rank,
            memberId: memberId,
            userId: await getUserId(memberId),
            total: parseInt(total),
            type: column,
        });
    } catch (error) {
        return handleError(error, `Failed to get user ranking by ${column}`);
    }
};

/**
 * 전체 사용자들의 포인트 합을 기준으로 랭킹을 가져옵니다.
 * @returns {Promise<Array>} - 랭킹 리스트
 */
export const getOverallRankingByPoint = async () => {
    return getOverallRanking(MemberPoint, 'point');
};

/**
 * 특정 사용자(memberId)의 포인트 기준 랭킹을 가져옵니다.
 * @param {number} memberId - 랭킹을 확인할 사용자 ID
 * @returns {Promise<Object>} - 사용자 랭킹 정보
 */
export const getUserRankingByPoint = async (memberId) => {
    return getUserRanking(MemberPoint, 'point', memberId);
};

/**
 * 전체 사용자들의 스타 합을 기준으로 랭킹을 가져옵니다.
 * @returns {Promise<Array>} - 랭킹 리스트
 */
export const getOverallRankingByStar = async () => {
    return getOverallRanking(MemberStar, 'star');
};

/**
 * 특정 사용자(memberId)의 스타 기준 랭킹을 가져옵니다.
 * @param {number} memberId - 랭킹을 확인할 사용자 ID
 * @returns {Promise<Object>} - 사용자 랭킹 정보
 */
export const getUserRankingByStar = async (memberId) => {
    return getUserRanking(MemberStar, 'star', memberId);
};
