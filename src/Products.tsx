import { useDispatch, useSelector } from "react-redux"
import type { RootType } from "./reduxStore";
import { useEffect } from "react";
import { fetchProducts } from "./ProductSlice";

const Products = () => {
    const dispatch = useDispatch<any>();
    const products = useSelector((state: RootType) => state.products.items)
    useEffect(() => {

        dispatch(fetchProducts());


    }, [])

    return (
        <>
            <div id="products">
                {
                    products?.map((item) => {
                        return (
                            <>
                                <div>
                                    <h3>{item.title}</h3>
                                    <div>{item.description}</div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Products;