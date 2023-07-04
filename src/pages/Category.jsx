import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MainLayout from '../layouts/MainLayout'
import ProductItem from "../components/ProductItem"

const Category = () => {
    let { catSlug } = useParams()
    let [catInfo, setCatInfo] = useState({})
    const [prodList, setProdList] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/category/${catSlug}`)
            .then(resp => resp.json())
            .then(resp => {
                setCatInfo(resp)
            })
            .catch(error => {
                console.log(error)
            })

        fetch(`${import.meta.env.VITE_API_URL}/category/${catSlug}/products`)
            .then(resp => resp.json())
            .then(resp => {
                setProdList(resp.products)
                console.log(resp)
            })
            .catch(error => {
                console.log(error)
            })
    }, [catSlug])

    return (
        <MainLayout>
            <section>
                <div className="container mx-auto bg-page-header bg-no-repeat bg-cover py-20 px-16">
                    <div className="w-3/5">
                        <h1 className="text-6xl font-extrabold leading-tight text-girlcode-pink">{catInfo.desc}</h1>
                        <a href="#" className="btn bg-girlcode-pink text-white text-lg mt-9">Buy Now</a>
                    </div>
                </div>
            </section>
            <section className="pt-20">
                <div className="container mx-auto">
                    <div className="btn bg-gray-300">{catInfo.name} Type <span className="material-symbols-outlined align-middle">expand_more</span></div>
                </div>
            </section>
            <section className="py-20">
                <div className="container mx-auto">
                    <div className="mb-9">
                        <h2 className="text-2xl font-extrabold">{catInfo.name} For You!</h2>
                    </div>
                    <div className="grid grid-cols-4 gap-8">
                    {
                        prodList.map(prod => (
                            <ProductItem key={prod.id} prod_info={prod} />
                        ))
                    }
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default Category
