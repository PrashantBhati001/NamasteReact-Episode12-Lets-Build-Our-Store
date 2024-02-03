import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../config/cartSlice";

const Cart=()=>{

    const item=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch()

    const handleClear=()=>{
          dispatch(clearCart())
    }

    return (
        <div className="text-center font-bold">
          <h1>Cart</h1>
          <button onClick={handleClear} className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg">Clear Cart</button>
          {item.length===0 && (<h1>Cart is empty!!!</h1>)}
          <div className="w-6/12 mx-auto  bg-slate-200  shadow-lg ">
            <ItemList items={item}/>
          </div>
          
        </div>
    )

}

export default Cart;