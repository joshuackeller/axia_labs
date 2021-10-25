import Link from 'next/link'

export default function Header() {
    return(
        <div>
            <div className="md:h-108 h-64 flex justify-center items-center md:-mb-0 -mb-10">
                <div className="flex flex-col">
                <h1 className="mx-auto text-axiapurple text-center font-black md:text-header tracking-tight
                    text-headersmall">
                    We Build<br />Web &nbsp; &nbsp; &nbsp; &nbsp;
                    <img className="absolute md:h-56 md:ml-56 md:-mt-40
                        sm:h-28 sm:ml-32 sm:-mt-24 h-28 ml-52 -mt-24"
                    src="/stack.webp"/>
                     Solutions
                </h1>
                </div>
            </div>
            
            <div className="md:grid md:grid-cols-2 md:gap-8 md:space-y-0 flex flex-col-reverse
                space-y-10 mt-20">
                <div className="md:flex md:flex-wrap md:justify-end md:space-x-6 md:space-y-10
                    space-y-4 ">
                    <div className="flex justify-center md:block md:mt-10">
                        <Link href="/">
                            <a className="bg-axiapink font-black text-sm px-6 py-4 rounded-lg shadow-sm hover:bg-fadedpink
                                transition duration-300">
                            Schedule An Intro
                            </a>
                        </Link>
                    </div>
                    <div className="flex justify-center md:block">
                        <Link href="/">
                            <a className="text-gray-400 border-gray-400 border-2 px-6 py-3 rounded-lg shadow-sm
                            hover:border-gray-900 hover:text-axiablack transition duration-300">
                            View Our Portfolio
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center md:block p-10">
                    <p className="md:w-10/12 w-11/12 md:-mt-4 text-gray-400 md:-mb-5 mb-5 text-center md:text-left
                        md:block">
                        We help teams design and develop custom software solutions. We've
                        built everything from e-commerce to mobile apps. 
                    </p>
                </div>
            </div>
      </div>
    )
}