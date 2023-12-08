import React from 'react';
import Link from 'next/link';



function Method() {
    return (
        <div className="bg-sky-100">
            <div className="underline decolation-gray-400 font-serif italic text-5xl text-center text-bg-black py-10">
                How to Write a Diary?
            </div>
            <div className="italic font-serif grid grid-cols-2 gap-4 place-items-center py-5 px-5 text-3xl slide-in-left">
                <img src ="/img/location.jpg" alt="位置情報" className="w-1/2 shadow-md ml-24"  />
                <h1 className="self-center  ">① Send your location information to Travel Diary on LINE !</h1>
            </div>
            <div className="italic font-serif grid grid-cols-2 gap-4 h-50 place-items-center py-5 px-5 text-3xl ">
                <img src ="/img/diary.jpg" alt="ロゴ" className="w-1/2  shadow-md mr-24" />
                <h1 className="self-center "> ② Next, share the events that happened to you today !</h1>
            </div>
            <div className="italic font-serif grid grid-cols-2 gap-4 h-50 place-items-center py-5 px-5 text-3xl slide-in-left">
                <img src ="/img/picture.jpg" alt="絵" className="w-1/2  shadow-md ml-24" />
                <h1 className="self-center">③ Based on your wonderful diary entries, a picture will be created !</h1>
            </div>
        </div>
    );
}

export default Method;