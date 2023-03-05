import { getPath, isPathRegistered } from './helper';
import { PathMapper } from './main';

export async function handleServer(req: Request) {
  const path = getPath(req);

  if (!isPathRegistered(path)) {
    throw new Error('path not found');
  }

  const act = PathMapper[path];

  const result = await act();

  return result;
}
