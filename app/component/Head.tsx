import React from 'react';
import Link from 'next/link';




function Head(){
    return(
        <div className="w-full bg-center bg-cover h-screen" style={{backgroundImage: 'url(/img/HeadBackground.jpg)'}}>
            <div className="flex flex-col items-end justify-center w-full h-full bg-gray-900 bg-opacity-50  px-10 py-20">
                <h1 className="text-right text-5xl font-semibold text-white lg:text-6xl">
                    Generative Travel Diary  <br></br>
                </h1>
                <h2 className="italic font-thin font-sans text-right text-4xl font-semibold text-white lg:text-4xl">
                <br></br>
                Enrich your daily life by keeping a diary. <br></br>
                Preserve your precious memories with beautiful illustrations!
                </h2>
            </div>
            {/* <button onClick={handleButtonClick} 
                className=
                    "absolute right-7 bottom-0 w-full px-5 py-2 mt-3 mr-0 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    日記一覧を見る
            </button> */}
            <Link href="../Diary">
             <button className=
                    "absolute right-7 bottom-0 w-full px-5 py-2 mt-3 mr-0 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    日記一覧を見る
            </button>
            </Link>
        </div>
    );
}
export default Head;