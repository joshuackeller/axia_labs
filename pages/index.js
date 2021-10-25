import Head from 'next/head'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Employees from '../components/Employees'
import Header from '../components/Header'
import InfoBlocks from '../components/InfoBlocks'
import Quotes from '../components/Quotes'
import Foot from '../components/Foot'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Axia Labs - Design and Dev</title>
        <link rel="icon" href="/al.jpeg" />
      </Head>

      <Navbar/>

      <Header/>

      <InfoBlocks/>

      <Employees/>
      
      <Quotes/>
      
      <Foot/>
    </div>
  )
}
