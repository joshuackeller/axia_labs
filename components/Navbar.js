import Link from 'next/link'

export default function Navbar() {
    return(
        <div className="mx-24 my-8 flex justify-between bg-transparent">
            <div>
            <h1 className="font-black text-logo">Axia Labs</h1>
            </div>
            <div className="space-x-8">
                <Link href="/">
                    <a className="text-gray-400 hover:text-axiablack transition duration-300 font-light 
                    tracking-wide">
                        Portfolio
                    </a>
                </Link>
                <Link href="/">
                    <a className="bg-axiapink font-black text-sm px-6 py-3 rounded-lg shadow-sm hover:bg-fadedpink
                        transition duration-300">
                        Contact Us
                    </a>
                </Link>
            </div>
        </div>
    )
}