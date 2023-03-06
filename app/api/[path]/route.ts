import { handleServer } from '@/safe-req/server';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const result = await handleServer(req);

  return NextResponse.json(result);
}
