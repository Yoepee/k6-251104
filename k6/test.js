import http from "k6/http";
import { sleep } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    vus: 100, // 가상 사용자 수
    duration: "10s", // 테스트 시간
};

export default function () {
    http.get("http://localhost:8090/api/v1/posts");
    sleep(1);
}

// 하단의 추가
export function handleSummary(data) {
    return {
        "result.html": htmlReport(data),
    };
}