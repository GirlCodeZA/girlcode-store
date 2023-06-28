import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MainLayout from '../layouts/MainLayout'

const Product = () => {
    let { prodSlug } = useParams()
    let [prodInfo, setProdInfo] = useState({})

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/product/${prodSlug}`)
            .then(resp => resp.json())
            .then(resp => {
                setProdInfo(resp)
            })
            .catch(error => {
                console.log(error)
            })
    }, [prodSlug])


    return (
        <MainLayout>
        <section className="py-20">
            <div className="container mx-auto">
                Prod Desc : {prodInfo.prod_desc}
            </div>
        </section>
        </MainLayout>
    )
}

export default Product