import dotenv from 'dotenv';
import Volunteer from '../../models/volunteer.js';
import axios from 'axios';

dotenv.config();

export const index = async ctx => {
  try{
    const { userStartDate, userEndDate, userStartTime, userEndTime, userMemo } = ctx.request.body;
    // Volunteer 모두 불러오기
    const volunteers = await Volunteer.findAll({raw: true,});
    // console.log(volunteers);


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
            ${JSON.stringify(volunteers)}
            위 정보에서 가장 알맞은 봉사를 찾아줘
            
            
            1. 유저 봉사 시작 날짜보다 봉사 종료 날짜가 빠른 봉사는 제외해줘
            2. 유저 봉사 종료 날짜보다 봉사 시작 날짜가 늦은 봉사는 제외해줘
            3. 유저 봉사 시작 시간과 종료 시간 사이에 봉사의 시작 시간과 종료 시간이 포함되어있는 봉사에서 가장 알맞는 봉사를 찾아줘
            4. 만약 유저의 봉사 시작 시간이 봉사 시작시간보다 늦거나, 유저의 봉사 종료 시간이 봉사 종료 시간보다 빠른 봉사는 제외해줘

            - 봉사는 하루마다 사람을 찾기때문에 봉사 기간과 유저의 봉사 가능기간이 조금이라도 겹치면 추천이 가능해. 
            - 가능한 봉사들 중 유저메모를 보고 가장 알맞은 봉사를 추천해줘
            - 가능한 봉사가 없다면 {} 빈 객체를 반환해줘
            - 컴퓨터에 사용하는 정보라 정확하게 {"title": '봉사제목', "id": id}또는 빈 객체{}로 반환해줘
            - 컴퓨터에 바로 api로 사용하는 거라 정확하게 반환해줘야해, 코드블럭 사용하지마
            `
            }
          ],
          max_tokens: 128*6,
          temperature: 0.7,
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
    );

    // console.log(response.data)
    // console.log(response.data.choices[0].message.content)
    ctx.body = JSON.parse(response.data.choices[0].message.content);
  } catch (err){
    console.log(err);
    ctx.status = 500;
    ctx.body = { error: 'Failed to get matchmaking result'};
    // TO-DO: handle error 사용
  }

};
