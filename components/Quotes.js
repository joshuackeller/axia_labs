import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from 'styled-components'
import { DoubleQuoteSerifLeft } from '@styled-icons/open-iconic/DoubleQuoteSerifLeft'





export default function Quotes() {
    return(
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-6 md:w-10/12
            w-11/12 mx-auto mt-40">

            <div className="bg-axiagray  shadow-xl rounded-3xl flex 
                justify-center items-center min-h-108 p-8">
                <div className="w-10/12 space-y-8">
                    <div>
                        <DoubleQuoteSerifLeft className="h-16"/>
                    </div>
                    <div>
                        <p className="text-gray-400 font-light tracking-wide">
                            Working with Axia Labs gave allowed us to fully outsource 
                            our entire website project. We worked to completely redesign 
                            our frontend and planned out all of our features. Our new 
                            website has increased our monthly sales by $20,000+. We still 
                            keep in contact for any updates and changes to the site as needed. 
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-between">
                        <div>
                            <h1 className="text-axiablack text-2xl font-semibold tracking-wide">
                                Marc Barkdull
                            </h1>
                            <p className="text-gray-400 text-xs font-extralight">
                                President Metcon
                            </p>
                        </div>
                        <div>
                            <img src="/metcon.svg"/>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="flex items-center">
            <div className="bg-axiagray shadow-xl rounded-3xl flex
             justify-center items-center min-h-96 p-8">
                <div className="w-10/12 space-y-8">
                    <div>
                        <DoubleQuoteSerifLeft className="h-16"/>
                    </div>
                    <div>
                        <p className="text-gray-400 font-light tracking-wide">
                            We selected Axia Labs to work on a mobile application for our 
                            medical device that helps mitigate the symptoms of Parkinson’s 
                            disease. They came highly recommended and have been able to help us 
                            develop and launch the application. 
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-between">
                        <div>
                            <h1 className="text-axiablack text-2xl font-semibold tracking-wide">
                                Brett Walker
                            </h1>
                            <p className="text-gray-400 text-xs font-extralight">
                                SVP PhotoPharmics
                            </p>
                        </div>
                        <div>
                            <img src="/photopharmics.svg"/>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
        </div>
    )
}