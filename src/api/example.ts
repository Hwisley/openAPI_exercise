// 전체 import
import * as SDK from './SDK';

// 또는 특정 항목만 import
import { add, multiply, User, UserService } from './SDK';

// 함수 사용 예시
const result1 = add(5, 3);  // 8
const result2 = multiply(4, 2);  // 8

// 인터페이스 사용 예시
const user: User = {
    id: 1,
    name: "홍길동",
    email: "hong@example.com"
};

// 클래스 사용 예시
const userService = new UserService();
userService.addUser(user);
const foundUser = userService.getUser(1);

// 상수 사용 예시
console.log(SDK.API_VERSION);  // "1.0.0" 