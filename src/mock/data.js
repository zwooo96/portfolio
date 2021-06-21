import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '이 지우 Jiwoo Yi', // e.g: 'Name | Developer'
  lang: 'kr', // e.g: en, es, fr, jp
  description: '안녕하세요, 반갑습니다.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '안녕하세요, 도전을 즐기는',
  name: '백엔드 개발자',
  subtitle: '이지우의 포트폴리오입니다',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile_me.jpg',
  paragraphOne: '"웹과 앱 개발에 관심이 많고, 세상을 바꾸는 개발자가 되고 싶습니다. 🌎🙋‍♀️"',
  paragraphTwo:
    '새로운 가치를 만들어 낼 수 있다는 매력에 빠져 개발을 시작하게 되었습니다. 불편함을 해소하여 많은 사람에게 도움을 주고 싶어 사람들이 필요로 하는 것에 대해 항상 고민합니다. 도전을 좋아해서 새로운 것을 배울 때 거리낌이 없으며, 오랜 고민 끝에 좋은 결과물이 나왔을 때 가장 성취감을 느낍니다.',
  paragraphThree: '👇 아래 버튼을 클릭하시면 더 자세한 포트폴리오를 보실 수 있습니다.',
  resume: 'https://www.notion.so/Jiwoo-Yi-689d6bc1a79d4ea1813fac3c6705382a', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'codoing.png',
    title: 'Co-doing',
    info: '📅 개발기간 : 2021-01-02 ~ 2021-04-18',
    info2: '👩‍💻 사용언어 : Java, HTML, CSS, JavaScript',
    url: 'http://www.co-doing.com/main.do',
    repo: 'https://github.com/RG-RG/user', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'marketcollie.png',
    title: '마켓콜리 Market Collie',
    info: '📅 개발기간 : 2020-08-24 ~ 2020-10-18',
    info2: '👩‍💻 사용언어 : Java, HTML, CSS, JavaScript',
    url: 'https://github.com/zwooo96/marketcollie_user',
    // repo: 'https://github.com/zwooo96/marketcollie_user', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hotelluna_final.png',
    title: '호텔 루나 Hotel Luna',
    info: '📅 개발기간 : 2020-07-27 ~ 2020-08-20',
    info2: '👩‍💻 사용언어 : Java, HTML, CSS, JavaScript',
    url: 'https://github.com/zwooo96/hotelluna',
    // repo: 'https://github.com/zwooo96/hotelluna', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'minipharmacy_final.png',
    title: '미니약국',
    info: '📅 개발기간 : 2019-01-16 ~ 2019-02-14',
    info2: '👩‍💻 사용언어 : Swift',
    url: 'https://apps.apple.com/kr/app/%EB%AF%B8%EB%8B%88%EC%95%BD%EA%B5%AD/id1469902368',
    repo: 'https://github.com/zwooo96/mini-pharmacy', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'dlwldn385@naver.com',
  btn: '✉ Email',
  email: 'dlwldn385@naver.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'vimeo',
      url: 'https://velog.io/@zwooo96',
    },
    //    {
    //      id: nanoid(),
    //      name: 'codepen',
    //      url: '',
    //    },
    //    {
    //      id: nanoid(),
    //      name: 'linkedin',
    //      url: '',
    //    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/zwooo96',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
