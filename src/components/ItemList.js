import { useDispatch } from "react-redux";
import { CDN_URL } from "../config/constant";
import { addItem } from "../config/cartSlice";

const ItemList=(prop)=>{
    const {items}=prop

    const dispatch=useDispatch()
    const handleAdd=(item)=>{
        dispatch(addItem(item))
    }
  return (
    <div>
      {items.map((item)=>( 
            <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left  flex justify-between">
                <div className="w-9/12 border-2">
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span>-₹{item.card.info.price?item.card.info.price/100 :item.card.info.defaultPrice/100}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-2 " >
                     <div className="relative ">
                        <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg  absolute left-[-25px] top-[100px] " onClick={()=>handleAdd(item)}> ADD+</button>
                     </div>
                     <img src={CDN_URL+item.card.info.imageId} alt="No image found"  className="w-full"/>
                </div>
            </div>
      ))}
    </div>
  )
}

export default ItemList;