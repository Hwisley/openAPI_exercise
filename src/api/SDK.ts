import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.API_KEY_DEC;
const CANDIDATE_API_URL = "https://apis.data.go.kr/9760000/PofelcddInfoInqireService/getPofelcddRegistSttusInfoInqire";
const PLEDGE_API_URL = "https://apis.data.go.kr/9760000/ElecPrmsInfoInqireService/getCnddtElecPrmsInfoInqire";

export const getCandidates = async (electionId: number, electionTypecode: number) => {
    try {
    const response = await axios.get(CANDIDATE_API_URL, {
        params: {
            serviceKey: API_KEY,
            pageNo: 1,
            numOfRows: 100,
            sgId: electionId,
            sgTypecode: electionTypecode,
            resultType: "json"
        }
    });

    // // 응답 데이터 전체 구조 출력
    // console.log('응답 데이터 전체 구조:');
    // console.log(JSON.stringify(response.data, null, 2));

    return response.data;
    
    } catch (error) {
    console.error('후보자 API 호출 에러:', error);
    throw error;
  }
};

export const getPledge = async (electionId: number, electionTypecode: number, candidateId: number) => {
    try {
        const response = await axios.get(PLEDGE_API_URL, {
            params: {
                serviceKey: API_KEY,
                pageNo: 1,
                numOfRows: 100,
                resultType: "json",     //optional
                sgId: electionId,
                sgTypecode: electionTypecode,
                cnddtId: candidateId
            }
        });
    
        // 응답 데이터 전체 구조 출력
        // console.log('응답 데이터 전체 구조:');
        // console.log(JSON.stringify(response.data, null, 2));
        
        return getPledgeItem(response.data);

        } catch (error) {
        console.error('공약 API 호출 에러:', error);
        throw error;
      }
    };

const getPledgeItem = (pledge: any) => {
    const filteredPledge = pledge.response.body.items.item;
    console.log('공약 Item 길이: ', filteredPledge.length);
    // TODO 공약 데이터 길이 > 1 일 때 처리 필요할 수도 있음.
    return filteredPledge[0];
}