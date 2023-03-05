import { Client } from '@notionhq/client';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export const notion = new Client({ auth: process.env.NOTION_KEY });
const database_id = process.env.NOTION_DATABASE_ID;

export async function getPagesByDataBaseId() {
  if (!database_id) {
    throw new Error('REQUIRED DATA NOT PROVIDED');
  }

  const response = await notion.databases.query({
    database_id,
  });

  return response as unknown as { results: Array<PageObjectResponse> };
}

export type DatabasePagesRequest = Awaited<
  ReturnType<typeof getPagesByDataBaseId>
>;

export async function getDatabase() {
  if (!database_id) {
    throw new Error('REQUIRED DATA NOT PROVIDED');
  }

  const response = await notion.databases.retrieve({
    database_id,
  });

  return response;
}

export const getNotionPage = async (id: string) => {
  if (!database_id) {
    throw new Error('REQUIRED DATA NOT PROVIDED');
  }

  const response = await notion.pages.retrieve({
    page_id: id,
  });

  return response as PageObjectResponse;
};

export type NotionPagesRequest = Awaited<ReturnType<typeof getNotionPage>>;
