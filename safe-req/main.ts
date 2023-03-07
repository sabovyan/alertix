import {
  getDatabase,
  getNotionPage,
  getPagesByDataBaseId,
} from '@/services/notion';

function getRequestBody(req: Request) {
  const input = req.json();

  return input;
}

export const PathMapper = {
  test: () => 'OK!',
  databasepages: getPagesByDataBaseId,
  database: getDatabase,
  getNotionPageById: async (req: Request) => {
    const input = await getRequestBody(req);

    const pageId = input.id;

    if (!pageId) {
      throw new Error('PAGE ID IS NOT PROVIDED');
    }

    return getNotionPage(pageId);
  },
};

export type Path = keyof typeof PathMapper;
