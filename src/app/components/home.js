import { FaLinkedin, FaGithub, FaDiscord , FaFacebook , FaCode} from "react-icons/fa";
import Link from 'next/link';
import Projects from "./Projects";
import Blogs from "./Blogs";

function index() {
    return (
        <>
            <div>
                <div className="myAbout p-7 bg-blue-100 rounded">
                    <h3 className="text-3xl mb-5">Hi, I'm Suraj.</h3>
                    <p className="font-light text-xl">
                        I'm a web developer from Southampton, UK. Currently lead developer at a local agency, Fhoke. In my spare time I enjoy DIY, gaming and building my own projects. My preferred tools are PHP, Laravel and Vue.js.
                    </p>
                    <h2 className="mt-5 text-2xl underline font-light">
                        Connect Me
                    </h2>
                    {/* <div className="SocalLinks flex mt-5">
                        <Link  href="#" className="mr-5 my-3 bg-white border border-gray-300 bottom-1 py-2 px-10 rounded-lg">  <FaLinkedin className="text-blue-700 text-3xl"/>  </Link>

                        <Link  href="#" className="mr-5 my-3 bg-white border border-gray-300 bottom-1 py-2 px-10 rounded-lg">  <FaGithub className="text-gray-700 text-3xl"/>  </Link>

                        <Link  href="#" className="mr-5 my-3 bg-white border border-gray-300 bottom-1 py-2 px-10 rounded-lg">  <FaDiscord className="text-blue-700 text-3xl"/>  </Link>

                        <Link  href="#" className="mr-5 my-3 bg-white border border-gray-300 bottom-1 py-2 px-10 rounded-lg">  <FaCode className="text-gray-800 text-3xl"/>  </Link>
                    </div> */}
                    <div className="codingPlateformLink">

                    </div>
                </div>

                <div className="ContainerForHomePage mt-5 w-full flex justify-between">
                    <div className="latestBlog w-6/12 pr-3">
                        <h3 className="text-2xl">Latest Blog</h3>

                        <div className="mx-2 mt-4 h-0.5 rounded-full bg-gray-300"></div>
                        <div className="mx-2">
                            <Blogs/>
                            <Blogs/>
                            <Blogs/>
                        </div>
                    </div>
                    <div className="latestProject w-6/12 pl-3">
                        <h3 className="text-2xl">Latest Project</h3>
                        <div className="mx-2 mt-4 h-0.5 rounded-full bg-gray-300"></div>
                        <div className="mx-2">
                            <Projects/>
                            <Projects/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index;