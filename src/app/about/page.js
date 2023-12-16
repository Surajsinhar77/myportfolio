'use client'
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import {FaBookOpen,FaGraduationCap,FaRegNewspaper} from "react-icons/fa6";
import {FaSuitcase,FaGears} from 'react-icons/fa6';
import {GiAchievement} from 'react-icons/gi';
import ProjectCard from '../projects/projectCard';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import {GrContact} from 'react-icons/gr';
import {BiMailSend} from 'react-icons/bi';
import {FaLinkedinIn} from 'react-icons/fa6';
import {CgWebsite} from 'react-icons/cg';
import Link from 'next/link';


export default function About() {
    const [switching, setSwitchingData] =useState(1);
    const subRouterComponents ={
        1:dynamic(()=>import('../components/Education')),
        2:dynamic(()=>import('../components/Exprience')),
        3:dynamic(()=>import('../components/Skill')),
        4:dynamic(()=>import('../components/Achievements')),
        5:dynamic(()=>import('../components/ResumeViewer')),
    }
    const SubRouter = subRouterComponents[switching] ||null;


    const ProjectList =[
        {
            name : "e-Commarce VegMarket Store",
            date : [2,"Sep",2023],
            tags : ['next.js', 'react.js', 'node.js','express.js', 'mongodb']
        },

        {
            name : "Hostel Management System",
            date : [10,"Sep",2022],
            tags : ['Bootstrap', 'HTML', 'Javascript','Flask', 'Python', 'MySql']
        },
        {
            name : "StackOver Clone",
            date : [10,"Sep",2022],
            tags : ['react.js', 'node.js','express.js', 'mongodb','Redux']
        },
        {
        	name : "My Portfolio",
        	date : [10, 'Aug', 2023],
        	tags : ['Next.js', 'node.js', 'express.js', 'mongodb', 'react.js']
        },
    ]
    
    return (
        <>
        <div className="w-9/12 m-auto">
            <Navbar/>
            <div className="mainAboutContainer ">
                <div className="aboutMeInfo">
                    <h1 className='mb-3 text-4xl text-center uppercase'>About me </h1>
                    <h5 className='text-xl mt-5 font-normal text-center'>Welcome to my portfolio!</h5>
                    <p className='text-lg mt-3 font-normal uppercase text-center'>
                        In Short: Im a passionate and experienced developer with a deep love for all tech things.
                    </p>
                </div>

                <div className="AboutInfo flex mt-7 border">
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
                </div>

                <div className="Featureproject mt-40">
                    <h1 className='mb-20 text-4xl text-center'>Feature Project </h1>
                    <div className="mainImage grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-auto">
                        {
                            ProjectList.map((project,index)=>{
                                    return <ProjectCard key={index} project={project} index={index}/>
                                }
                            )
                        }
                    </div>
                </div>

                <div className="ContactOption mt-40">
                    <h1 className='mb-20 text-4xl text-center'>Say Hello <br /> Contact Me </h1>
                    <div className="contactFromAbout">
                        <h3 className='mb-3 text-xl flex items-center font-medium'>< GrContact className='text-blue-600'/> &nbsp; Get in touch</h3>
                        <p className='text-lg font-light'>
                            Sweet, thats it from my side! Now its your turn to say hi. <br />
                            Im available for freelance projects. Lets work together to create something <br /> worth sharing.
                        </p>

                        <div className="btn flex mt-6 mb-28">
                            <Link href="mailto:surajkumar71799@gmail.com" className='flex px-2 py-2 border items-center rounded-lg mr-2 text-red-700 border-red-700 hover:bg-red-700 hover:text-white'>
                                <BiMailSend className='mr-1'/> Mail </Link>
                            <Link href='https://www.linkedin.com/in/kumar-suraj-sk/' target="_blank" className='flex px-2 py-2 border items-center rounded-lg mr-2 text-blue-600 border-blue-600  hover:bg-blue-600 hover:text-white'>
                                <FaLinkedinIn className='mr-1'/> LinkedIn</Link>
                            <Link href='/contact' className='flex px-2 py-2 border items-center rounded-lg mr-2 text-green-500 border-green-500  hover:bg-green-500 hover:text-white'>
                                <CgWebsite className='mr-1'/> Contact Page</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}