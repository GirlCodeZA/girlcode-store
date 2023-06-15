const HeroSection = () => {
    return (
        <section className={`py-32 bg-hero-section bg-center bg-cover` }>
            <div className="container mx-auto">
                <div className="w-2/5">
                    <h1 className="text-6xl font-extrabold leading-tight text-girlcode-pink">Shopping And Department Store.</h1>
                    <p className="text-xl mt-9">Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
                    <a href="#" className="btn bg-girlcode-pink text-white text-lg mt-9">Learn More</a>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
