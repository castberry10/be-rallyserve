import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
// import Matchmaking from '../../models/matchmaking';
import Volunteer from '../../models/volunteer.js';

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
          content: '너는 봉사자와 봉사기관을 매칭해주는 챗봇이야.내가 봉사자의 정보와 봉사기관의 정보를 줄테니 매칭해줘',
        },
        {
          role: 'user',
          content: `
            유저 봉사 시작 가능 날짜: ${userStartDate}
            유저 봉사 종료 날짜: ${userEndDate}
            유저 봉사 시작 가능 시간: ${userStartTime}
            유저 봉사 종료 시간: ${userEndTime}
            유저 메모: ${userMemo}

            아래서부터 봉사 정보 나열이야 
            ${volunteers}
            위 정보에서 가장 알맞은 봉사를 찾아줘
            나에게 반환할때 {title: '봉사제목', id: id} 이런식으로 반환해줘
            `
        }
      ],
      max_tokens: 256,
      temperature: 0.3, 
    },
    {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );

  ctx.body = response.data.choices[0].message.content;
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