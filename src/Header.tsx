import { useSelector } from "react-redux";
import type { RootType } from "./reduxStore";

const Header=()=>{

    const cartCount=useSelector((state:RootType)=>state.cartCount.value)
    return (
        <>
        <div id="header">
            <img/>
            <div>
<a href="#">Home</a> <a href="#">Contact us</a>
            </div>
            <div>
                Cart:{cartCount}
            </div>
        </div>
        </>
    )
}
export default Header;
