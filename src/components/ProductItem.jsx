import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ProductItem = ({ prod_info }) => {

    const ProdPrice = ({price}) => {
        const [intNum, setIntNum] = useState('')
        const [centNum, setCentNum] = useState('')

        useEffect(() => {
            if(price) {
                const priceArr = price.toString().split('.')
                setIntNum(priceArr[0] ?? '00')
                setCentNum(priceArr[1] ?? '00')
            }
        }, [price])

        return (
            <><span className="align-top text-base">R</span>{intNum}<span className="align-top text-base">.{centNum}</span></>
        )
    }

    const addToCart = (evt) => {
        let cartArray = JSON.parse(localStorage.getItem('cart')) ?? []
        const prodId = evt.target.dataset.prodId
        let foundItem = cartArray.find(prod => Number(prodId) === prod.id)
        let foundIndex = cartArray.findIndex(prod => Number(prodId) === prod.id)
        
        if(!foundItem) {
            let currProd = prod_info
            currProd.count = 1
            cartArray.push(currProd)
            
            localStorage.setItem('cart', JSON.stringify(cartArray))
        } else {
            foundItem.count = ++foundItem.count
            cartArray[foundIndex] = foundItem

            localStorage.setItem('cart', JSON.stringify(cartArray))
        }
    }

    return (
        <div>
            <Link to={`/product/${prod_info.prod_slug}`}>
                <div className="rounded-xl overflow-hidden relative bg-gray-200">
                    <img src={`${import.meta.env.VITE_API_URL}/image/${prod_info.prod_img}`} alt={prod_info.prod_name} className="w-full" />
                    <div className="absolute top-6 right-5 bg-white rounded-full w-10 h-10 text-center cursor-pointer hover:bg-red-400">
                        <span className="material-symbols-outlined leading-10">favorite</span>
                    </div>
                </div>
            </Link>
            <div className="py-4">
                <Link to={`/product/${prod_info.prod_slug}`} className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">{prod_info.prod_name}</h3>
                    <div className="text-xl font-bold">{<ProdPrice price={prod_info.prod_price} />}</div>
                </Link>
                <p className="text-sm text-gray-900 mt-2">{prod_info.prod_desc}</p>
                <div className="flex my-2">
                    <ul className="flex">
                        <li><span className="material-symbols-outlined">star_rate</span></li>
                        <li><span className="material-symbols-outlined">star_rate</span></li>
                        <li><span className="material-symbols-outlined">star_rate</span></li>
                        <li><span className="material-symbols-outlined">star_rate</span></li>
                        <li><span className="material-symbols-outlined">star_rate</span></li>
                    </ul>
                    <p>(121)</p>
                </div>
                <button className="btn-atc" data-prod-id={prod_info.id} onClick={addToCart}>Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductItem
