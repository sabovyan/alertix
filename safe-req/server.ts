import { isPathRegistered } from './helper';
import { PathMapper } from './main';

type APIContext = any;

export async function handleServer(req: Request, params: APIContext['params']) {
  const path = params.path;

  if (!isPathRegistered(path)) {
    throw new Error('path not found');
  }

  const act = PathMapper[path];

  const result = await act(req);

  return result;
}
