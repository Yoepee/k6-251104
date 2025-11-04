import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        { duration: '5m', target: 3000 }
    ],
};

export default function () {
    http.get('http://localhost:8090/api/v1/posts');
    sleep(1);
}