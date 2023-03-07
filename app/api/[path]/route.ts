import { handleServer } from '@/safe-req/server';
import { NextResponse } from 'next/server';

export type APIContext = { params: { path: string } };

export async function POST(req: Request, { params }: APIContext) {
  const result = await handleServer(req, params);

  return NextResponse.json(result);
}
