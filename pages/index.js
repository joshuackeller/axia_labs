import Head from 'next/head'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div>
      <Head>
        <title>LOCALHOST:3000 Axia Labs - Design and Dev</title>
        <link rel="icon" href="/al.jpeg" />
      </Head>
      <Navbar/>

      <div className="h-96 flex justify-center items-center">
        <div className="flex flex-col">
          <h1 className="mx-auto text-purple-400 font-black text-8xl ">
            We Build
          </h1>
          <h1 className="mx-auto text-purple-400 font-black text-8xl">
            Web Solutions
          </h1>
        </div>
      </div>

      <div className="space-x-8 flex flex-wrap mx-auto w-11/12">
        <div className="space-x-8 lg:block text-right md:flex md:flex-col w-5/12">
          <a className="bg-axiapink font-black text-sm px-6 py-4 rounded-lg shadow-sm hover:bg-gray-200
                transition duration-300">
            Schedule An Intro
          </a>
          <a className="text-gray-400 border-gray-400 border-2 px-6 py-3 rounded-lg shadow-sm
            hover:border-gray-900 hover:text-gray-900 transition duration-300">
            View Our Portfolio
          </a>
        </div>
          <p className="w-5/12 -mt-4 text-gray-400">
            We help teams design and develop custom software solutions. We've
            built everything from e-commerce to mobile apps. 
          </p>
      </div>

      <div className="mx-24">
        <div className="flex flex-wrap mx-auto justify-between mt-40 text-axiawhite">
          <div className="bg-axiablack rounded-3xl min-h-108 w-47% shadow-2xl">
            <img className="h-64 absolute -my-10 ml-6"
            src="/laptop.webp"/>
            <div className="mt-60 mx-14">
              <h1 className="font-bold text-2xl mb-5">
                What We Do
              </h1>
              <p className="font-light tracking-wide">
                We identify customer needs that a product or feature will fulfill,
                articulate what success looks like for those needs, and rally a 
                team to turn that vision into a reality.
              </p>
            </div>
          </div>
          <div className="bg-axiablack rounded-3xl min-h-108 w-47% shadow-2xl ">
            <img className="h-64 absolute -my-10"
              src="/rocket.webp"/>
            <div className="mt-60 mx-14">
              <h1 className="font-bold text-2xl mb-5">
                Who We Work With
              </h1>
              <p className="font-light tracking-wide"> 
                We work with small to medium sized startups focusing on accelerating
                their growth during any part of the startup development lifecycle.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <footer>
        
      </footer>
    </div>
  )
}
