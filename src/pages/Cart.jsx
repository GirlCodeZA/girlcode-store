import { useEffect, useState } from "react"
import MainLayout from "../layouts/MainLayout"

const Cart = () => {
    const [currCart, setCurrCart] = useState([])
    const [currTotal, setCurrTotal] = useState(0)

    useEffect(() => {
        const cartArray = JSON.parse(localStorage.getItem('cart')) ?? []

        const total = cartArray.reduce((acc, currProd) => acc + currProd.prod_price, 0)

        setCurrTotal(total)

        setCurrCart(cartArray)
    }, [])



    return (
        <MainLayout>
            <section className="pt-20">
                <div className="container mx-auto">
                    {
                        currCart.map(currProd => (
                            <>
                                ProdCount: {currProd.count}
                                ProdName: {currProd.prod_name}
                            </>
                        ))
                    }

                    total: R{currTotal}
                </div>
            </section>
        </MainLayout>
    )
}

export default Cart;
