import { Fetcher, Middleware } from 'openapi-typescript-fetch';
import { paths } from '../../services-gen/svq-backend';

const fetcher = Fetcher.for<paths>();

const logger: Middleware = async (url, init, next) => {
  console.log(`fetching ${url}`)
  const response = await next(url, init)
  console.log(`fetched ${url}`)
  return response
}

export function getFetcher() {
    fetcher.configure({
        baseUrl: process.env.REACT_APP_BACKEND_BASE_URL,
        init: {
            headers: {
                'Content-Type': 'application/json',
            },
        },
        use: [logger]
    });
    return fetcher;
}