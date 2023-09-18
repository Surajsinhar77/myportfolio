import Navbar from "../components/navbar"
import Footer from "../components/Footer"

export default function Contact() {
    return (
        <>
            <div className="contactContainer w-9/12 m-auto">
                <Navbar/>
                <div className="subContainer w-9/12 m-auto">
                    <div className="contactHeader">
                        <h2 className="text-4xl">Contact Me</h2>
                        <p className="text-lg mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, odio pariatur? Blanditiis veniam obcaecati voluptas nemo nobis aut vel velit.</p>
                    </div>
                    <div className="formContainer mt-4 text-gray-500">
                        <form action="">
                            <div className="col flex justify-between mt-8">
                                <div className="row1 flex flex-col w-full mr-2">
                                    <label htmlFor="">NAME <span className="text-red-500 ">*</span> </label>
                                    <input className="focus:outline-none focus:outline-slate-500 focus:border-none rounded-md h-10 border pl-2" type="text" />
                                </div>
                                <div className="row1 flex flex-col w-full ml-2">
                                    <label htmlFor="">EMAIL <span className="text-red-500 mb-2">*</span></label>
                                    <input className="focus:outline-none focus:outline-slate-500 focus:border-none rounded-md h-10 border pl-2" type="email" />
                                </div>
                            </div>
                            <div className="col flex w-full mt-8">
                                <div className="row1 flex flex-col w-full">
                                    <label htmlFor="">SUBJECT <span className="text-red-500 mb-2">*</span> </label>
                                    <input className="focus:outline-none focus:outline-slate-500 focus:border-none rounded-md h-10 border pl-2" type="text" />
                                </div>
                            </div>
                            <div className="col flex w-full mt-8">
                                <div className="row1 flex flex-col w-full h-48">
                                    <label htmlFor="">Message <span className="text-red-500 mb-2">*</span> </label>
                                    <textarea className="focus:outline-none focus:outline-slate-500 focus:border-none rounded-md border pl-2" rows={100}></textarea>
                                </div>
                            </div>
                            <div className="col flex w-full mt-8">
                                <button className="px-5 py-2 rounded-3xl text-white bg-blue-500 hover:bg-blue-300 hover:text-gray-600">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}