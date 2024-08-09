import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
// import Matchmaking from '../../models/matchmaking';
import Volunteer from '../../models/volunteer';

dotenv.config();
import axios from 'axios';

export const index = async ctx => {
  const { userStartDate, userEndDate, userStartTime, userEndTime, userMemo } = ctx.request.body;
  // Volunteer 모두 불러오기 
    const volunteers = await Volunteer.findAll();
    console.log(volunteers);
    

  // openai api로 부터 매치메이킹 결과 받아오기
  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: '너는 운동, 식단, 잠관리를 해주는 앱의 어시스턴트야.'
        },
        {
          role: 'user',
          content: `
            goal: ${JSON.stringify(goal)}
            status: ${JSON.stringify(status)}
            위의 goal과 status를 0부터 100까지의 점수로 변환해줘.
            goal은 사용자가 지정한 목표를 나타내고, status는 사용자의 현재 상태를 나타내.
            0은 아무것도 하지 않았거나 아무것도 달성하지 못했을 때, 100은 목표를 완벽하게 달성했을 때를 의미해.
            칼로리가 너무 적거나 너무 커도, 자는 시간이 너무 적거나 너무 많아도 안돼.
            운동은 얼마나 하든 괜찮아
            프로그램에서 사용되는거니까 다른말은 하지말고 0부터 100까지의 정수로만 변환해줘.
            `
        }
      ],
      max_tokens: 256,
      temperature: 0.7, 
    },
    {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );


};

// const { id, password } = ctx.request.body;

// try {
//   const member = await Member.findOne({ where: { userid: id } });

//   if (member && await bcrypt.compare(password, member.password)) {
//     const token = jwt.sign({ id: member.id }, JWT_SECRET, { expiresIn: '6h' });
//     ctx.body = { token };
//   } else {
//     ctx.status = 401;
//     ctx.body = { error: 'Invalid credentials' };
//   }
// } catch (error) {
//   ctx.status = 500;
//   ctx.body = { error: 'Login failed', error };
// }