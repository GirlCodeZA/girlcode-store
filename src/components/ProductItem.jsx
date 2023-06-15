import prodImg from "../assets/homepad-mini.png"

const ProductItem = () => {
    return (
        <div className="">
            <div className="rounded-xl overflow-hidden relative bg-gray-200">
                <img src={ prodImg } alt="Product" className="w-full" />
                <div className="absolute top-6 right-5 bg-white rounded-full w-10 h-10 text-center cursor-pointer hover:bg-red-400">
                    <span className="material-symbols-outlined leading-10">favorite</span>
                </div>
            </div>
            <div className="py-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">HomePod Mini</h3>
                    <div className="text-xl font-bold">
                        <span className="align-top text-base">R</span>299<span className="align-top text-base">.99</span>
                    </div>
                </div>
                <p className="text-sm text-gray-900 mt-2">Table with air purifier, stained veneer/black</p>
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
                <button className="btn-atc">Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductItem
