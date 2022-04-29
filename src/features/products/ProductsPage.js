import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ProductsCardItem from "./ProductsCardItem";
import {ProductsService} from "../../fetchs/ProductsService";
import {addProduct, clearProduct} from "./productsSlice";

export const ProductsPage = () => {

    const [products, setProduct] = useState([]);
    const dispatch = useDispatch()
    dispatch(
        clearProduct()
    );
    const productsRdx = useSelector(state => state.products)

    useEffect(async () => {
        if (productsRdx.length > 1)
            return;
        const result = await ProductsService();
        setProduct(result);

        result.map(product => {
            dispatch(
                addProduct({
                    product
                })
            )
        });

    }, []);

    const renderedPosts = productsRdx.slice(1).map(post => {
        return (
            <ProductsCardItem key={post.product.id}
                              compDesc={post.product.company.description}
                              endDate={post.product.company.endDate}
                              prodBrand={post.product.product.brand.name}
                              prodCategory={post.product.product.category.name}
                              imageUrl={post.product.product.imageUrl}
            />
        )
    })

    return (
        <section className="posts-list">
            <h2> Products < /h2>
            <div style={{
                display: "flex",
                flexGrow: 1,
            }}>
                {renderedPosts}
            </div>
        </section>
    )
}
