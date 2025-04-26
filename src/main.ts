import { getCandidates, getPledge } from "./api/SDK";

const ELECTION_ID = 20170509;
const ELECTION_TYPECODE = 1;

const TEMP_CANDIDATE_ID = 100120965;

(async () => {
    const result = await getCandidates(ELECTION_ID, ELECTION_TYPECODE);
    console.log(JSON.stringify(result, null, 2));

    const pledge = await getPledge(ELECTION_ID, ELECTION_TYPECODE, TEMP_CANDIDATE_ID);
    console.log(JSON.stringify(pledge, null, 2));
})();

// TODO 후보자 데이터 읽어올 때, 공약 다 넣어주게 처리할지 혹은 따로 처리할지 상의 필요.