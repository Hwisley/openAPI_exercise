import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.API_KEY_DEC;
const CANDIDATE_API_URL = "https://apis.data.go.kr/9760000/PofelcddInfoInqireService/getPofelcddRegistSttusInfoInqire";


const ELECTION_ID = 20220309;
const ELECTION_TYPECODE = 1;
let candidates;

export const getCandidates = async () => {
    try {
    const response = await axios.get(CANDIDATE_API_URL, {
        params: {
            serviceKey: API_KEY,
            pageNo: 1,
            numOfRows: 100,
            sgId: ELECTION_ID,
            sgTypecode: ELECTION_TYPECODE,
            resultType: "json"
        }
    });

    // 응답 데이터 전체 구조 출력
    console.log('응답 데이터 전체 구조:');
    console.log(JSON.stringify(response.data, null, 2));
    
    return response.data;
    } catch (error) {
    console.error('API 호출 에러:', error);
    throw error;
  }
};

// 비동기 함수를 즉시 실행
(async () => {
  try {
    candidates = await getCandidates();
    console.log('candidates 변수 (Promise 해결 후):', candidates);
  } catch (error) {
    console.error('에러 발생:', error);
  }
})();