import { Link } from "react-router-dom"
import logo from "../assets/logo-black.png"

const NavBar = () => {
    return (
        <div className="nav-bar py-3">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="w-44 block">
                    <img src={logo} alt="Girlcode Store Logo" />
                </Link>
                <ul className="hidden xl:flex gap-6">
                    <li>
                        <a href="#" className="font-bold">Categories</a>
                    </li>
                    <li>
                        <a href="#" className="font-bold">Deals</a>
                    </li>
                    <li>
                        <a href="#" className="font-bold">What&apos;s New</a>
                    </li>
                    <li>
                        <a href="#" className="font-bold">Delivery</a>
                    </li>
                </ul>
                <div className="hidden sm:flex gap-6 items-center">
                    <form className="hidden lg:flex bg-slate-200 w-fit py-1.5 px-5 rounded-3xl">
                        <input type="text" name="search" placeholder="Search Products" className="outline-0 bg-transparent" />
                        <button>
                            <span className="material-symbols-outlined align-middle">search</span>
                        </button>
                    </form>
                    <a href="" className="font-bold"><span className="material-symbols-outlined align-middle">person</span> Account</a>
                    <Link to="/cart" className="font-bold"><span className="material-symbols-outlined align-middle">shopping_cart</span> Cart</Link>
                </div>
                <div className="xl:hidden">
                    <span className="material-symbols-outlined">menu</span>
                </div>
            </div>

        </div>
    )
}

export default NavBar;
