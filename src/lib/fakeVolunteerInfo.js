import Volunteer from "../models/volunteer.js";

const addVolunteer = async () => {
console.log('start addVolunteer');
try {
  const newVolunteer1 = await Volunteer.create({
      title: '청라 화재관련 대피소 자원봉사자 모집 [청라해변공원캠핑장/오후2시~6시]',
      volunteerstartdate: '2024-08-10',
      volunteerenddate: '2024-08-27',
      volunteerstarttime: '14:00:00',
      volunteerendtime: '18:00:00',
      location: '청라해변공원캠핑장',
      weekday: '토',
      submitstartdate: '2024-08-09',
      submitenddate: '2024-08-16',
      url: 'https://www.1365.go.kr/vols/1572247904127/partcptn/timeCptn.do?type=show&menuNo=&progrmRegistNo=3171342',
      state: '모집중',
      text: `
      [청라 화재관련 대피소 자원봉사자 모집]
● 봉사일자: 8월 17일(토)
● 봉사시간:  [오후] 14:00 ~18:00
● 봉사장소: 청라해변공원캠핑장<캠핑장 주소: 서구 첨단서로 190>
● 활동인원: 대피소 1곳당 오전,오후 각2명(성인만 활동가능) 
● 봉사내용: 식사도움, 쓰레기정리 등

 ※ 주 활동장소는 시원한 실내입니다. 참고바랍니다.
 ※ 활동 전으로 안내문자 드립니다.
 ※ 부득이한 경우, 활동장소는 변경될 수 있으니 양해바랍니다.
 ※ 복구상황에 따라, 대피소가 폐쇄되어 활동하실 수 없는 경우가 발생되오니, 참고바랍니다.(폐쇄될 경우 연락드립니다).
      `,
      condition: '성인',
      volunteerorganization: '인천광역시 서구',
      category: '재해ㆍ재난',
      registrationauthority: '인천광역시 서구',
   });
  console.log('New volunteer opportunity added:', newVolunteer1);

const newVolunteer2 = await Volunteer.create({
    title: '우리보금자리 노인요양공동생활가정 자원봉사자를 모집합니다.',
    volunteerstartdate: '2024-05-11',
    volunteerenddate: '2024-08-10',
    volunteerstarttime: '14:00:00',
    volunteerendtime: '16:00:00',
    location: '청라해변공원캠핑장',
    weekday: '토, 일',
    submitstartdate: '2024-05-01',
    submitenddate: '2024-08-10',
    url: 'https://www.1365.go.kr/vols/1572247904127/partcptn/timeCptn.do?type=show&progrmRegistNo=3119002',
    state: '모집중',
    text: `
    어르신 프로그램 활동보조, 말벗, 활동보조, 식사보조, 공연, 이미용 봉사활동 등
오전, 오후 중 최대 4시간 봉사활동 가능 (전화 문의 후 봉사 신청)
`,
    condition: '청소년',
    volunteerorganization: '우리보금자리노인요양공동생활가정',
    category: '생활편의지원',
    registrationauthority: '경상북도 문경시',
 });
console.log('New volunteer opportunity added:', newVolunteer2);

const newVolunteer3 = await Volunteer.create({
  title: '어르신들을 위한 공연활동',
  volunteerstartdate: '2024-05-11',
  volunteerenddate: '2024-08-10',
  volunteerstarttime: '09:00:00',
  volunteerendtime: '17:30:00',
  location: '원남효마실노인주간보호전문센터',
  weekday: '월,목,토',
  submitstartdate: '2024-05-11',
  submitenddate: '2024-08-10',
  url: 'https://www.1365.go.kr/vols/1572247904127/partcptn/timeCptn.do?type=show&progrmRegistNo=3128113',
  state: '모집중',
  text: `
  어르신들의 다양한 사회생활 및 문화생활을 경험할 수 있도록 봉사자들의 다양한 끼와 재능 등을 공연을 통해서 어르신들께 보여주시는 활동입니다. 
어르신들께서 문화생활을 경험하실 수 있도록 희망합니다.
`,
  condition: '성인',
  volunteerorganization: '원남효마실노인주간보호전문센터',
  category: '문화행사',
  registrationauthority: '경상북도 구미시',
});
console.log('New volunteer opportunity added:', newVolunteer3);

const newVolunteer4 = await Volunteer.create({
  title: '[다함께돌봄센터선교리포레]급식 배식 활동 지원',
  volunteerstartdate: '2024-07-29',
  volunteerenddate: '2024-08-21',
  volunteerstarttime: '11:00:00',
  volunteerendtime: '15:00:00',
  location: '광주광역시 동구 선교로 38-33 (선교2차 우바아이유쉘리포레) 커뮤니티센터 내 돌봄교실',
  weekday: '월, 화, 수, 목, 금',
  submitstartdate: '2024-07-01',
  submitenddate: '2024-08-10',
  url: 'https://www.1365.go.kr/vols/1572247904127/partcptn/timeCptn.do?type=show&progrmRegistNo=3154106',
  state: '모집중',
  text: `
○일  시: 7월 29일~8월 21일(월~금) 11시~15시
○장 소 : 다함께돌봄센터 선교리포레
○내 용 : 급간식 배식 및 설거지 
○담당자 : 서용숙(070-8191-5673)
`,
  condition: '성인',
  volunteerorganization: '광주광역시 동구',
  category: '생활편의지원',
  registrationauthority: '광주광역시 동구',
});
    console.log('New volunteer opportunity added:', newVolunteer4);
    const newVolunteer5 = await Volunteer.create({
      title: '장유 효 요양병원 자원 봉사자를 모집합니다.♥ (오전 봉사)',
      volunteerstartdate: '2024-05-13',
      volunteerenddate: '2024-08-11',
      volunteerstarttime: '09:00:00 ',
      volunteerendtime: '13:00:00',
      location: '장유 효 요양병원',
      weekday: '목,금',
      submitstartdate: '2024-05-10',
      submitenddate: '2024-08-11',
      url: 'https://www.1365.go.kr/vols/1572247904127/partcptn/timeCptn.do?type=show&progrmRegistNo=3130334',
      state: '모집완료',
      text: `
      *활동기간 : 2024. 5. 13. ~ 8. 11.(목,금)
  *활동시간 : 9:00 ~13:00 (최대 4시간 봉사 시간 인정)
  *활동내용 : 어르신 목욕 보조 및 식사수발 및 청소
  *문의사항 : 055)314 -1250 / 010 - 2592 -5565 
  
  ※ 봉사 신청 후 담당자에게 연락주시기 바랍니다.
      `,
      condition: '성인',
      volunteerorganization: '장유 효 요양병원',
      category: '보건 · 의료',
      registrationauthority: '경상남도 김해시',
    });
  
    const newVolunteer6 = await Volunteer.create({
      title: '[비대면]세상아이 키트봉사: 어르신 치매예방을 위한 운동화교구 만들기 ',
      volunteerstartdate: '2024-07-01 ',
      volunteerenddate: '2024-09-30',
      volunteerstarttime: '13:00:00',
      volunteerendtime: '21:00:00',
      location: '재택봉사',
      weekday: '월,화,수,목,금,토,일',
      submitstartdate: '2024-06-21',
      submitenddate: '2024-08-11',
      url: 'https://www.1365.go.kr/vols/1572247904127/partcptn/timeCptn.do?type=show&progrmRegistNo=3150271',
      state: '모집중',
      text: `
      1. 활동내용: 어르신이 운동화끈을 끼우고 묶고 풀기를 반복하며 손을 움직일 수 있도록 돕는 운동화교구를 만드는 활동 (한 짝은 봉사자가 완성, 한 짝은 어르신이 완성)
  
  2. 활동시간: 1시간 (키트당) 
  
  3. 기부대상: 요양시설 및 주야간보호센터, 재가복지서비스 이용 어르신
  
  4. 신청자격: 초등고학년 이상 청소년 및 성인 / 학교 / 단체 (※ 중고등학생 개인 신청시 교육부(나이스)에서는 봉사점수로 인정하지 않습니다.)
  
  5. 신청방법: 1365자원봉사포털에서 활동 신청 -> 세상아이 홈페이지 방문하여 개인키트봉사 주문 및 결제 (주문시 기부금영수증 발급 신청 가능하며, 기부금은 키트봉사 운영을 위한 제반 사업비로 사용됩니다)   
  
  6. 키트발송: 세상아이 홈페이지에서 봉사키트 주문 후 평균 3일 이내 택배 발송
  
  7. 활동방법: 봉사키트신청 -> 키트봉사활동 -> 기부물품반송,결과보고서 제출 ->봉사실적 등록 및 승인 (약1주일 소요) 
  
                                                   ★★★ 활동사진 포함[결과보고서]를 반드시 제출해야 시간인증 가능 ★★★ 
                                               (봉사활동 결과보고서양식은 1365 첨부파일 또는 세상아이 홈페이지에서 다운로드)
  
  
  ★ 전화상담 불가/ 세상아이 홈페이지(sesangi.org) '개인키트봉사 안내 및 신청'에서 자세한 내용을 확인하실 수 있습니다! 
      `,
      condition: '성인 청소년 ',
      volunteerorganization: '사단법인 세상아이',
      category: '멘토링',
      registrationauthority: '서울특별시 은평구',
    });
  
    const newVolunteer7 = await Volunteer.create({
      title: '(방이1동캠프) 무더위 얼음땡 캠페인(얼음물 나눔 활동)',
      volunteerstartdate: '2024-07-07',
      volunteerenddate: '2024-08-25',
      volunteerstarttime: '10:00:00',
      volunteerendtime: '12:00:00',
      location: '방이1동주민센터',
      weekday: '목,일',
      submitstartdate: '2024-06-27',
      submitenddate: '2024-08-11',
      url: 'https://www.1365.go.kr/vols/1572247904127/partcptn/timeCptn.do?type=show&progrmRegistNo=3152637',
      state: '모집완료',
      text: `
      ★'자원봉사캠프'란?
     :지역주민의 자원봉사 참여와 자원봉사 업무 편의를 돕는 자원봉사센터 분소입니다.
  
  1. 활동일시 : 2024년 7월~8월 中 매주 목요일, 일요일 오전 10시~12시
  2. 모집대상 : 청소년~성인 일자별 3명
  3. 집결장소 : 방이1동 주민센터
  4. 활동내용 : 무더위에 지친 지역주민 대상 얼음물 나눔 캠페인
  5. 준비 : 편한복장
  
  <필독>
  ※ 우천 등 상황으로 활동이 취소될 수 있습니다.
  ※ 활동시 촬영되는 인증 사진은 자원봉사 홍보자료로(홈페이지 업로드 등) 활용될 수 있습니다. 동의하시는 분만 신청해 주세요.
  ※ 청소년의 경우 활동 인정여부를 학교에 반드시 확인하시길 바랍니다.
  ※ 자원봉사캠프는 지역주민의 자원봉사 참여를 돕는 거점입니다. 진행하시는 분들도 자원봉사자 이므로 협조 부탁드립니다.
  
  <문의>
  1) 활동당일 현장지도 : 방이1동 자원봉사캠프장 윤정섭 010-2067-8843
  2) 활동취소 등 기타문의 : 송파구자원봉사센터 정유진 02-2202-1361
      `,
      condition: '성인 청소년 ',
      volunteerorganization: '방이1동주민센터 자원봉사캠프',
      category: '생활지원',
      registrationauthority: '서울특별시 송파구',
    });
  
    const newVolunteer8 = await Volunteer.create({
      title: '[플로킹] 서울 뚝섬한강공원 환경정화 봉사자 모집합니다!(문자신청)',
      volunteerstartdate: '2024-07-01',
      volunteerenddate: '2024-09-30',
      volunteerstarttime: '10:30:00',
      volunteerendtime: '13:00:00',
      location: '뚝섬한강공원',
      weekday: '일',
      submitstartdate: '2024-06-27',
      submitenddate: '2024-08-11',
      url: 'https://www.1365.go.kr/vols/1572247904127/partcptn/timeCptn.do?type=show&progrmRegistNo=3152847',
      state: '모집중',
      text: `
      **봉사에 관심있으신분은 010-5802-9231로 (이름/나이/신청날짜/플로킹봉사 신청합니다) 이렇게 문자주시면 됩니다**
  신청인원은 문자로 집계되니 홈페이지에 신청된 인원과 관계없이 문자로 신청하시면 됩니다
  
  ++연락은 기관연락처가 아닌 010-5802-9231로 연락주셔야 됩니다!++
  전화를 못 받는 상황이 많아서 문자주시면 친절히 답변 드리고 후에 전화가 필요하시면 전화드리겠습니다
  
  1. 일시 : 일요일 오전10시30분~오후 1시 (2시간30분)
  2. 장소 : 뚝섬한강공원(자양역3번 출구 앞 집결)
  3. 모집인원 : 10명
  4. 활동연령 : 20~35세
  5. 기타 : 뚝섬한강공원에서 플로킹 봉사를 진행합니다!
               집게로 한강공원 주변을 다니면서 쓰레기를 줍는 봉사입니다
               플로킹에 필요한 물품은 제공됩니다(집게, 쓰레기봉투)             
               폭염시 중간에 쉬는 시간을 가지고 너무 무리하게 진행하지 않습니다!
               책임감있게 봉사 신청해주실분 모집중이고 2번이상 봉사가 가능하시다면 더더욱 좋을것 같습니다!!
               한강 보면서 환경정화도 하고 건강도 챙기실분 많이 많이 신청해주세요!!!
      `,
      condition: '성인',
      volunteerorganization: '희망을파는사람들 서울본점',
      category: '환경보호',
      registrationauthority: '서울특별시 강서구',
    });
  
    const newVolunteer9 = await Volunteer.create({
      title: '용담다목적생활문화센터 하반기 재능기부 강사모집',
      volunteerstartdate: '2024-07-03',
      volunteerenddate: '2024-09-27',
      volunteerstarttime: '10:00:00',
      volunteerendtime: '21:00:00',
      location: '용담다목적생활문화센터(용해로80-10)',
      weekday: '화,수,목,금,토,일',
      submitstartdate: '2024-07-03',
      submitenddate: '2024-08-11',
      url: 'https://www.1365.go.kr/vols/1572247904127/partcptn/timeCptn.do?type=show&progrmRegistNo=3155623',
      state: '모집중',
      text: `
      용담다목적생활문화센터에서는 지역주민의 다채로운 생활문화교육을 위해 재능기부 강사님을 모집하고 있습니다. 교육봉사에 관심 있는 분들의 많은 지원 바랍니다.
  
  - 모 집 대 상 : 재능기부 강사
  - 모 집 인 원 : 00명
  - 모 집 일 정 : 2024.7.3.(수) ~ 2024.7.31.(수)
  - 지 원 자 격 : 2024년도 동아리 활동 및 프로그램 교육일정에 따라 재능기부 활동이 가능하신 분 
  - 활 동 일 정 : 2024.7.3. ~ 2024.9.27.
  - 활 동 시 간 : 10시~21시 사이, 매 회 1~3시간(횟수 제한 없음) *토요일,일요일,법정공휴일은 10~19시 사이
  - 활 동 장 소 : 용담다목적생활문화센터
  - 활 동 내 용 : 생활문화와 관련된 프로그램 교육
  - 봉사자혜택 : 봉사활동시간 인정
  - 활 동 문 의 : 용담다목적생활문화센터 운영사무실(064-749-6682)
  ※ 활동 신청 확인 후 상담전화를 통해 최종 협의하여 봉사활동 진행 예정
      `,
      condition: '성인',
      volunteerorganization: '마을이음',
      category: '멘토링',
      registrationauthority: '제주특별자치도 제주시',
    });
  
    const newVolunteer10 = await Volunteer.create({
      title: '세종문화예술회관 기획전시 [세계민속악기특별전 : 세종] 전시장 운영 보조(오후)',
      volunteerstartdate: '2024-07-24',
      volunteerenddate: '2024-08-24',
      volunteerstarttime: '14:00:00',
      volunteerendtime: '18:00:00',
      location: '세종문화예술회관 전시실',
      weekday: '화,수,목,금,토,일',
      submitstartdate: '2024-07-03',
      submitenddate: '2024-08-11',
      url: 'https://www.1365.go.kr/vols/1572247904127/partcptn/timeCptn.do?type=show&progrmRegistNo=3155965',
      state: '모집중',
      text: `
      <세계민속악기특별전 : 세종> 전시 안내
  
  - 전시기간 : 24.7.23.(화) ~ 8.24.(토)
  - 관람시간 : 1회차 10:00~13:00 / 2회차 13:00~18:00 (입장마감 17:30) *매주 월요일 휴관
  - 전시장소 : 세종문화예술회관 전시실(세종시 조치원읍 문예회관길 22)
  - 입장연령 : 전체연령가
  
  1. 활동내용
  - 전시장 내부 안전관리 및 지킴이
  - 체험 프로그램 등 운영 보조
  
  2. 모집대상
  - 18세 이상 청소년 및 성인
  - 회차별 2명 모집, 선착순 마감 
  
  3. 활동장소
  세종문화예술회관 전시실(세종시 조치원읍 문예회관길 22)
  
  4. 활동시간
  - 오후(전시 2회차) : 14:00~18:00 / 4시간
  
  5. 참고사항
  - 관람객 안내 및 응대 업무로 단정한 복장 필수입니다
  - 신청 이후 봉사가 어려울 시 반드시 취소 연락 바랍니다
  - 중식 제공은 이루어지지 않습니다
  
  문의 : 세종문화예술회관 담당자 044-850-8969
      `,
      condition: '성인 청소년',
      volunteerorganization: '재단법인 세종시문화관광재단',
      category: '문화행사',
      registrationauthority: '세종특별자치시 세종시',
    });
  
    const newVolunteer11 = await Volunteer.create({
      title: '경로식당 급식자원봉사 및 세척봉사',
      volunteerstartdate: '2024-05-13',
      volunteerenddate: '2024-08-12',
      volunteerstarttime: '10:00:00',
      volunteerendtime: '14:00:00',
      location: '판교노인종합복지관 경로식당',
      weekday: '월,화,수,목,금,토',
      submitstartdate: '2024-05-03',
      submitenddate: '2024-08-12',
      url: 'https://www.1365.go.kr/vols/1572247904127/partcptn/timeCptn.do?type=show&progrmRegistNo=3127275',
      state: '모집완료',
      text: `
      안녕하세요. 
  판교노인종합복지관에서 경로식당 단체급식 자원봉사자를 모집합니다. 
  1. 봉사내용 
  - 일반성인 경로식당 급식배식 및 세척 봉사활동입니다.
  - 봉사당일 세부안내 드립니다.
  2. 봉사일시 : 2024. 2. 13(화) ~ 2024.5.11(토)
  3. 봉사시간: 10:00 ~ 14:00(보상시간:4시간) 
  4. 봉사장소 : 판교노인종합복지관 로비(L)층 경로식당
  5. 봉사인원 : 10명
  6. 봉사혜택 : 1365봉사실적 입력, 식사제공
  7. 봉사문의 : 031-620-2832/김옥경 팀장 
  8. 봉사신청 : 1365사이트 및 전화로 신청하시면 됩니다. (신청하시고 못 오시는경우 꼭 연락주세요. 031-620-2833)
  - 봉사 당일 10시까지 판교노인종합복지관 경로식당으로 오시면 됩니다. 
  - 활동 예정 시간 30분 이상 지각 시 당일 봉사활동이 취소될 수 있습니다.(시간 엄수 요망)
      `,
      condition: '성인 기업·단체 ',
      volunteerorganization: '판교노인종합복지관',
      category: '생활지원',
      registrationauthority: '경기도 성남시',
    });
  
    const newVolunteer12 = await Volunteer.create({
      title: '시각장애인 수영 및 아쿠아로빅 교실 보조 자원봉사',
      volunteerstartdate: '2024-05-27',
      volunteerenddate: '2024-08-26',
      volunteerstarttime: '13:30:00',
      volunteerendtime: '16:00:00',
      location: '봉래체육문화센터(서울 중구 소재, 충정로역 인근)',
      weekday: '월',
      submitstartdate: '2024-05-13',
      submitenddate: '2024-08-12',
      url: 'https://www.1365.go.kr/vols/1572247904127/partcptn/timeCptn.do?type=show&progrmRegistNo=3131022',
      state: '모집완료',
      text: `
      시각장애인 수영 및 아쿠아로빅 교실 보조 자원봉사
  
  사단법인 시각장애인여성회에서는 5월부터 12월까지 여성시각장애인분들과 함께 아쿠아로빅 및 수영교실을 보조해주실 자원봉사자 분을 모집합나다.
  정기적인 봉사활동이 가능하신 분들의 적극적인 신청 부탁드립니다.
  
  1. 봉사명 : 시각장애인 수영 및 아쿠아로빅 교실 보조 자원봉사
  2. 봉사활동기간 : 2024. 05. 27(월) ~ 2024. 12. 11(수)까지(다소 변경 있을 수 있음.)
  3. 봉사활동시간 : 매주 월요일, 수요일 13:30 ~ 16:00
  - 매주 월요일 : 아쿠아로빅 교실 / 매주 수요일 : 수영교실 운영
  4. 봉사활동장소 : 봉래체육문화센터(서울 중구 소재, 충정로역 인근)
  5. 봉사활동내용 :
  - 여성시각장애인 교육 참여자 중 안내자가 없는 분을 대상으로 지원
  - 이동보조(지하철역->수영장 안내 또는 수영장->지하철역 안내)
  - 수영장 입장전 샤워 및 탈의 보조
  - 아쿠아로빅 및 수영 수업 진행시 수영장 풀 입수하여 안전 및 동선 보조
  - 수업 후 샤워 및 착의 보조
  6. 준비물 : 개인 세면도구 및 수영복(수영모 포함)
  7. 기타 안내 및 유의사항
  - 지속적인 참여를 원칙으로 하며 최소 3개월이상 활동이 가능한 경우 신청.
  - 매주 월요일, 수요일 중 요일 선택 가능(전화 문의 후 접수)
  - 수영이 가능한 경우면 더욱 도움이 되나, 물 공포심이 없고 수영장 물 속 입장이 가능해도 접수 가능함.
  - 개인 수영복 및 수영모, 세면도구는 개별 준비 필요.
  8. 문의
  - 070-4012-1355
      `,
      condition: '성인',
      volunteerorganization: '여성시각장애인주간보호센터',
      category: '생활지원',
      registrationauthority: '서울특별시 중구',
    });
  
    const newVolunteer13 = await Volunteer.create({
      title: '주간보호센터 환경미화 봉사자모집',
      volunteerstartdate: '2024-05-13',
      volunteerenddate: '2024-08-12',
      volunteerstarttime: '16:00:00',
      volunteerendtime: '18:00:00',
      location: '행복한동행 주간보호센터',
      weekday: '월,화,수,목,금',
      submitstartdate: '2024-05-13',
      submitenddate: '2024-08-12',
      url: 'https://www.1365.go.kr/vols/1572247904127/partcptn/timeCptn.do?type=show&progrmRegistNo=3131159',
      state: '모집완료',
      text: `
      행복한동행주간보호센터에서 환경미화 봉사자님을 모십니다.
  장소 : 센터 내/외 청소
  연령 : 제한없음
  자원봉사 의지가 투철하신 분
      `,
      condition: '성인',
      volunteerorganization: '행복한동행 주간보호센터',
      category: '보건 · 의료',
      registrationauthority: '경상남도 양산시',
    });
  
    const newVolunteer14 = await Volunteer.create({
      title: '광주시다함께돌봄센터4호점 초등학교 저학년 아동 학업지원, 놀이지원, 중식지도 등',
      volunteerstartdate: '2024-07-25',
      volunteerenddate: '2024-08-13',
      volunteerstarttime: '13:00:00',
      volunteerendtime: '17:00:00',
      location: '경기도 광주시 경안로42번길 22 (혁신플랫폼YF)2층',
      weekday: '월,화,수,목,금',
      submitstartdate: '2024-05-24',
      submitenddate: '2024-08-12',
      url: 'https://www.1365.go.kr/vols/1572247904127/partcptn/timeCptn.do?type=show&progrmRegistNo=3137350',
      state: '모집완료',
      text: `
      1. 기간 : 2024. 7 . 25. ~ 8. 13. / 13:00~17:00 
  2. 장소 : 광주시다함께돌봄센터 4호점(경안동, 혁신플랫폼YF 2층)
    ※ 광주초등학교 3교문 옆, 경안동 혁신플랫폼 YF 2층 광주시다함께돌봄센터 4호점으로 오시면 됩니다.
  3. 대상 : 대학생 및 일반인(1970년 1월 1일 이후 출생자)
  4. 활동내용 : 초등학교 저학년 아동 학업지원, 놀이지원, 중식지도, 독서지원, 기타업무지원
  5. 방문 시 : 아동학대 및 비밀보장 서약, 센터내 및 아동사진촬영금지
  6. 문의사항 : 김연경 돌봄교사(031-797-0421)
  
  ※ 무단 불참자는 다음 활동이 반려될 수 있음(사유가 있을 시 반드시 전화바랍니다)
  
  * 봉사 참여자는 휴대폰 모바일 앱 1365 다운로드, 회원가입 후 참여 해 주세요
   (봉사 참여 시간 전 QR 코드 입력, 봉사 실행 후 QR코드 입력 )
  * QR 등록으로 봉사활동이 인증됨으로 휴대전화로 QR 입력 필수 입니다.
      `,
      condition: '성인',
      volunteerorganization: '광주시다함께돌봄센터4호점',
      category: '멘토링',
      registrationauthority: '경기도 광주시',
    });
  
    const newVolunteer15 = await Volunteer.create({
      title: '안전관리 및 환경정리(수업교구재준비)',
      volunteerstartdate: '2024-07-29',
      volunteerenddate: '2024-08-21',
      volunteerstarttime: '08:30:00',
      volunteerendtime: '12:30:00',
      location: '경기도 수원시 권선구 금호로 226, 602호(6층) 탑교육문화원 수원장애인평생교육센터',
      weekday: '월,화,수,목,금',
      submitstartdate: '2024-07-23',
      submitenddate: '2024-08-12',
      url: 'https://www.1365.go.kr/vols/1572247904127/partcptn/timeCptn.do?type=show&progrmRegistNo=3163386',
      state: '모집중',
      text: `
      초등학생 대상으로 여름방학 교육입니다. 안전 관리 및 환경 정리 (수업교구재준비)
  
  대학생 또는 성인 모집입니다.
  
  불참 시 최소 하루 전 연락 부탁 드립니다. 
  
  노쇼는 없길 바랍니다.
      `,
      condition: '성인',
      volunteerorganization: '(사)탑교육문화원수원장애인평생교육센터',
      category: '예방 · 안전',
      registrationauthority: '경기도 수원시',
    });
  
  } catch (error) {
    console.error('Error adding new volunteer opportunity:', error);
  }

};
export default addVolunteer;
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////난 돈을 벌 고 싶어 ////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
