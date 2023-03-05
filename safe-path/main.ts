import { getPagesByDataBaseId } from '@/services/notion';
import { getPath, isPathRegistered } from './helper';

export const PathMapper = {
  test: () => 'OK!',
  databasepages: getPagesByDataBaseId,
};

export type Path = keyof typeof PathMapper;
