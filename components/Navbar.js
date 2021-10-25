import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import { ThreeBars } from '@styled-icons/octicons'
import { X } from '@styled-icons/boxicons-regular'


export default function Navbar() {

    const [isOpen, setOpen] = useState(false)


    return(
        <div>
            <div className="flex justify-center items-center ">
                <div className="w-11/12 my-8 flex justify-between bg-transparent">
                    <div>
                    <Link href="/">
                        <a>
                            <h1 className="font-black text-logo">Axia Labs</h1>
                        </a>
                    </Link>
                    </div>
                    <div className="space-x-8 hidden md:block">
                        <Link href="/">
                            <a className="text-gray-400 hover:text-axiablack transition duration-300 font-light 
                            tracking-wide text-sm">
                                Portfolio
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="bg-axiapink font-bold text-sm px-8 py-3 rounded-lg shadow-sm hover:bg-fadedpink
                                transition duration-300">
                                Contact Us
                            </a>
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <div className="md:hidden"
                            style={{
                                display: isOpen ? 'none' : 'block'
                            }}>
                            <ThreeBars className="h-5"
                            styled={{color: 'black'}}
                            onClick={() => setOpen(true)}/>
                        </div>
                        <div className="md:hidden"
                            style={{
                                display: isOpen ? 'block' : 'none'
                            }}>
                            <X className="h-7"
                            onClick={() => setOpen(false)}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden">
                <div className="transform transition scale-y-100 duration-500"
                style={{
                    display: isOpen ? 'block' : 'none'
                }}>
                    <div className="text-gray-400 hover:text-axiablack text-center transition duration-300 font-light 
                                tracking-wide py-3 text-sm">
                        Portfolio
                    </div>
                    <div className="bg-axiapink font-bold text-sm px-8 text-center shadow-sm hover:bg-fadedpink
                                    transition py-3 duration-300 ">
                        Contact Us
                    </div>
                </div>
            </div>
        </div>
    )
}

