import dotenv from 'dotenv';
import Volunteer from '../../models/volunteer.js';

dotenv.config();

export const getPosts = async ctx => {
    try {
        const volunteers = await Volunteer.findAll({raw: true,});
        console.log(volunteers);
        ctx.body = { volunteers };
    } catch (error) {
        console.error('Error fetching volunteers:', error);
        ctx.status = 500; // 서버 에러 상태 코드 설정
        ctx.body = { error: 'Failed to fetch volunteers' };
    }
};
