import Image from "next/image"

function Projects() {
    return (
        <>
            <div className="Projects mt-7 w-12/12">
                <div className="ProjectPreviewImg w-12/12 p-5  m-auto border shadow-gray-500/50">
                    <Image className="shadow-lg w-full hover:shadow-gray-500/50 " src="/Images/homePage.png" width="551" height="100" alt="Image of project"/>
                </div>
                <div className="w-full mt-7 flex items-center flex-col">
                    <h2 className="text-2xl">Veg Market</h2>
                    <p className="font-light text-lg mt-4 px-2">
                        Web design blog focused on helping beginners via tutorials, videos, code snippets and freebies.
                    </p>
                    <div className="mt-4 flex items-center flex-col">
                        <h3 className="mt-1"> <span> Web Development </span> </h3>
                        <h3 className="mt-3"> MERN Stack Development</h3>
                        <h3 className="mt-3"> React.js , Node.js, Express.js and MongoDB</h3>
                    </div>
                </div>
            </div>
            <div className="mx-2 mt-4 h-0.5 rounded-full bg-gray-300"></div>
        </>
    )
}

export default Projects