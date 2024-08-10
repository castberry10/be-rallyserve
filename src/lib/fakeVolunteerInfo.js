
const addVolunteer = async () => {

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

  } catch (error) {
    console.error('Error adding new volunteer opportunity:', error);
  }

};
              