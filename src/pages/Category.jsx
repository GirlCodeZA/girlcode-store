import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MainLayout from '../layouts/MainLayout'

const Category = () => {
    let { catSlug } = useParams()
    let [catInfo, setCatInfo] = useState({})

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/category/${catSlug}`)
            .then(resp => resp.json())
            .then(resp => {
                setCatInfo(resp)
            })
            .catch(error => {
                console.log(error)
            })
    }, [catSlug])

    return (
        <MainLayout>
            <section className="py-20">
                <div className="container mx-auto">
                    Category Name: {catInfo.name}

                </div>
            </section>
        </MainLayout>
    )
}

export default Category
