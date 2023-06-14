import furnImg from "../assets/furniture.jpg"

const CategorySection = () => {
    return (
        <section className="pt-20">
            <div className="container mx-auto">
                <div className="mb-9">
                    <h2 className="text-2xl font-extrabold">Shop Our Top Categories</h2>
                </div>
                <div className="grid grid-cols-6 gap-8">
                    <div className="rounded-xl overflow-hidden relative">
                        <img src={furnImg} alt="Furniture Category"/>
                        <h3 className="absolute top-3 left-1/2 text-2xl font-extrabold text-girlcode-pink -translate-x-1/2">Furniture</h3>
                    </div>
                    <div className="rounded-xl overflow-hidden relative">
                        <img src={furnImg} alt="Furniture Category"/>
                        <h3 className="absolute top-3 left-1/2 text-2xl font-extrabold text-girlcode-pink -translate-x-1/2">Furniture</h3>
                    </div>
                    <div className="rounded-xl overflow-hidden relative">
                        <img src={furnImg} alt="Furniture Category"/>
                        <h3 className="absolute top-3 left-1/2 text-2xl font-extrabold text-girlcode-pink -translate-x-1/2">Furniture</h3>
                    </div>
                    <div className="rounded-xl overflow-hidden relative">
                        <img src={furnImg} alt="Furniture Category"/>
                        <h3 className="absolute top-3 left-1/2 text-2xl font-extrabold text-girlcode-pink -translate-x-1/2">Furniture</h3>
                    </div>
                    <div className="rounded-xl overflow-hidden relative">
                        <img src={furnImg} alt="Furniture Category"/>
                        <h3 className="absolute top-3 left-1/2 text-2xl font-extrabold text-girlcode-pink -translate-x-1/2">Furniture</h3>
                    </div>
                    <div className="rounded-xl overflow-hidden relative">
                        <img src={furnImg} alt="Furniture Category"/>
                        <h3 className="absolute top-3 left-1/2 text-2xl font-extrabold text-girlcode-pink -translate-x-1/2">Furniture</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategorySection;
