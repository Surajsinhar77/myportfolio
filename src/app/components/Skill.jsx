import {FaReact,FaJs} from 'react-icons/fa6'
import { SiNextdotjs } from "react-icons/si";

function Skill() {
    return (
        <>
            <div className="skillContainer">
                <h1 className='uppercase'>Frontend</h1>
                <div className="webd-frontend flex">
                    <div className="bg-gray-200 w-28 rounded skill p-5 flex flex-col justify-between items-center m-2 border">
                        <FaReact className='text-4xl text-blue-400'/>
                        <p className='mt-3'>
                            React.js
                        </p>
                    </div>

                    <div className="bg-gray-200 w-28 rounded skill p-5 flex flex-col justify-between items-center m-2 border">
                        <FaJs className='text-4xl text-yellow-500'/>
                        <p className='mt-3'>
                            JavaScript
                        </p>
                    </div>

                    <div className="bg-gray-200 w-28 rounded skill p-5 flex flex-col justify-between items-center m-2 border">
                        <SiNextdotjs className='text-4xl text-gray-700'/>
                        <p className='mt-3'>
                            Next.js
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill