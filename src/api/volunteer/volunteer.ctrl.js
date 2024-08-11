import dotenv from 'dotenv';
import Volunteer from '../../models/volunteer.js';
import { Op } from 'sequelize';

dotenv.config();

export const getPosts = async ctx => {
    try {
        const { category, time, date, id} = ctx.query;

        let volunteers = await Volunteer.findAll({ raw: true });

        if (category) {
            const categoryMapping = {
                disaster: ['재해 재난', '재해재난', '재해ㆍ재난', '재해 ㆍ 재난'],
                life: ['생활지원', '생활편의지원'],
                environment: ['환경보호'],
                culture: ['문화행사'],
                health: ['보건의료', '보건 · 의료', '보건·의료'],
                mentoring: ['멘토링'],
                safety: ['예방안전', '예방 · 안전', '예방·안전'],
                international: ['국제']
            };

            const validCategories = categoryMapping[category] || [];
            volunteers = volunteers.filter(volunteer => validCategories.includes(volunteer.category));
        }

        // if (location) {
        //     volunteers = volunteers.filter(volunteer => volunteer.location === location);
        // }

        if (date) {
            const inputDate = new Date(date);
            volunteers = volunteers.filter(volunteer => {
                const startDate = new Date(volunteer.volunteerstartdate);
                const endDate = new Date(volunteer.volunteerenddate);
                return inputDate >= startDate && inputDate <= endDate;
            });
        }

        if (time) {
            const [inputHour, inputMinute] = time.split(':').map(Number);
            volunteers = volunteers.filter(volunteer => {
                const [startHour, startMinute] = volunteer.volunteerstarttime.split(':').map(Number);
                const [endHour, endMinute] = volunteer.volunteerendtime.split(':').map(Number);

                const inputTime = new Date();
                inputTime.setHours(inputHour, inputMinute);

                const startTime = new Date();
                startTime.setHours(startHour, startMinute);

                const endTime = new Date();
                endTime.setHours(endHour, endMinute);

                return inputTime >= startTime && inputTime <= endTime;
            });
        }
        if(id){
            volunteers = volunteers.filter(volunteer => volunteer.id == id);
        }
        ctx.body = { volunteers };
    } catch (error) {
        console.error('Error fetching volunteers:', error);
        ctx.status = 500; // 서버 에러 상태 코드 설정
        ctx.body = { error: 'Failed to fetch volunteers' };
    }
};

// export const getPosts = async ctx => {
//     try {
//         const { category, location, time, date } = ctx.query;

//         const volunteers = await Volunteer.findAll({raw: true,});
//         console.log(volunteers);

//         typeof volunteers === 'string' ? volunteers = JSON.parse(volunteers) : volunteers;
        
//         if(category){
//             // category가 존재하면 해당 category에 해당하는 봉사활동만 필터링
//             // category -> 영어로
//             // 재해재난 -> disaster
//             // 생활지원 -> life
//             // 환경보호 -> environment
//             // 문화행사 -> culture
//             // 보건의료 -> health
//             // 멘토링 -> mentoring
//             // 예방안전 -> safety
//             // 국제 -> international
//             volunteers = await volunteers.filter(volunteer => volunteer.category == category);
//         }
//         // if(location){
//         //     volunteers = await volunteers.filter(volunteer => volunteer.location == location);
//         // }
//         if(time){
//             volunteers = await volunteers.filter(volunteer => volunteer.time == time);
//         }
//         if(date){
//             volunteers = await volunteers.filter(volunteer => volunteer.date == date);
//         }
//         ctx.body = { volunteers };
// }