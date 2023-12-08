import React from 'react';
import Link from 'next/link';



function Header() {
    return (
        <header className="header bg-gradient-to-r from-blue-900 to-black text-white flex items-center justify-between p-4 w-full">
            <img src ="/img/book.png" alt="ロゴ" className="h-10" />
            {/* <div className="flex space-x-4">
                <button><Link href="../Diary"> <a className="py-2 px-4 hover:bg-gray-700 transition-colors">アカウント</a> </Link></button>
                <button><Link href="../Diary"> <a className="py-2 px-4 hover:bg-gray-700 transition-colors">日記一覧</a> </Link></button>
            </div> */}
        </header>
    );
}

export default Header;