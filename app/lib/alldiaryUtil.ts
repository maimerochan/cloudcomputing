import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';

const TRAVEL_DIARY_ACCESS_KEY_ID="AKIA32DL2IBTHCKXNC5E"
const TRAVEL_DIARY_SECRET_ACCESS_KEY="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"

const dbClient = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.TRAVEL_DIARY_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.TRAVEL_DIARY_SECRET_ACCESS_KEY as string,
  },
  region: "us-east-1"
})

export type TravelDiaryEntry = {
    image: string
    timestamp: number
    text: string
    country: string
    region: string
    latitude: number
    longitude: number
  }

export async function fetchAllDiaryEntries() {
  const command = new ScanCommand({
    TableName: 'TravelDiaryContentDB',
  });


const output = await dbClient.send(command);
console.log(output)

  // DynamoDBのItemsは配列です
  const items = output.Items;
  if (!items) return [];

  // 各アイテムをTravelDiaryEntry型に変換
  return items.map(item => ({
    image: item.image?.S,
    timestamp: item.timestamp ? Number(item.timestamp.N) : null,
    text: item.text?.S,
    country: item.country?.S,
    region: item.region?.S,
    latitude: item.latitude ? Number(item.latitude.N) : null,
    longitude: item.longitude ? Number(item.longitude.N) : null,
  }));
}