import Navbar from "../components/navbar";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";

// Blogs page

export default function blog() {
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
            <Navbar />
            <div className="BlogContainer flex justify-between">
            <div className="Searchbar  w-1/3">
                <div className="">
                <h2 className="uppercase text-lg font-medium text-gray-500">
                    Search
                </h2>
                <div className="mt-5">
                    <input
                    placeholder="Search"
                    className="focus:outline-none focus:outline-blue-600 focus:border-none hover:shadow-inner focus:border-gray-400 pl-5 h-12 w-full border border-gray-500 rounded"
                    ></input>
                </div>
                </div>
                <div className="mt-9">
                <h2 className="uppercase text-lg font-medium text-gray-500">
                    FILTER BY
                </h2>
                <div className="mt-5">
                    <button className="py-1 px-3 border rounded-md border-blue-400 mr-3 mb-3 text-blue-400">
                        FreeLancing
                    </button>
                    <button className="py-1 px-3 border rounded-md border-blue-400 mr-3 mb-3 text-blue-400">
                        Node.js
                    </button>
                    <button className="py-1 px-3 border rounded-md border-blue-400 mr-3 mb-3 text-blue-400">
                        Next.js
                    </button>
                    <button className="py-1 px-3 border rounded-md border-blue-400 mr-3 mb-3 text-blue-400">
                        MongoDb
                    </button>
                    <button className="py-1 px-3 border rounded-md border-blue-400 mr-3 mb-3 text-blue-400">
                        Tips
                    </button>
                    <button className="py-1 px-3 border rounded-md border-blue-400 mr-3 mb-3 text-blue-400">
                        Intership
                    </button>
                    <button className="py-1 px-3 border rounded-md border-blue-400 mr-3 mb-3 text-blue-400">
                        SDE
                    </button>
                    <button className="py-1 px-3 border rounded-md border-blue-400 mr-3 mb-3 text-blue-400">
                        Developer
                    </button>
                    <button className="py-1 px-3 border rounded-md border-blue-400 mr-3 mb-3 text-blue-400">
                        Software Engineering
                    </button>
                </div>
                </div>
            </div>
            <div className="latestBlog w-3/5 pr-3">
                <h3 className="text-2xl">Latest Blog</h3>

                <div className="mx-2 mt-4 h-0.5 rounded-full bg-gray-300"></div>
                    <div className="mx-2">
                        {
                            BlogsContent.map((blog,index)=>{
                                return <Blogs key={index} element={blog} index={index} />
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </>
    );
}
