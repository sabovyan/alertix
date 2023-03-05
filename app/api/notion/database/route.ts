import { NextResponse } from 'next/server';
import { getDatabase } from '../../../../services/notion';

// todo not used
export async function GET() {
  try {
    const data = await getDatabase();

    return NextResponse.json(data);
  } catch (err) {
    NextResponse.json(err);
  }
}
