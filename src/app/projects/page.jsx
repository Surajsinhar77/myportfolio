import Navbar from '../components/navbar';
// import Image from 'next/image';
import ProjectCard from './projectCard'
import Footer from '../components/Footer';

function page() {
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
                            <ProjectCard/>
                            <ProjectCard/>
                            <ProjectCard/>
                            <ProjectCard/>
                            <ProjectCard/>
                            <ProjectCard/>
                            <ProjectCard/>
                            <ProjectCard/>
                            <ProjectCard/>
                            <ProjectCard/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default page