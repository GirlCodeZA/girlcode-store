const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-y-3 justify-between">
                <div className="bar-contact">
                    <a href="tel:+27123456789"><span className="material-symbols-outlined">call</span>+27123456789</a>
                </div>
                <div className="bar-cta hidden sm:block">
                    <p>Get 50% off on selected items | <a href="#">Shop Now</a></p>
                </div>
                <div className="bar-localisation">
                    <ul>
                        <li>Eng <span className="material-symbols-outlined">expand_more</span></li>
                        <li>Location <span className="material-symbols-outlined">expand_more</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TopBar;
