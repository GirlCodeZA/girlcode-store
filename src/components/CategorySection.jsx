import { Link } from "react-router-dom";
import furnImg from "../assets/furniture.jpg"

const CategorySection = () => {
    const CatList = [
        {
            name: "Furniture",
            path: "/category/furniture",
            catImg: furnImg
        },
        {
            name: "Hand Bag",
            path: "/category/hand-bag",
            catImg: furnImg
        },
        {
            name: "Books",
            path: "/category/books",
            catImg: furnImg
        },
        {
            name: "Tech",
            path: "/category/tech",
            catImg: furnImg
        },
        {
            name: "Sneakers",
            path: "/category/sneaker",
            catImg: furnImg
        },
        {
            name: "Travel",
            path: "/category",
            catImg: furnImg
        }
    ]

    return (
        <section className="pt-20">
            <div className="container mx-auto">
                <div className="mb-9">
                    <h2 className="text-2xl font-extrabold">Shop Our Top Categories</h2>
                </div>
                <div className="grid grid-cols-6 gap-8">
                    { CatList.map(cat => (
                        <Link to={cat.path} className="rounded-xl overflow-hidden relative" key={cat.name}>
                            <img src={cat.catImg} alt={`${cat.name} Category`}/>
                            <h3 className="absolute top-3 left-1/2 text-2xl font-extrabold text-girlcode-pink -translate-x-1/2">{cat.name}</h3>
                        </Link>
                    )) }
                </div>
            </div>
        </section>
    )
}

export default CategorySection;
