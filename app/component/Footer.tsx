import React from 'react';
import Link from 'next/link';



function Footer() {
    return (
        <footer className="w-full">
            <div className="bg-black text-white flex p-10 w-full  justify-around ">
                <div>
                    <h1 className="font-semibold font-sans text-left text-6xl font-medium text-white lg:text-6xl">
                        Generative<br></br>
                        Travel Diary
                    </h1>
                    <h2 className="py-10">
                    Writing a diary prompts AI to automatically generate beautiful illustration !
                    </h2>
                </div>
                <div className="flex flex-col">
                    <h2 className="font-thin font-sans text-sm font-medium text-white mx-1 my-8">
                        お問い合わせ先<br></br>
                        ▶クラウドコンピューティング2班<br></br>
                    </h2>
                    <h3 className="font-thin font-sans text-sm font-medium text-white mx-1 mt-8">
                    メンバー<br></br>
                    ・近光真衣<br></br>
                    ・名取和玖<br></br>
                    ・進健悟<br></br>
                    ・井上朝斐<br></br>
                    </h3>
                </div>
                <div></div>
            </div>
            <div className="bg-gray-800 p-4 w-full text-white text-center">
                <h1>
                    Copyright ©︎ Cloud Computing
                </h1>
            </div>
        </footer>
    );
}

export default Footer;