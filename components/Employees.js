import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Employees() {

    return(
        <div className="mt-40 md:w-10/12 w-11/12 grid md:grid-cols-3 grid-cols-1 mx-auto">

          <div className="col-span-1 md:hidden mb-5">
            <div className="text-axiablack">
              <h1 className="text-2xl font-bold tracking-wide mb-4">
                Our Team
              </h1>
              <p>
                We come from a diverse background of consulting and tech companies with experience
                from PwC, Amazon Web Services, and ExxonMobil.
              </p>
            </div>
          </div>

        <div className="col-span-2">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 mr-10">
            <div className="bg-axiablack h-20 rounded-2xl shadow-2xl flex flex-wrap
              lg:justify-center items-center space-x-4 min-w-72">
              <img className="rounded-full h-14 lg:ml-0 ml-6"
              src="Demitri.webp"/>
              <div className="w-32 ">
                <p className="text-axiawhite font-bold text-sm">
                  Demitri Haddad
                </p>
                <p className="text-xs font-extralight text-axiapink">
                  Design Lead
                </p>
              </div>
              <div className="ml-10">
              <Link href="https://www.linkedin.com/in/demitri-haddad/">
                <a>
                  <FontAwesomeIcon className="h-10"
                  style={{color: 'white'}} icon={faLinkedin}/>
                </a>
              </Link>  
              </div>
            </div>
            <div className="bg-axiablack h-20 rounded-2xl shadow-2xl flex flex-wrap
              lg:justify-center items-center space-x-4 min-w-72">
              <img className="rounded-full h-14 lg:ml-0 ml-6"
              src="Robert.webp"/>
              <div className="w-32">
                <p className="text-axiawhite font-bold text-sm">
                  Robert Upchurch
                </p>
                <p className="text-xs font-extralight text-axiapink">
                  Development Lead
                </p>
              </div>
              <Link href="https://www.linkedin.com/in/robert-upchurch/">
                <a>
                  <FontAwesomeIcon className="h-10"
                  style={{color: 'white'}} icon={faLinkedin}/>
                </a>
              </Link>  
            </div>
            <div className="bg-axiablack h-20 rounded-2xl shadow-2xl flex flex-wrap
              lg:justify-center items-center space-x-4 min-w-72">
              <img className="rounded-full h-14 lg:ml-0 ml-6"
              src="Erin.webp"/>
              <div className="w-32">
                <p className="text-axiawhite font-bold text-sm">
                  Erin Snider
                </p>
                <p className="text-xs font-extralight text-axiawhite">
                  UX Designer
                </p>
              </div>
              <Link href="https://www.linkedin.com/in/erin-snider-55b915173/">
                <a>
                  <FontAwesomeIcon className="h-10"
                  style={{color: 'white'}} icon={faLinkedin}/>
                </a>
              </Link>  
            </div>
            <div className="bg-axiablack h-20 rounded-2xl shadow-2xl flex flex-wrap
              lg:justify-center items-center space-x-4 min-w-72">
              <img className="rounded-full h-14 lg:ml-0 ml-6"
              src="Gabe.webp"/>
              <div className="w-32">
                <p className="text-axiawhite font-bold text-sm">
                  Gabe Suttner
                </p>
                <p className="text-xs font-extralight text-axiawhite">
                  Front End Developer
                </p>
              </div>
              <Link href="https://www.linkedin.com/in/gabrielsuttner/">
                <a>
                  <FontAwesomeIcon className="h-10"
                  style={{color: 'white'}} icon={faLinkedin}/>
                </a>
              </Link>  
            </div>
          </div>
        </div>

        <div className="col-span-1 hidden md:block">
          <div className="text-axiablack">
            <h1 className="text-2xl font-bold tracking-wide mb-4">
              Our Team
            </h1>
            <p>
              We come from a diverse background of consulting and tech companies with experience
              from PwC, Amazon Web Services, and ExxonMobil.
            </p>
          </div>
        </div>
      </div>
    
    )

}