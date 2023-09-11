'use client'
import { useParams } from "next/navigation";
function page() {
    const params  = useParams();
    return (
        <>
            This is the Blog Content no {params.slug} 
        </>
    )
}

export default page