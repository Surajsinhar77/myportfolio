import { FaEllipsisVertical } from "react-icons/fa6";
import {SiV} from 'react-icons/si';
import Image from "next/image"
import Link from "next/link";

export default function ProjectCard({project,index}) {
  
  return (
      <>
        <div className="cardBody w-80 border m-auto bg-white shadow-md rounded-lg overflow-hidden mb-5">
          <div className="upperBody flex border items-center justify-between p-2">
            <div className="main part flex items-center">
                <div className="profile mr-2">
                  {/* <Image className="Profile border rounded-full " src='' width='50' height="48" alt="profile picture"></Image> */}
                  {/* <span className="Profile p-3 px-4 border rounded-full  text-white">  </span> */}
                  <SiV className="Profile border rounded-full text-xl"/>
                
                </div>

                <div className="nameAndDate">
                  <h4 className="textsm">{project.name}</h4>
                  <p className="text-xs">{`${project.date[1]} - ${project.date[0]} - ${project.date[2]} To Aug - 31 - 2023 `}</p>
                </div>
            </div>

            <div className="option w-8 h-8 rounded-full flex items-center hover:bg-gray-100">
              <FaEllipsisVertical className="m-auto text-gray-600"/>
            </div>

          </div>

          <div className="productImage w-full hover:bg-gray-200 hover:liner">
            <Link href="/projects/[slug]/" as={`/projects/${index}/`}>
              <Image src="/Images/homePage.png" width="400" height="0" className="h-48" alt="project image" />
            </Link>
          </div>

          <div className="info">
            <p className="p-3 text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed saepe nihil sunt non odio tempora rem.</p>
          </div>

          <h2 className="text-center">{project.name}</h2>
          <div className="useTech p-3 border-t-2 mt-5">
            {
              project.tags.map((tags,index)=>{
                return <button key={index} className="py-1 px-1 text-sm border rounded-md border-blue-400 mr-3 mb-3 text-blue-400">{tags}</button>
              })
            }
          </div>
        </div>
      </>
  )
}
