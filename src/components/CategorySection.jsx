import { useEffect, useState} from "react"
import { Link } from "react-router-dom";

const CategorySection = () => {
    const [catList, setCatList] = useState([])

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/categories`)
            .then(resp => resp.json())
            .then(resp => {
                setCatList(resp.categories)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])


    return (
        <section className="pt-20">
            <div className="container mx-auto">
                <div className="mb-9">
                    <h2 className="text-2xl font-extrabold">Shop Our Top Categories</h2>
                </div>
                <div className="grid grid-cols-6 gap-8">
                    { catList.map(cat => (
                        <Link to={`/category/${cat.slug}`} className="rounded-xl overflow-hidden relative" key={cat.id}>
                            <img src={cat.img} alt={`${cat.name} Category`}/>
                            <h3 className="absolute top-3 left-1/2 text-2xl font-extrabold text-girlcode-pink -translate-x-1/2">{cat.name}</h3>
                        </Link>
                    )) }
                </div>
            </div>
        </section>
    )
}

export default CategorySection;
