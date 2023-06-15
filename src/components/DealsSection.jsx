import ProductItem from "./ProductItem";

const DealsSection = () => {
    return (
        <section className="pt-20">
            <div className="container mx-auto">
                <div className="mb-9">
                    <h2 className="text-2xl font-extrabold">Todays Best Deals For You!</h2>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>
        </section>
    )
}

export default DealsSection;
