import Link from "next/link"

function Footer() {
    return (
        <>
            <div className="footerContainer ">
                <div className="mx-2 mt-8 h-1 rounded-full bg-gray-300"></div>

                <div className="footerItem flex justify-between py-7 text-lg font-light">
                    <span>  &copy; Suraj Kumar.</span>
                    <Link href="https://nextjs.org/">Build with <span className="text-red-400">NEXT.js </span> </Link>
                </div>
            </div>
        </>
    )
}

export default Footer