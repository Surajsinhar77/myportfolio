'use client'
import { useParams } from "next/navigation";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Blogs from "@/app/components/Blogs";

export default function page() {
    const params  = useParams();

    const BlogsContent = [
        {
            userId: 1,
            id: 0,
            title: "Converting a Laravel Inertia App from Mix to Vite",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
        {
            userId: 1,
            id: 1,
            title:
                "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
        {
            userId: 1,
            id: 2,
            title: "qui est esse",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        },
        {
            userId: 1,
            id: 3,
            title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        },
        {
            userId: 1,
            id: 4,
            title: "eum et est occaecati",
            body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        },
        {
            userId: 1,
            id: 5,
            title: "nesciunt quas odio",
            body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
        },
        {
            userId: 1,
            id: 6,
            title: "dolorem eum magni eos aperiam quia",
            body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
        },
        {
            userId: 1,
            id: 7,
            title: "magnam facilis autem",
            body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
        },
    ];

    return (
        <>
            <div className="w-9/12 m-auto">
                <Navbar/>
                    <div className="blogContainer">
                        
                        <div className="blogAreaContent flex">
                            <div className="blogArea w-9/12  rounded-lg mr-7">
                                <div className="forTitle my-10">
                                    <h1 className="text-6xl capitalize">{BlogsContent[params.slug].title}</h1>
                                </div>
                                <div className="forBlogImage ">
                                    <span className="">
                                        <h1 className="text-2xl my-3 ml-2 font-normal capitalize text-blue-400 underline underline-offset-1">By : Suraj Kumar  <span> 1- Sep - 2023 </span></h1>
                                    </span>
                                    <Image src='/Images/peas1.jpeg' width="720" height="480" alt="Image of blog Related" className="border w-full h-96" />
                                </div>

                                <div className="blogDiscription my-7 text-justify font-normal text-lg">
                                    <h1></h1>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto recusandae eaque totam explicabo nobis accusantium doloribus illum assumenda ut! Illum suscipit consectetur optio eius obcaecati ut voluptatibus earum iste, molestiae culpa. Porro voluptates quas provident. Earum dolorum sed eum, autem ipsam, reprehenderit reiciendis eius nesciunt, delectus consectetur perspiciatis excepturi sequi suscipit veritatis quasi expedita dicta maiores. <br /> <br /> Ea ullam, vel impedit, dignissimos incidunt praesentium nostrum magni doloribus similique eveniet sunt, ex totam fuga ratione voluptatibus adipisci iure nobis esse repellendus quisquam molestias exercitationem sequi saepe laudantium? Totam dolorum voluptates illo amet eum veritatis, molestiae ad odio minus reprehenderit, aspernatur unde praesentium.</p>

                                    <br /><br />
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam repellat pariatur hic architecto natus tempore aut nihil iure earum nesciunt? Sunt consequatur sint recusandae optio. Earum sit perferendis nesciunt maiores asperiores dolor voluptates necessitatibus soluta. Ex accusamus ea eveniet iusto nisi quos totam sequi inventore magnam temporibus fugiat reprehenderit repellendus, expedita reiciendis? Atque laudantium nemo, eius asperiores provident omnis fugiat rerum laborum perferendis doloremque sint suscipit, quam dicta alias, molestiae non ullam voluptate quasi et ut odit! Deserunt voluptatum obcaecati alias blanditiis quos eveniet beatae deleniti, aspernatur aliquam dicta harum nesciunt magnam possimus sunt, cum consequatur velit assumenda reiciendis commodi officiis eligendi aperiam natus libero quo? <br /><br /> Eius eaque nisi, atque odio ut iure beatae commodi hic, dignissimos amet rerum repudiandae eum, voluptatem nemo illum? Minima libero veniam deserunt beatae fugiat.</p>
                                </div>
                            </div>
                            <div className="blogSuggestion w-3/12">
                                <h1 className="uppercase">Suggestion</h1>
                                {
                                    BlogsContent.map((element,index)=>{
                                        return <Blogs key={index} element={element} index={index}/>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                <Footer/>
            </div>
        </>
    )
}