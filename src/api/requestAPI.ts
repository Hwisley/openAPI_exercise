import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

/* 
    사용해야 하는 API는 2개입니다.
        1. 선관위 후보자 정보 
        2. 선관위 선거공약정보

        2. 선거 공약 정보의 데이터를 조회하려면 후보자ID가 필요한데, 이는 1. 후보자 정보 API를 통해 조회할 수 있습니다.
*/

const CANDIDATE_API_KEY = process.env.CANDIDATE_API_KEY;
const CANDIDATE_API_URL = "http://apis.data.go.kr/9760000/PofelcddInfoInqireService/getPoelpcddRegistSttusInfoInqire";

// essential
// let candidateServiceKey = encodeURIComponent(CANDIDATE_API_KEY);
// let candidatePageNo: number;
// let candidateNumOfRows: number;
// let candidateSgId: string;
// let candidateSgTypecode = 1;

// // optional
// let candidateResultType: "json" | "xml";
// let candidateSggName: string;
// let candidateSdName: string;

// 예비후보자 정보 조회 함수
export const fetchCandidateList = async () => {
  try {
    const response = await axios.get(CANDIDATE_API_URL, {
      params: {
        serviceKey: CANDIDATE_API_KEY, //encodeURIComponent(CANDIDATE_API_KEY ?? ''),
        pageNo: 1,
        numOfRows: 10,
        sgId: 20220309,         // 2022년 대선
        sgTypecode: 1,          // 1: 대통령 선거
        resultType: 'json',     // json 형식으로 응답
        // sggName: '종로구',   // 선택적으로 지역 구
        // sdName: '서울특별시' // 선택적으로 시/도 이름
      }
    });

    console.log('예비후보자 목록:', response.data);
  } catch (error) {
    console.error('API 호출 에러:', error);
  }
};

fetchCandidateList(); // 함수 실행



// const PLEDGE_API_KEY = process.env.PLEDGE_API_KEY;
// const PLEDGE_API_URL = "http://apis.data.go.kr/9760000/ElecPrmsInfoInqireService/getCnddtElecPrmsInfoInqire";

// // essential
// let pledgeServiceKey = encodeURIComponent(PLEDGE_API_KEY);
// let pledgePageNo: number;
// let pledgeNumOfRows: number;
// let pledgeSgId: string;
// let pledgeSgTypecode = 1;
// let pledgeCnddtId: string;

// // optional
// let pledgeResultType: "json" | "xml";


