"use client"
import React, { useEffect, useState } from 'react';
import Footer from '../component/Footer'
import Link from 'next/link';

// 取得するデータの型定義
type DiaryEntry = {
  image: string;
  timestamp: number;
  text: string;
  country: string;
  region: string;
  latitude: number;
  longitude: number;
};

const Diary = () => {
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

// Google Mapsで特定の緯度経度を開く関数
const openInGoogleMaps = (latitude:number, longitude:number) => {
  const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  window.open(url, '_blank');
};

  useEffect(() => {
    async function fetchDiaryEntries() {
      try {
        const response = await fetch('../api/test2');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDiaryEntries(data);
      } catch (error) {
        console.error('Failed to load diary entries:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDiaryEntries();
  }, []);

  // if (isLoading) {
  //   return <h1 className="text-5xl text-center">Loading diary entries...</h1>;
  // }
  if (isLoading) {
    return (  
      <div className="flex justify-center items-center h-screen bg-sky-200">
        <h1 className="text-5xl text-center">Loading Travel Diaries...</h1>
      </div>
    );
  }

  return (
    <>
    <div className="bg-rose-300 px-3 py-8 border-8 border-gray-500 ">
      <h1 className="italic font-serif font-semibold text-5xl text-center py-8">Travel Diary</h1>
      <div className="grid grid-cols-3 gap-4 content-center">
      {diaryEntries.map((entry, index) => (
        <div key={index}  className="place-content-evenly  drop-shadow-2xl" >
          <img className="flex items-center p-8 w-full drop-shadow-lg" src={entry.image} alt={`Diary entry from ${entry.country}`}  />
          <div className="text-xl px-5">
            <strong>Date : {new Date(entry.timestamp * 1000).toLocaleDateString()}</strong>
            <br></br>
            <strong>At : {entry.country}, {entry.region}</strong>
            <br></br>
            <span 
            className="cursor-pointer" 
            onClick={() => openInGoogleMaps(entry.latitude, entry.longitude)}
            title="Tap to view location on map">
                <div className="underline decolation-gray-400">
                  <strong>Coordinates : <br></br> </strong></div>
                <div className="text-base">
                ┄★latitude┄ : {entry.latitude}<br />
                ┊★longitude┊ : {entry.longitude}
                </div>
            </span>
            <br></br>
            <div className=" italic font-serif text-base py-2">
            {entry.text}
            </div>
            <br></br>
          </div>
        </div>
      ))}
      </div>
      <div className="flex justify-center">
      <Link href="../HOME">
             <button className=
                    "px-10 py-3 text-lg items-center text-sm font-medium text-white transition-colors duration-200 transform bg-rose-600 rounded-md lg:w-auto hover:bg-rose-400 focus:outline-none focus:bg-rose-500 w-30">
                    ホームに戻る
            </button>
      </Link>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Diary;
