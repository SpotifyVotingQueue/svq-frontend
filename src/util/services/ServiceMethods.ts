import { getFetcher } from "./FetcherConf";

const fetcher = getFetcher();

export function ping() {
    return fetcher.path('/api/v1/ping').method('get').create();
}