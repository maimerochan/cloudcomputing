import { DynamoDBClient, GetItemCommand } from '@aws-sdk/client-dynamodb'

const TRAVEL_DIARY_ACCESS_KEY_ID="AKIA32DL2IBTHCKXNC5E"
const TRAVEL_DIARY_SECRET_ACCESS_KEY="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"

const dbClient = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.TRAVEL_DIARY_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.TRAVEL_DIARY_SECRET_ACCESS_KEY as string,
  },
  region: "us-east-1"
})

console.log('DynamoDB Client initialized with:', {
  accessKeyId: process.env.TRAVEL_DIARY_ACCESS_KEY_ID,
  // secretAccessKeyはログに出力しないでください（セキュリティ上の理由から）
});

export type TravelDiaryEntry = {
  image: string
  timestamp: number
  text: string
  country: string
  region: string
  latitude: number
  longitude: number
}

// アイテムを取得する
export async function fetchDiaryEntry(image_id: string, timestamp: number): Promise<TravelDiaryEntry | undefined> {
  console.log(`https://travel-diary-image-bucket.s3.amazonaws.com/${image_id}.jpg`)
  const command = new GetItemCommand({
    TableName: 'TravelDiaryContentDB',
    Key: {
      // image: { S: image + ".jpg" }, // パーティションキー
      // timestamp:  {N: timestamp.toString() } // ソートキー
      image: { S: `https://travel-diary-image-bucket.s3.amazonaws.com/${image_id}.jpg` }, // パーティションキー
      timestamp:  {N: timestamp.toString() } // ソートキー
    },
  });

  const output = await dbClient.send(command)
  console.log(output)
  const item = output.Item
  if (item == undefined) return undefined
  return {
    image: item['image']['S'],
    timestamp: Number(item['timestamp']['N']),
    text: item['text']['S'],
    country: item['country']['S'],
    region: item['region']['S'],
    latitude: Number(item['latitude']['N']),
    longitude: Number(item['longitude']['N']),
  } as TravelDiaryEntry
}
