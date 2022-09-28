import { getFetcher } from "./FetcherConf";

const fetcher = getFetcher();

export function ping() {
    return fetcher.path('/api/v1/ping').method('get').create();
}

export function userMe() {
    return fetcher.path('/api/v1/user/me').method('get').create();
}

export function createQueue() {
    return fetcher.path('/api/v1/party').method('post').create();
}