'use client'
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import {FaBookOpen,FaGraduationCap,FaRegNewspaper} from "react-icons/fa6";
import {FaSuitcase,FaGears} from 'react-icons/fa6';
import {GiAchievement} from 'react-icons/gi';

import dynamic from 'next/dynamic';
import React, { useState } from 'react';



function about() {
    const [switching, setSwitchingData] =useState(1);
    const subRouterComponents ={
        1:dynamic(()=>import('../components/Education')),
        2:dynamic(()=>import('../components/Exprience')),
        3:dynamic(()=>import('../components/Skill')),
        4:dynamic(()=>import('../components/Achievements')),
        5:dynamic(()=>import('../components/ResumeViewer')),

    }
    const SubRouter = subRouterComponents[switching] ||null;

    return (
        <>
        <div className="w-9/12 m-auto">
            <Navbar/>
            <div className="mainAboutContainer ">
                <div className="aboutMeInfo">
                    <h3 className='text-3xl'>About Me </h3>
                    <h5 className='text-lg mt-5'>Welcome to my portfolio!</h5>
                    <p className='text-md mt-3'>
                        In Short: I'm a passionate and experienced developer with a deep love for all tech things.
                    </p>
                </div>

                <div className="AboutInfo flex mt-5 border">
                    <div className="menubar w-1/5">
                        <div onClick={()=>setSwitchingData(1)} className="hover:text-gray-300 cursor-pointer educationOption flex border h-6 items-center p-7">
                            <FaGraduationCap className='text-lg mr-4'/>
                            <span >Education</span>
                        </div>
                        <div onClick={()=>setSwitchingData(2)} className="hover:text-gray-300 cursor-pointer educationOption flex border h-6 items-center p-7">
                            <FaSuitcase className='text-l mr-4'/>
                            <span >Expreience</span>
                        </div>
                        <div onClick={()=>setSwitchingData(3)} className="hover:text-gray-300 cursor-pointer educationOption flex border h-6 items-center p-7">
                            <FaGears className='text-l mr-4'/>
                            <span>Skills</span>
                        </div>
                        <div  onClick={()=>setSwitchingData(4)} className="hover:text-gray-300 cursor-pointer educationOption flex border h-6 items-center p-7">
                            <GiAchievement className='text-l mr-4'/>
                            <span>Achievements</span>
                        </div>
                        <div onClick={()=>setSwitchingData(5)} className="hover:text-gray-300 cursor-pointer educationOption flex border h-6 items-center p-7">
                            <FaRegNewspaper className='text-l mr-4'/>
                            <span>Resume</span>
                        </div>
                    </div>

                    <div className="OptionContainer w-4/5 border p-4">
                        {/* <h1>Eduction</h1> */}
                        <div className="content">
                            {SubRouter  && <SubRouter/>}
                        </div>
                    </div>


                    <div className="Featureproject">
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default about;