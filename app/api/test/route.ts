import type { NextApiRequest, NextApiResponse } from 'next'
import { TravelDiaryEntry, fetchDiaryEntry } from '../../lib/diaryUtil'
import { NextRequest, NextResponse } from 'next/server'


// API のレスポンス型
export type DiaryEntryApiResponse = {
  diaryEntry?: TravelDiaryEntry
  debugMessage?: string
}

export async function GET (request: NextRequest) {
  const {searchParams} = new URL(request.url);
  const image_id = searchParams.get("image_id");
  const timestampString = searchParams.get("timestamp") ?? "";
  const timestamp = parseInt(timestampString, 10);
  if (image_id === null) {
    const response = {
      status: 400,
      message: "Invalid timestamp format"
    }
    return NextResponse.json(response)
  }

  if (isNaN(timestamp)) {
    const response = {
      status: 400,
      message: "Invalid timestamp format"
    }
    return NextResponse.json(response)
  }

  console.log('diaryEntryApi is called');



  const diaryEntry = await fetchDiaryEntry(image_id, timestamp);
  if (diaryEntry) {
    return NextResponse.json(diaryEntry)
  } else {
    return NextResponse.json({
      message: `Diary entry [id=${image_id}] not found`
    })
  }
}