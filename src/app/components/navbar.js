import Link from "next/link"
import Image from "next/image"

function navbar() {
    return (
        <>
            <header className="flex my-20 m-auto w-full">
                <div className="profilePic">
                    <Image 
                        src='/Images/profile.png'
                        width={100}
                        height={100}
                        alt="Picture of author"
                        className="rounded-full"
                    />
                </div>
                <div className="navbar flex flex-col justify-between ml-9">
                    <div className="PersonName">
                        <h3 className="text-3xl uppercase font-bold"> <span className="pb-2 border-b-4 border-blue-300"><Link href="/">Suraj Kumar</Link></span></h3>
                    </div>
                    <div className="navLink text-xl uppercase tracking-wider font-medium">
                        <ul className="flex">
                            <Link className="mr-5  hover:text-blue-400  active: focus:text-gray-400  focus:ring-violet-300" href='/about'>About </Link>
                            <Link className="mr-5  hover:text-blue-400" href='/'>Work </Link>
                            <Link className="mr-5  hover:text-blue-400" href='/projects'>Project </Link>
                            <Link className="mr-5  hover:text-blue-400" href='/blogs'>Blog </Link>
                            <Link className="mr-5  hover:text-blue-400" href='/contact'>Contact </Link>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default navbar