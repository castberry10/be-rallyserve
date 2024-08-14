import { col, fn, literal } from 'sequelize';
import MemberPoint from '../../models/memberPoint.js';
import { checkMemberIsExist, getUserId } from '../member/memberService.js';
import handleError from '../../utill/handleError.js';
import rankDTO from '../../dto/rankDTO.js';


/**
 * 전체 사용자들의 포인트 합을 기준으로 랭킹을 가져옵니다.
 * 동점자들은 같은 순위를 가지며, 순위는 1부터 시작합니다.
 * @returns {Promise<Array>} - 랭킹 리스트
 */
export const getOverallRanking = async () => {
    try {
        const memberPointSums = await MemberPoint.findAll({
            attributes: [
                'memberId',
                [fn('SUM', col('point')), 'totalPoints'],
            ],
            group: ['memberId'],
            order: [[literal('totalPoints'), 'DESC']],
            raw: true,
        });

        // 랭킹 계산
        let currentRank = 1;
        let previousPoints = null;
        const rankings = memberPointSums.map((member, index) => {
            if (previousPoints !== member.totalPoints) {
                currentRank = index + 1;
            }
            previousPoints = member.totalPoints;
            return rankDTO({
                rank: currentRank,
                memberId: member.memberId,
                userId: getUserId(member.memberId),
                totalPoints: member.totalPoints,
            });
        });

        return rankings;
    } catch (error) {
        return handleError(error, 'Failed to get overall ranking');
    }

};

/**
 * 특정 사용자(memberId)의 랭킹을 가져옵니다.
 * 동점자들은 같은 순위를 가지며, 순위는 1부터 시작합니다.
 * @param {number} memberId - 랭킹을 확인할 사용자 ID
 * @returns {Promise<Object>} - 사용자 랭킹 정보
 */
export const getUserRanking = async (memberId) => {
    try {
        const userPoints = await MemberPoint.findOne({
            attributes: [
                [fn('SUM', col('point')), 'totalPoints'],
            ],
            where: { memberId },
            group: ['memberId'],
            raw: true,
        });

        await checkMemberIsExist(memberId);

        const samePointsCount = await MemberPoint.count({
            attributes: ['memberId'],
            group: ['memberId'],
            having: literal(`SUM(point) > ${userPoints.totalPoints}`),
        });

        return rankDTO({
            rank: samePointsCount + 1,
            memberId: memberId,
            userId: await getUserId(memberId),
            totalPoints: userPoints.totalPoints,
        });
    } catch (error) {
        return handleError(error, 'Failed to get user ranking');
    }
};
