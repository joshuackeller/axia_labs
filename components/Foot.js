import Link from 'next/link'
import { MediumSquare, LinkedinSquare, Youtube } from '@styled-icons/boxicons-logos'


export default function Foot() {
    return(
        <div className="mb-14">
            <div className="md:w-10/12 w-11/12 mx-auto flex flex-wrap mt-40 shadow-2xl rounded-2xl">
                <div className="bg-axiablack min-h-72 md:w-7/12 m-0 md:rounded-l-2xl md:rounded-r-none
                flex justify-center items-center rounded-2xl">
                    <div className="w-10/12 space-y-4 md:mt-0 mt-10">
                        <h1 className="text-axiawhite text-2xl font-bold tracking-wide">
                            Schedule A Call
                        </h1>
                        <p className="text-axiawhite font-light ">
                            We’d love to hear more about your idea and see if we are a good fit.
                            Book us for an introductory consultation to chat about your project. 
                            <span className="font-semibold"> Free of charge </span> and no 
                            strings attached.
                        </p>
                        <p className="text-axiawhite font-light ">
                            We look forward to hearing more about your idea.
                        </p>
                        <div className="md:hidden flex justify-center p-6 pb-16">
                            <Link href="/">
                                <a className="bg-axiapink font-black text-sm px-6 py-4 rounded-lg shadow-sm
                                    hover:bg-fadedpink transition duration-300">
                                Schedule An Intro
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-black min-h-72 w-5/12 m-0 md:flex justify-center items-center 
                rounded-r-2xl hidden ">
                    <Link href="/">
                        <a className="bg-axiapink font-black text-sm px-6 py-4 rounded-lg shadow-sm
                             hover:bg-fadedpink transition duration-300">
                        Schedule An Intro
                        </a>
                    </Link>
                </div>
            </div>

            <div className="grid md:grid-cols-5 md:gap-2 grid-cols-2 gap-8 md:w-10/12 w-11/12 mx-auto mt-36">
                <div className="col-span-2">
                    <h1 className="font-black text-logo mb-4">
                        Axia Labs
                    </h1>
                    <div className="text-gray-400 font-light space-y-1 w-11/12">
                        <p>
                            A custom web design and development agency focused on accelerating business growth.
                        </p>
                    </div>
                    <div className="mt-6">
                        <Link href="/">
                        <a className="bg-axiapurple font-black text-sm px-6 py-4 rounded-lg shadow-sm 
                            hover:bg-fadedpurple w-10/12 transition duration-300 text-white">
                            Lets Chat
                        </a>
                        </Link>
                    </div>
                </div>
                <div className="md:col-span-1 col-span-2">
                    <h1 className="text-axiablack font-bold text-xl mb-4">
                        Resources
                    </h1>
                    <div className="text-gray-400 font-light space-y-1">
                        <p>
                            Home
                        </p>
                        <p>
                            Portfolio
                        </p>
                        <p>
                            Privacy Policy
                        </p>
                    </div>
                </div>
                <div className="md:col-span-1 col-span-2">
                    <h1 className="text-axiablack font-bold text-xl mb-4">
                        About
                    </h1>
                    <div className="text-gray-400 font-light space-y-1">
                        <p>
                            What We Do
                        </p>
                        <p>
                            Who We Work With
                        </p>
                        <p>
                            Team
                        </p>
                    </div>
                </div>
                <div className="md:col-span-1 col-span-2">
                    <h1 className="text-axiablack font-bold text-xl mb-4">
                        Contact
                    </h1>
                    <div className="text-gray-400 font-light space-y-1">
                        <p>
                            Provo, UT
                        </p>
                        <p>
                            925-200-4150
                        </p>
                        <p>
                            hello@axialabs.com
                        </p>
                    </div>
                </div>
            </div>

            <div className="md:mt-14 mt-10 md:w-10/12 w-11/12 mx-auto">
                <div className="h-0.5 bg-gray-200"> 
                </div>
                <div className="md:block flex justify-center">
                    <div className="mt-10 flex md:justify-between md:flex-row flex-col-reverse">
                        <div className="md:-mb-0 -mb-12">
                            <p className="text-gray-400 font-extralight text-xs">
                                &copy; 2021 Axia Labs. All Rights Reserved.
                            </p>
                        </div>
                        <div className="space-x-2 md:block flex justify-center md:mb-0 mb-6">
                            <Link href="https://medium.com/@axia-labs">
                                <a >
                                    <span className="bg-gray-400 hover:bg-gray-300 p-1.5 rounded-sm
                                        transition duration-300">
                                                <MediumSquare className="h-5" 
                                                style={{color: 'white'}}/>
                                    </span>
                                </a>
                            </Link>                            
                            <Link href="https://www.linkedin.com/company/axia-labs/">
                            <a>
                                <span className="bg-gray-400 hover:bg-gray-300 p-1.5 rounded-sm 
                                    transition duration-300">
                                        <LinkedinSquare className="h-5" 
                                        style={{color: 'white'}}/>
                                </span>
                            </a>
                            </Link>
                            <Link href="https://www.youtube.com/channel/UCPsjBaiUCmi4zIMiegnWNBQ/featured">
                            <a>
                                <span className="bg-gray-400 hover:bg-gray-300 p-1.5 rounded-sm 
                                    transition duration-300">
                                        <Youtube className="h-5" 
                                        style={{color: 'white'}}/>
                                </span>
                            </a>
                            </Link>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}