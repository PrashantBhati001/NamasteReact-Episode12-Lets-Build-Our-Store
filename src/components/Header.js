import { LOGO_URL } from "../config/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../config/useOnlineStatus";
import { useSelector } from "react-redux";

const Header=()=>{

    // const [accessbtn,setaccessbtn]=useState("Login")  
    // const onlineStatus=useOnlineStatus()
    const cartItems=useSelector((state)=>state.cart.items)
    return (
        <div className="flex  justify-between items-center   shadow-lg ">
            <div>
                <Link to="/"><img className="w-24" src={LOGO_URL} alt="Image not found" /></Link>
            </div>
            <div>
                <ul className="flex items-center">
                    {/* <li className="p-2">Online Status:{onlineStatus?"✅":"🚩"}</li> */}
                    <li className="px-2 font-montserrat font-bold opacity-60 ml-7 hover:text-orange-500 hover:opacity-100"><Link to="/">Home</Link></li>
                    <li className="px-2 font-montserrat font-bold opacity-60 ml-7 hover:text-orange-500 hover:opacity-100"><Link to="/about">About Us</Link></li>
                    {/* <li className="p-2"><Link to="/contact">Contact Us</Link></li> */}
                    {/* <li className="p-2"><Link to="/grocery">Grocery</Link></li> */}

                    <li className="p-2 font-bold"><Link  className="flex justify-between items-center ml-7 mr-2 hover:text-orange-500 font-montserrat" to="/cart">
                            {cartItems.length === 0 ? (
                                <span className="relative flex justify-center -left-1 ">
                                    <svg
                                    className="fill-none stroke-2 stroke-[#282c3f] "
                                    viewBox="-1 0 37 32"
                                    height={20}
                                    width={20}
                                    >
                                    <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                                    </svg>
                                    <span className="absolute font-montserrat text-sm group-hover:text-orangeColor">
                                    {cartItems.length}
                                    </span>
                                </span>
                                ) : (
                                <span className="relative flex justify-center -left-1">
                                    <svg
                                    className="fill-[#60b246] stroke-0 stroke-[#60b246] "
                                    viewBox="-1 0 37 32"
                                    height={20}
                                    width={20}
                                    >
                                    <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                                    </svg>
                                    <span className="absolute font-montserrat text-sm text-white">
                                    {cartItems.length}
                                    </span>
                               </span>
                        )}

                        <span className="group-hover:text-orangeColor"> Cart</span>


                    </Link></li>


                    {/* <button className="p-2 mr-2 border-solid  border-black border-1 bg-slate-400"  onClick={()=>{
                        accessbtn=="Login" ?setaccessbtn("Logout"):setaccessbtn("Login")
                    }}>{accessbtn}</button> */}
                </ul>
            </div>

        </div>
    )

}

export default Header




