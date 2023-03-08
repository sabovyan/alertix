import { NextResponse } from 'next/server';
// import { type NextRequest } from 'next/server'
import { getNotionPage } from '../../../../../services/notion';

export async function GET(req: Request) {
  try {
    // const data = await getNotionPage();
    const { pathname } = new URL(req.url);

    const params = pathname.split('/api/notion/pages/');

    const [_, pageId] = params;

    if (!pageId) {
      throw new Error('PAGE ID IS NOT PROVIDED');
    }

    const data = await getNotionPage(pageId);

    return NextResponse.json(data);
  } catch (err) {
    NextResponse.json(err);
  }
}
