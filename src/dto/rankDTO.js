import { getUserId } from '../api/member/memberService.js';

export function rankDTO(rank) {
    return {
        rank: rank.rank,
        memberId: rank.memberId,
        userId: rank.userId,
        total: rank.total,
        type: rank.type,
    }
}
export default rankDTO;