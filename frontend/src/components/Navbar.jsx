import { Link, NavLink } from "react-router-dom"
import { assets } from "../assets/assets"
import { useContext, useState } from "react"
import { ShopContext } from "../context/ShopContext"

const Navbar = () => {

    const [visible, setVisible] = useState(false)

    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext)

    const logout = () => {
        localStorage.removeItem("token")
        setToken("")
        setCartItems({})
        navigate("/login")
    }

    return (
        <div className="flex items-center justify-between py-5 font-medium sticky top-0 bg-white border-b z-50">

            <Link to={"/"}><img src={assets.logo} alt="logo" className="w-36" /></Link>
            <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
                <NavLink to='/' className="flex flex-col items-center gap-1">
                    <p>HOME</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
                <NavLink to='/collection' className="flex flex-col items-center gap-1">
                    <p>COLLECTION</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
                <NavLink to='/about' className="flex flex-col items-center gap-1">
                    <p>ABOUT</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
                <NavLink to='/contact' className="flex flex-col items-center gap-1">
                    <p>CONTACT</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
                <NavLink to='/privacy-policy' className="flex flex-col items-center gap-1">
                    <p>PRIVACY POLICY</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
                <NavLink to='/faq' className="flex flex-col items-center gap-1">
                    <p>FAQ</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
                <Link to="https://forever-admin-plum.vercel.app/overview" className="border-2 py-1 px-3 rounded-xl border-stone-700">Admin Panel</Link>
            </ul>
            <div className="flex items-center gap-6">
                <img onClick={() => setShowSearch(true)} src={assets.search_icon} alt="Search Icon" className="w-5 cursor-pointer" />

                <div className="group relative">
                    <Link to={"/login"}><img onClick={() => token ? null : navigate("/login")} src={assets.profile_icon} className="w-5 cursor-pointer" alt="Profile pic" /></Link>
                    {/* dropdown  */}
                    {token && <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                        <div className="flex flex-col gap-2 w-52 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                            <Link to={"/profile"} className="cursor-pointer hover:text-black">My Profile</Link>
                            <Link to={"/orders"} className="cursor-pointer hover:text-black">Orders</Link>
                            <Link to={"/my-transaction"} className="cursor-pointer hover:text-black">My Transaction</Link>
                            <Link to={"/change-password"} className="cursor-pointer hover:text-black">Change Password</Link>
                            <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
                        </div>
                    </div>}
                </div>
                <Link to={"/cart"} className="relative">
                    <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart Icon" />
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
                </Link>
                <img src={assets.menu_icon} onClick={() => setVisible(true)} className="w-5 cursor-pointer sm:hidden" alt="" />
            </div>
            {/* Sidebar menu for small screens */}
            <div
                className={`absolute top-0 z-100 bottom-0 bg-white transition-all ${visible ? "w-full" : "w-0"
                    } h-screen overflow-y-auto`}
            >
                <div className="flex flex-col text-gray-600">
                    <div
                        onClick={() => setVisible(false)}
                        className="flex items-center gap-4 p-3 cursor-pointer"
                    >
                        <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="dropdown icon" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to={"/"}>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to={"/collection"}>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to={"/about"}>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to={"/contact"}>CONTACT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to={"/privacy-policy"}>PRIVACY POLICY</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to={"/faq"}>FAQ</NavLink>
                    <Link onClick={() => setVisible(false)} className="py-2 pl-6 border" to={"https://forever-admin-plum.vercel.app/"}>Admin Panel</Link>
                </div>
            </div>

        </div>
    )
}

export default Navbar