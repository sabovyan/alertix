import { getDatabase, getPagesByDataBaseId } from '@/services/notion';

export const PathMapper = {
  test: () => 'OK!',
  databasepages: getPagesByDataBaseId,
  database: getDatabase,
};

export type Path = keyof typeof PathMapper;
