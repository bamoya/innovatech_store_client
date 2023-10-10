import React from 'react'
import ShopContainer from '../../components/shop/ShopContainer'
import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import ProductsGrid from '../../components/shop/ProductsGrid'
import BreadCrumbs from '../../components/Utiity/BreadCrumbs'


const ShopByCategory = () => {
    const {id} = useParams()
    console.log(id)
    const {data: products, loading} = useFetch(`/products?populate=*&filters[category][id][$eq]=${id}`)
    return (
        <div className='mx-auto px-10 my-20 pt-4 pb-16'>
            <BreadCrumbs />
            <ProductsGrid 
            products={products}
            />
        </div>
    )
}

export default ShopByCategory