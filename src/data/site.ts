export type Solution = {
  number: string;
  title: string;
  english: string;
  short: string;
  href: string;
  icon: 'factory' | 'chart' | 'spark' | 'cad';
  problem: string;
  technologies: string[];
  capabilities: string[];
  outcomes: string[];
  approach: string;
};

export const solutions: Solution[] = [
  {
    number: '01',
    title: '제조 DX & 스마트공장',
    english: 'Manufacturing DX',
    short: '생산·설비·품질 업무와 데이터를 연결하고, 현장에 맞는 시스템을 설계합니다.',
    href: '/solutions/#manufacturing-dx',
    icon: 'factory',
    problem: '생산, 설비, 품질 정보가 여러 도구와 수작업 기록으로 나뉘면 현황을 파악하고 업무를 개선하기 어렵습니다.',
    technologies: ['업무·데이터 흐름 분석', '시스템 간 데이터 연계', '현장 중심 웹 애플리케이션'],
    capabilities: ['제조 정보시스템 구축', '업무 화면과 데이터 흐름 개선', '기존 시스템 통합 검토'],
    outcomes: ['현장 정보의 일관된 관리', '반복 입력과 확인 업무의 감소 가능성', '데이터를 활용한 운영 개선 기반'],
    approach: '현장 담당자와 업무 흐름을 확인하고 데이터·연계 제약을 검토한 뒤, 적용 범위와 단계별 구축 방안을 함께 정합니다.',
  },
  {
    number: '02',
    title: '산업 AI · ML/DL',
    english: 'Industrial AI',
    short: '제조 데이터를 분석해 품질·설비·공정 업무의 판단을 지원하는 모델을 개발합니다.',
    href: '/solutions/#industrial-ai',
    icon: 'chart',
    problem: '데이터가 쌓여도 분석 기준과 현장 업무 연결이 정리되지 않으면 예측 결과를 의사결정에 활용하기 어렵습니다.',
    technologies: ['Machine Learning', 'Deep Learning', '데이터 전처리·평가·배포 설계'],
    capabilities: ['제조 데이터 분석', '분석·예측 모델 개발', '기존 시스템 연동 검토'],
    outcomes: ['데이터 기반 판단 지원', '이상 징후와 품질 편차 검토', '운영 개선을 위한 분석 기반'],
    approach: '데이터 접근성과 품질, 현장 판단 절차를 함께 살펴보고, 업무에 의미 있는 기준을 합의한 뒤 모델의 적용 가능성을 검증합니다.',
  },
  {
    number: '03',
    title: '생성형 AI & Agent',
    english: 'Generative AI & Agents',
    short: '기업 문서와 사내 지식을 활용하는 검색·요약·업무 지원 애플리케이션을 설계합니다.',
    href: '/solutions/#generative-ai',
    icon: 'spark',
    problem: '업무 지식이 문서와 시스템에 흩어져 있으면 필요한 정보를 찾고 정확성을 확인하는 데 시간이 듭니다.',
    technologies: ['LLM 애플리케이션', 'RAG 기반 검색', '승인·권한을 고려한 업무 자동화'],
    capabilities: ['사내 문서 검색·요약', '업무별 Agent 설계', '기존 시스템 연계 PoC'],
    outcomes: ['정보 탐색과 문서 활용 지원', '반복적인 업무 흐름의 자동화 가능성', '사람이 검토하는 AI 활용 절차'],
    approach: '먼저 적용할 업무와 사용할 문서·시스템을 정하고, 접근 권한과 결과 검토 방식을 설계해 작은 범위부터 검증합니다.',
  },
  {
    number: '04',
    title: '엔지니어링 AI & 설계 자동화',
    english: 'Engineering AI',
    short: 'CATIA V5 모델과 설계 변경 업무를 분석하고 반복 작업을 줄이는 방법을 연구·개발합니다.',
    href: '/solutions/#engineering-ai',
    icon: 'cad',
    problem: '기존 CAD 모델의 구조와 변경 가능한 요소를 파악하고 유사한 변경을 반복하는 작업에는 설계자의 시간과 검토가 필요합니다.',
    technologies: ['CATIA V5 Automation 검토', '모델·Feature 정보 읽기', '승인 기반 변경·결과 확인 흐름'],
    capabilities: ['모델 정보와 변경 후보 확인', '변경 계획 검토', '사전 합의된 범위의 실행 및 확인'],
    outcomes: ['반복 변경 업무의 보조', '변경 과정의 검토 가능성 향상', '재사용 가능한 설계 업무 흐름의 탐색'],
    approach: '모델별 접근 가능 범위를 먼저 확인합니다. 변경 계획을 검토하고 승인한 뒤 제한된 작업을 실행하며, 결과를 다시 읽어 확인하는 방식으로 개발 중입니다.',
  },
];

export const projectSteps = [
  { number: '01', title: '현황 분석', text: '현장 업무, 데이터, 기존 시스템과 제약을 함께 파악합니다.' },
  { number: '02', title: '기술 검토', text: '문제에 맞는 접근 방법과 적용 가능 범위를 검토합니다.' },
  { number: '03', title: 'PoC · 설계', text: '작은 범위에서 가능성을 검증하고 목표·구조를 구체화합니다.' },
  { number: '04', title: '구축', text: '합의한 범위에 맞춰 소프트웨어와 시스템을 구현합니다.' },
  { number: '05', title: '적용 및 개선', text: '현장 피드백과 운영 결과를 확인하며 다음 개선을 정합니다.' },
];

export const serviceItems = [
  { number: '01', title: 'IT · AI 컨설팅', text: '현장의 과제와 기존 환경을 분석해 실행 가능한 DX·AI 적용 범위를 함께 정의합니다.' },
  { number: '02', title: '제조 정보시스템 구축', text: '현장 업무와 데이터 흐름에 맞춘 제조 소프트웨어와 시스템 연계를 설계·구축합니다.' },
  { number: '03', title: '스마트공장 구축 및 고도화', text: '생산·설비·품질 업무의 디지털화와 기존 운영 시스템의 개선을 지원합니다.' },
  { number: '04', title: 'ML/DL 기반 AI 모델 개발', text: '데이터와 업무 목표를 검토해 분석·예측 모델과 현장 적용 방안을 개발합니다.' },
  { number: '05', title: 'LLM/Agent 업무 시스템 개발', text: '기업 문서와 시스템을 연결하는 검색, 요약, 업무 지원 애플리케이션을 구현합니다.' },
  { number: '06', title: 'CATIA · 설계 자동화', text: 'CATIA V5 중심으로 반복 설계 업무와 모델 변경 지원의 적용 가능성을 검토합니다.' },
  { number: '07', title: 'AI PoC · 기술 검증', text: '현장 데이터와 요구 조건을 기준으로 기술의 적용 가능성을 제한된 범위에서 확인합니다.' },
  { number: '08', title: '시스템 고도화 · 유지보수', text: '기존 애플리케이션의 기능과 연계를 개선하고 지속적인 운영 지원 범위를 협의합니다.' },
];

export const navItems = [
  { label: '홈', href: '/' },
  { label: '솔루션', href: '/solutions/' },
  { label: '구축 경험', href: '/experience/' },
  { label: '제품·연구', href: '/products/' },
  { label: '서비스', href: '/services/' },
  { label: '회사 소개', href: '/about/' },
  { label: '문의', href: '/contact/' },
];
