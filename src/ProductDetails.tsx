import { useDispatch, useSelector } from "react-redux";
import type { RootType } from "./reduxStore";
import { increment, incrementByAmount } from "./CartCountSlicer";
import Header from "./Header";

const ProductDetails=()=>{
    const dispatch=useDispatch();
    //console.log(store)
    const cartCount=useSelector((state:RootType)=>state.cartCount.value)
    return (
        <>
        <Header/>

        <div id="productDetails">
            <div>
                <h3>Product Name</h3>
            <div>Product Description</div>
            </div>
            <div>
                <h3>1200</h3>
                <button onClick={()=>dispatch(incrementByAmount(6))} >Add to Cart</button>
                Cart:{cartCount}
            </div>
        </div>
        </>
    )
}
export default ProductDetails;
