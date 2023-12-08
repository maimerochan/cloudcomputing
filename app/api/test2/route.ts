import type { NextApiRequest, NextApiResponse } from 'next'
import { fetchAllDiaryEntries } from '../../lib/alldiaryUtil'
import { NextRequest, NextResponse } from 'next/server'


export async function GET(request: NextRequest) {
  try {
    const diaryEntries = await fetchAllDiaryEntries();
    if (diaryEntries) {
      return NextResponse.json(diaryEntries);
    } else {
      return NextResponse.json({ message: 'No diary entries found' });
    }
  } catch (error) {
    console.error('Error fetching diary entries:', error);
    return NextResponse.json({ status: 500, message: 'Internal Server Error' });
  }
}

