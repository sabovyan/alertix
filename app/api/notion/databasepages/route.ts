import { NextResponse } from 'next/server';
// import { type NextRequest } from 'next/server'
import { getPagesByDataBaseId } from '../../../../services/notion';

export async function GET() {
  try {
    const data = await getPagesByDataBaseId();

    return NextResponse.json(data);
  } catch (err) {
    NextResponse.json(err);
  }
}
