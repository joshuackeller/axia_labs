import Link from 'next/link'

export default function InfoBlocks() {
    return(
        <div>
            <div className="mx-auto w-10/12">
            <div className="flex flex-wrap mx-auto justify-between mt-40 text-axiawhite
            md:space-y-0 space-y-16">
                <div className="bg-axiablack rounded-3xl min-h-108 md:min-w-64 md:w-47% shadow-2xl
                    min-w-64 w-12/12 pb-10">
                    <img className="max-h-64 absolute -my-10 ml-6"
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
                <div className="bg-axiablack rounded-3xl min-h-108 md:min-w-64 md:w-47% shadow-2xl 
                    min-w-64 w-12/12 pb-10">
                    <img className="max-h-64 max-w-80 absolute -my-10"
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

        <div className="flex justify-center md:block">
        <div className="mt-12 mx-auto grid md:grid-cols-3 md:gap-8 md:w-10/12
            grid-cols-1 gap-8">
            <div className="bg-axiagray min-h-96 pb-10 md:max-w-84 shadow-xl rounded-3xl
                w-10/12 mx-auto md:mx-0 md:w-full">
                <div className="flex md:justify-center mx-10">
                    <img  className="md:h-28 md:mt-16 absolute
                        h-20 mt-24"
                    src="/icon-services.webp"/>
                </div>
                <div className="mt-48 mx-10">
                    <h1 className="text-2xl font-bold tracking-wide">
                    Services
                    </h1>
                    <ol className="text-gray-400 mt-4">
                        <li>
                            1. Web/Mobile design
                        </li>
                        <li>
                            2. Web/Moblie development
                        </li>
                        <li>
                            3. Custom WordPress
                        </li>
                        <li>
                            4. E-commerce
                        </li>
                    </ol>
                </div>
            </div>
            <div className="bg-axiagray min-h-96 pb-10 md:max-w-84 shadow-xl rounded-3xl
                w-10/12 mx-auto md:mx-0 md:w-full">
            <div className="flex md:justify-center mx-10">
                <img  className="md:h-28 md:mt-16 absolute
                    h-20 mt-24"
                src="/icon-pricing.webp"/>
            </div>
            <div className="mt-48 mx-10">
                <h1 className="text-2xl font-bold tracking-wide">
                Pricing
                </h1>
                <p className="text-gray-400 mt-4">
                We charge a fixed retainer or hourly for every project.
                Time is tracked and logged each day.
                </p>
            </div>
            </div >
            <div className="bg-axiagray min-h-96 pb-10 md:max-w-84 shadow-xl rounded-3xl
                w-10/12 mx-auto md:mx-0 md:w-full">
            <div className="flex md:justify-center mx-10">
                <img  className="md:h-28 md:mt-16 absolute
                    h-20 mt-24"
                src="/icon-availability.webp"/>
            </div>
            <div className="mt-48 mx-10">
                <h1 className="text-2xl font-bold tracking-wide">
                Availability
                </h1>
                <p className="text-gray-400 mt-4">
                We generally book a month out in advance and work with clients
                for 3-4 months.
                </p>
            </div>
            </div>
        </div>
        </div>

        <div className="w-10/12 mx-auto flex flex-wrap md:flex-row flex-col mt-40 rounded-2xl 
            shadow-2xl">
            <div className="bg-axiablack md:min-h-188 md:w-7/12 m-0 md:rounded-l-2xl
            flex justify-center items-center md:rounded-tr-none rounded-t-2xl ">
                <div className="w-10/12 space-y-6 md:mt-0 mt-10">
                    <h1 className="text-axiawhite text-2xl font-bold tracking-wide">
                    Use Cases
                    </h1>
                    <div>
                        <div className="flex justify-end ">
                            <p className="bg-axiapurple font-bold text-xs px-4 py-1 shadow-sm 
                                transition duration-300 text-white absolute rounded-full mt-4 mr-4">
                                Consulting
                            </p>
                        </div>
                        <Link href="/">
                            <a>
                                <img className="rounded"
                                src="/summit.webp"/>
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/">
                            <a>
                            <h1 className="text-axiawhite text-2xl font-bold tracking-wide">
                            Summit Leadership Group
                            </h1>
                            </a>
                        </Link>
                    </div>
                    <p className="text-gray-400 font-light tracking-wide">
                    We designed a professional and timeless website to help promote
                    the leadership engagements of Summit Leadership Group. With Fortune
                    500 consulting, we wanted to make sure our website matched the same 
                    level of talent that was being delivered.
                    </p>
                    <Link href="/">
                        <a className="text-axiapink text-sm font-extrabold block md:pb-0 pb-16">
                            SEE USE CASE 
                        </a>
                    </Link>
                </div>
            </div>
            <div className="bg-black md:min-h-188 md:w-5/12 m-0 flex justify-center items-center 
            md:rounded-r-2xl md:rounded-bl-none rounded-b-2xl">
                <video className="md:w-9/12 md:my-0 my-10 w-11/12"
                autoPlay muted loop name="Penguin Brothers">
                    <source src="/pb3.mov"/>
                </video>
            </div>
        </div>
      </div>
    )
}