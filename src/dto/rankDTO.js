import { getUserId } from '../api/member/memberService.js';

export function rankDTO(rank) {
    return {
        rank: rank.rank,
        memberId: rank.memberId,
        userId: rank.userId,
        totalPoints: rank.totalPoints,
    }
}
export default rankDTO;