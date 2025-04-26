import axios from "axios";
import dotenv from "dotenv";
dotenv.config();


/*

20220309 대통령 선거 에서는 대통령 선거공약이 안가져와짐..
20170509 가능.

*/

const API_KEY = process.env.API_KEY_DEC;
const CANDIDATE_API_URL = "https://apis.data.go.kr/9760000/ElecPrmsInfoInqireService/getCnddtElecPrmsInfoInqire";

const ELECTION_ID = 20170509;
const ELECTION_TYPECODE = 1;
const CANDIDATE_ID = 100120965; // cnddtId


export const getPlege = async () => {
    try {
    const response = await axios.get(CANDIDATE_API_URL, {
        params: {
            serviceKey: API_KEY,
            pageNo: 1,
            numOfRows: 100,
            sgId: ELECTION_ID,
            sgTypecode: ELECTION_TYPECODE,
            cnddtId: CANDIDATE_ID
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

getPlege();

