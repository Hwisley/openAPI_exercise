import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.API_KEY_DEC;
const CODE_API_URL = "https://apis.data.go.kr/9760000/CommonCodeService/getCommonSgCodeList";

export const fetchCodeList = async () => {
  try {
    const response = await axios.get(CODE_API_URL, {
      params: {
        serviceKey: API_KEY,
        pageNo: 2,
        numOfRows: 100
      }
    });

    console.log('선거 목록:', response.data);
    return response.data;
  } catch (error) {
    console.error('API 호출 에러:', error);
    throw error;
  }
};

fetchCodeList(); // 함수 실행