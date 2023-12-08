"use client"
import Image from 'next/image'
import Header from '../component/Header'
import Head from '../component/Head'
import Footer from '../component/Footer'
//import Diary from '../component/Diary'
//import Buttons from '../component/Buttons'
import Method from '../component/Method'
//ホーム画面

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1">
      <Header></Header>
      <Head></Head>
      {/* <Buttons></Buttons> */}
      <Method></Method>
      <Footer></Footer>
    </main>
  )
}
