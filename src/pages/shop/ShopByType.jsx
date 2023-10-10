import React from 'react'
import ShopContainer from '../../components/shop/ShopContainer'
import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import ProductsGrid from '../../components/shop/ProductsGrid'
import BreadCrumbs from '../../components/Utiity/BreadCrumbs'


const ShopByType = () => {
    const {type} = useParams()
    const {data: products, loading} = useFetch(`/products?populate=*&filters[type][$eq]=${type}`)
    return (
        <div className='mx-auto px-10 my-20'>
            <BreadCrumbs />
            <ProductsGrid products={products} />
        </div>
    )
}

export default ShopByType