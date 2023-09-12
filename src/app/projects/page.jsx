import Navbar from '../components/navbar';
// import Image from 'next/image';
import ProjectCard from './projectCard'
import Footer from '../components/Footer';

function page() {
    
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
    ]

    return (
        <>
            <div className="w-9/12 m-auto">
                <Navbar/>
                <div className="projectContaienr">
                    <div className="mainHeading mb-14">
                        <h1 className="mainHead text-5xl">Projects</h1>
                        <h4 className="subheading text-xl mt-5">
                            Some of my spare time tinkering
                        </h4>
                    </div>

                    <div className="pageImgAndAbout ">
                        <div className="mainImage grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-auto">

                            {
                                ProjectList.map((project,index)=>{
                                        return <ProjectCard key={index} project={project} index={index}/>
                                    }
                                )
                            }
                            
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default page
