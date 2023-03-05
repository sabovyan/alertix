import { Path } from './main';

export function fetcher(path: Path, options?: RequestInit) {
  const apiEndpoint = process.env.API_ENDPOINT;

  if (!apiEndpoint) {
    throw new Error('something went wrong', {
      cause: {
        filename: 'fetcher',
        reason: 'api endpoint not found',
      },
    });
  }

  if (!apiEndpoint.endsWith('/')) {
    throw new Error('something went wrong', {
      cause: {
        filename: 'fetcher',
        reason: "api endpoint isn't properly defined",
      },
    });
  }

  return fetch(apiEndpoint + path, {
    method: 'POST',
    ...options,
  });
}
