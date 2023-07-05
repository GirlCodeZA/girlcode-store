import { useEffect, useState } from "react"
import ProductItem from "./ProductItem";

const DealsSection = () => {
    const [prodList, setProdList] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/products`)
            .then(resp => resp.json())
            .then(resp => {
                setProdList(resp.products)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <section className="pt-20">
            <div className="container mx-auto">
                <div className="mb-9">
                    <h2 className="text-2xl font-extrabold">Todays Best Deals For You!</h2>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    {
                        prodList.map(prod => (
                            <ProductItem key={prod.id} prod_info={prod} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default DealsSection;
