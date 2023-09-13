"use client"
import {useParams } from 'next/navigation';
import Navbar from '../../components/navbar';
import Image from 'next/image';
import Footer from '@/app/components/Footer';
import VideoPlayer from '@/app/components/VideoPlayer';
import './style.css';

function Project() {
    const params = useParams();

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
    ]
    console.log(ProjectList[params.slug].tags)
    return (
        <>
            <div className="m-auto w-9/12">
                <Navbar/>
                <h1 className='text-3xl my-8 text-center uppercase'>{ProjectList[params.slug].name}</h1>
                <div className='mainContainer-project border h-full flex'>
                    <div className="mainImage p-3 border w-4/5">
                        <Image src="/Images/homePage.png" priority={false} width="1920" height="420" alt='Project Image' className='w-full '></Image>

                        <div id='otherImageOption' className="otherImageOption border border-blue-700 w-full h-32 mt-7 overflow-auto whitespace-nowrap">
                            <div className="imagesOfProject w-28 h-24 border border-red-700 m-4 inline-block">
                                <Image src="/Images/homePage.png" width="1920" height="420" alt='Project Image' className='w-full '></Image>
                            </div>
                            <div className="imagesOfProject w-28 h-24 border border-red-700 m-4 inline-block">
                                <Image src="/Images/homePage.png" width="1920" height="420" alt='Project Image' className='w-full '></Image>
                            </div>
                            <div className="imagesOfProject w-28 h-24 border border-red-700 m-4 inline-block">
                                <Image src="/Images/homePage.png" width="1920" height="420" alt='Project Image' className='w-full '></Image>
                            </div>
                            <div className="imagesOfProject w-28 h-24 border border-red-700 m-4 inline-block">
                                <Image src="/Images/homePage.png" width="1920" height="420" alt='Project Image' className='w-full '></Image>
                            </div>
                            <div className="imagesOfProject w-28 h-24 border border-red-700 m-4 inline-block">
                                <Image src="/Images/homePage.png" width="1920" height="420" alt='Project Image' className='w-full '></Image>
                            </div>
                            <div className="imagesOfProject w-28 h-24 border border-red-700 m-4 inline-block">
                                <Image src="/Images/homePage.png" width="1920" height="420" alt='Project Image' className='w-full '></Image>
                            </div>
                            <div className="imagesOfProject w-28 h-24 border border-red-700 m-4 inline-block">
                                <Image src="/Images/homePage.png" width="1920" height="420" alt='Project Image' className='w-full '></Image>
                            </div>
                            <div className="imagesOfProject w-28 h-24 border border-red-700 m-4 inline-block">
                                <Image src="/Images/homePage.png" width="1920" height="420" alt='Project Image' className='w-full '></Image>
                            </div>
                            <div className="imagesOfProject w-28 h-24 border border-red-700 m-4 inline-block">
                                <Image src="/Images/homePage.png" width="1920" height="420" alt='Project Image' className='w-full '></Image>
                            </div>
                            <div className="imagesOfProject w-28 h-24 border border-red-700 m-4 inline-block">
                                <Image src="/Images/homePage.png" width="1920" height="420" alt='Project Image' className='w-full '></Image>
                            </div>
                            <div className="imagesOfProject w-28 h-24 border border-red-700 m-4 inline-block">
                                <Image src="/Images/homePage.png" width="1920" height="420" alt='Project Image' className='w-full '></Image>
                            </div>
                            <div className="imagesOfProject w-28 h-24 border border-red-700 m-4 inline-block">
                                <Image src="/Images/homePage.png" width="1920" height="420" alt='Project Image' className='w-full '></Image>
                            </div>
                            <div className="imagesOfProject w-28 h-24 border border-red-700 m-4 inline-block">
                                <Image src="/Images/homePage.png" width="1920" height="420" alt='Project Image' className='w-full '></Image>
                            </div>
                            <div className="imagesOfProject w-28 h-24 border border-red-700 m-4 inline-block">
                                <Image src="/Images/homePage.png" width="1920" height="420" alt='Project Image' className='w-full '></Image>
                            </div>
                        </div>
                    </div>
                    <div className="detailInfo p-5">
                        <h1 className='mb-5'>NAME : {ProjectList[params.slug].name} </h1>
                        <div className="tags">
                            <span>TAGS : </span>
                            {
                                ProjectList[params.slug].tags.map((tags,index)=>{
                                    return <button key={index} className="py-1 px-1 text-sm border rounded-md border-blue-400 mr-3 mb-3 text-blue-400">{tags}</button>
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className='mainContainer-project border h-full flex items-center p-7 my-10 flex-col'>
                    <span className='uppercase text-2xl font-medium mb-4'>Description</span>
                    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum fugit quam dolor itaque adipisci doloribus ullam? Tenetur veniam enim nisi amet consequatur non esse mollitia et maxime in fuga, consectetur explicabo dolore quam incidunt odit quae. At consectetur voluptas inventore quod maxime, sunt placeat molestiae quis ipsum? Nisi, itaque qui.</h1>
                </div>

                <div className='mainContainer-project border h-full flex items-center p-7 my-10 flex-col'>
                    <div className="flex justify-center items-center h-screen w-full">
                        <VideoPlayer />
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Project