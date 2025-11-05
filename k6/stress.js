import http from "k6/http";
import { check } from "k6";

export const options = {
    stages: [
        { duration: "1m", target: 20 }, // 1분 동안 가상 사용자 10명까지 증가
        { duration: "1m", target: 20 }, // 1분 동안 20명 유지
        { duration: "1m", target: 40 }, // 1분 동안 40명으로 증가
        { duration: "1m", target: 40 }, // 1분 동안 40명 유지
        { duration: "1m", target: 50 }, // 1분 동안 50명으로 증가
        { duration: "1m", target: 50 }, // 1분 동안 50명으로 유지
    ],

    thresholds: {
        http_req_duration: ["p(95)<300"], // 95%의 요청이 300ms 이하로 응답
    },
};

export default function () {
    const response = http.get("http://localhost:8090/api/v1/posts");
    check(response, {
        "success": (res) => res.status === 200,
    });
}