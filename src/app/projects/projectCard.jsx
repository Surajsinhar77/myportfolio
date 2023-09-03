import { FaEllipsisVertical } from "react-icons/fa6"
import Image from "next/image"

function projectCard() {
  return (
      <>
        <div className="cardBody w-80 border m-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="upperBody flex border items-center justify-between p-2">
            <div className="main part flex items-center">
                <div className="profile mr-2">
                <Image className="Profile border rounded-full " src='/Images/profile.png' width='50' height="48" alt="profile picture"></Image>
                  {/* <span className="Profile p-3 px-4 border rounded-full  text-white">  </span> */}
                </div>

                <div className="nameAndDate">
                  <h4 className="textsm">Suraj And Vikee</h4>
                  <p className="text-xs">September 14,2017</p>
                </div>
            </div>

            <div className="option w-8 h-8 rounded-full flex items-center hover:bg-gray-100">
              <FaEllipsisVertical className="m-auto text-gray-600"/>
            </div>

          </div>

          <div className="productImage w-full">
            <Image src="/Images/peas1.jpeg" width="400" height="0" className="h-48" alt="project image" />
          </div>

          <div className="info">
            <p className="p-3 text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed saepe nihil sunt non odio tempora rem, ex officiis numquam ducimus ullam quia eaque molestiae soluta maxime voluptas assumenda sint ad!</p>
          </div>

          <div className="useTech p-3">
            <button className="py-1 px-1 text-sm border rounded-md border-blue-400 mr-3 mb-3 text-blue-400">Next.js</button>
            <button className="py-1 px-1 text-sm border rounded-md border-blue-400 mr-3 mb-3 text-blue-400">MongoDb</button>
            <button className="py-1 px-1 text-sm border rounded-md border-blue-400 mr-3 mb-3 text-blue-400"> Intership</button>
            <button className="py-1 px-1 text-sm border rounded-md border-blue-400 mr-3 mb-3 text-blue-400"> SDE</button>
            <button className="py-1 px-1 text-sm border rounded-md border-blue-400 mr-3 mb-3 text-blue-400"> Developer</button>
            <button className="py-1 px-1 text-sm border rounded-md border-blue-400 mr-3 mb-3 text-blue-400">Node.js</button>
            
          </div>
        </div>
      </>
  )
}
export default projectCard