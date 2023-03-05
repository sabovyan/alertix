import { Path, PathMapper } from './main';

export function getPath(req: Request) {
  const { pathname } = new URL(req.url);

  const currentDirectory = '/api/';

  const params = pathname.split(currentDirectory);

  const [_, path] = params;

  return path;
}

export function isPathRegistered(value: string): value is Path {
  const paths = Object.keys(PathMapper);

  return paths.indexOf(value) !== -1;
}
