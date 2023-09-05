'use client'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import {FaBookOpen} from "react-icons/fa6"
// import Link from 'next/link'

import dynamic from 'next/dynamic';
import React, { useState } from 'react';



function about() {
    const [switching, setSwitchingData] =useState(1);
    const subRouterComponents ={
        1:dynamic(()=>import('../components/Education')),
        2:dynamic(()=>import('../components/Exprience')),
    }
    const SubRouter = subRouterComponents[switching] ||null;

    // const SwitchingData =(event)=>{
    //     console.log("which data is here :",data);
    //     console.log(event.target.value);
    //     switching = data;
    // }

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
                        <div onClick={()=>setSwitchingData(1)} className="hover:text-gray-300 cursor-pointer educationOption flex border h-6 items-center p-5">
                            <FaBookOpen className='mr-4'/>
                            <span >Education</span>
                        </div>
                        <div onClick={()=>setSwitchingData(2)} className="hover:text-gray-300 cursor-pointer educationOption flex border h-6 items-center p-5">
                            <FaBookOpen className='mr-4'/>
                            <span >Expreience</span>
                        </div>
                        <div  className="cursor-pointer educationOption flex border h-6 items-center p-5">
                            <FaBookOpen className='mr-4'/>
                            <span>Skills</span>
                        </div>
                        <div  className="cursor-pointer educationOption flex border h-6 items-center p-5">
                            <FaBookOpen className='mr-4'/>
                            <span>Achievements</span>
                        </div>
                        <div  className="cursor-pointer educationOption flex border h-6 items-center p-5">
                            <FaBookOpen className='mr-4'/>
                            <span>Resume</span>
                        </div>
                    </div>


                    <div className="OptionContainer w-4/5">
                        {/* <h1>Eduction</h1> */}
                        <div className="content">
                            {SubRouter  && <SubRouter/>}
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