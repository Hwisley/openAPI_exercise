import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const ELECTION_ID = 20220309;
const ELECTION_TYPECODE = 1;
const API_KEY = process.env.API_KEY_DEC;
const CANDIDATE_API_URL = "https://apis.data.go.kr/9760000/PofelcddInfoInqireService/getPofelcddRegistSttusInfoInqire";

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
    
    } catch (error) {
    console.error('API 호출 에러:', error);
    throw error;
  }
};

getCandidates();