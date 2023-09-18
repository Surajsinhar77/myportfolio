import Link from "next/link"
import {FaArrowRight} from "react-icons/fa";

export default function Blogs({element, index}){
    return (
        <div className="mt-5">
            <div>
                <h2 className="text-2xl"> 
                    <Link href="/blogs/[slug]/" as={`/blogs/${index}/`} className="capitalize hover:underline  hover:underline-offset-2"> {element.title} </Link> 
                </h2>
            </div>
            <div className="tags mt-5">
                <Link href="/" className="px-7 py-2 text-red-500 rounded border-2 border-red-500">Next.js</Link>
            </div>
            <div className="timeAndDate mt-4 text-gray-500">
                <h3> <span>02 September 2023</span>  <span>4 minute read</span> </h3>
            </div>
            <div className="contentPreview mt-4">
                <p>
                    {element.body}
                </p>
            </div>
            <div className="BlogBtn mt-5 text-blue-400 font-light">
                <Link href="/" className=" flex items-center">
                    Read Blogs  <span className="mt-0.5"> <FaArrowRight className="font-light"/> </span>
                </Link>
            </div>
            <div className="mx-2 mt-4 h-0.5 rounded-full bg-gray-300"></div>
        </div>
    )
}