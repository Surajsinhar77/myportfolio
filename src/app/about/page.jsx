import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import {FaBookOpen} from "react-icons/fa6"

import Education from '../components/Education'

function about() {
    return (
        <>
        <div className="w-9/12 m-auto">
            <Navbar/>
            <div className="mainAboutContainer">
                <div className="aboutMeInfo">
                    <h3 className=''>About Me </h3>
                    <h5>Welcome to my portfolio!</h5>
                    <p>
                        In Short: I'm a passionate and experienced developer with a deep love for all tech things.
                    </p>
                </div>

                <div className="AboutInfo flex">
                    <div className="menubar w-1/5">
                        <div className="educationOption flex border h-6 items-center p-5">
                            <FaBookOpen className='mr-4'/>
                            <span>Education</span>
                        </div>
                        <div className="educationOption flex border h-6 items-center p-5">
                            <FaBookOpen className='mr-4'/>
                            <span>Education</span>
                        </div>
                        <div className="educationOption flex border h-6 items-center p-5">
                            <FaBookOpen className='mr-4'/>
                            <span>Education</span>
                        </div>
                        <div className="educationOption flex border h-6 items-center p-5">
                            <FaBookOpen className='mr-4'/>
                            <span>Education</span>
                        </div>
                        <div className="educationOption flex border h-6 items-center p-5">
                            <FaBookOpen className='mr-4'/>
                            <span>Education</span>
                        </div>
                    </div>
                    <div className="OptionContainer w-4/5">
                        <h1>Eduction</h1>
                        <div className="content">
                            <Education/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default about