import Navbar from "../components/navbar"
import Blogs from "../components/Blogs"
import Footer from "../components/footer"

// Blogs page

export default function blog() {
    return (
        <>
            <div className="w-9/12 m-auto">
                <Navbar/>
                <div className="BlogContainer flex justify-between">
                        <div className="Searchbar  w-1/3">
                            <div className="">
                                <h2 className="uppercase text-lg font-medium text-gray-500">Search</h2>
                                <div className="mt-5">
                                    <input placeholder="Search" className="hover:shadow-inner focus:border-gray-400 pl-5 h-12 w-full border border-gray-500 rounded"></input>
                                </div>
                            </div>
                            <div className="mt-9">
                                <h2 className="uppercase text-lg font-medium text-gray-500">FILTER BY</h2>
                                <div className="mt-5">
                                    <button className="py-1 px-3 border rounded-md border-blue-400 mr-3 mb-3 text-blue-400">FreeLancing</button>
                                    <button className="py-1 px-3 border rounded-md border-blue-400 mr-3 mb-3 text-blue-400">Node.js</button>
                                    <button className="py-1 px-3 border rounded-md border-blue-400 mr-3 mb-3 text-blue-400">Next.js</button>
                                    <button className="py-1 px-3 border rounded-md border-blue-400 mr-3 mb-3 text-blue-400">MongoDb</button>
                                    <button className="py-1 px-3 border rounded-md border-blue-400 mr-3 mb-3 text-blue-400"> Tips</button>
                                    <button className="py-1 px-3 border rounded-md border-blue-400 mr-3 mb-3 text-blue-400"> Intership</button>
                                    <button className="py-1 px-3 border rounded-md border-blue-400 mr-3 mb-3 text-blue-400"> SDE</button>
                                    <button className="py-1 px-3 border rounded-md border-blue-400 mr-3 mb-3 text-blue-400"> Developer</button>
                                    <button className="py-1 px-3 border rounded-md border-blue-400 mr-3 mb-3 text-blue-400"> Software Engineering </button>
                                </div>
                            </div>

                        </div>
                        <div className="latestBlog w-3/5 pr-3">
                            <h3 className="text-2xl">Latest Blog</h3>

                            <div className="mx-2 mt-4 h-0.5 rounded-full bg-gray-300"></div>
                            <div className="mx-2">
                                <Blogs/>
                                <Blogs/>
                                <Blogs/>
                            </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}
