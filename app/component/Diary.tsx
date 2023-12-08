"use client"
import React, { useEffect, useState } from 'react'
import * as DiaryContent from '../api/test/route'



function Diary() {
  return (
      <>
      DiaryContent.image
      console.log(DiaryContent)
      </>
  );
}

export default Diary;

// // 取得するデータの型定義
// type DiaryEntry = {
//   image: string;
//   timestamp: number;
//   text: string;
//   country: string;
//   region: string;
//   latitude: number;
//   longitude: number;
// };

// const DiaryComponent = () => {
//   const [diaryEntry, setDiaryEntry] = useState<DiaryEntry | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     async function fetchDiaryData() {
//       // クエリパラメータは適切に設定してください
//       const imageUrl = '/api/test/route'
//       const queryParams = new URLSearchParams({ image_id: '17015833339f69fa1', timestamp: '1701583335' }).toString();
//       const fullUrl = `${imageUrl}?${queryParams}`;
      
//       try {
//         const response = await fetch(fullUrl);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data: DiaryEntry = await response.json();
//         setDiaryEntry(data);
//       } catch (error) {
//         setError('Failed to load diary entry');
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     fetchDiaryData();
//   }, []);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   if (!diaryEntry) {
//     return <p>No diary entry found.</p>;
//   }

//   return (
//     <div>
//       <h1>Diary Entry</h1>
//       <img src={diaryEntry.image} alt="Diary Image" />
//       <p>{diaryEntry.text}</p>
//       <p>{diaryEntry.country}, {diaryEntry.region}</p>
//       <p>Coordinates: {diaryEntry.latitude}, {diaryEntry.longitude}</p>
//     </div>
//   );
// };

// export default DiaryComponent;
