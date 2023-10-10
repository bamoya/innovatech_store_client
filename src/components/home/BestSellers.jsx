import React from 'react'
import SectionTitle from '../Utiity/SectionTitle'
import Card from '../product/Card'

const BestSellers = ({newProducts}) => {
  return (
    <div className="my-20">
        
        <SectionTitle title={'BestSellers'} link={'shop/products/type/new'} />
        <div 
            className="flex justify-evenly flex-wrap ">
            {newProducts.map( (product) => ( 
                <div className='px-2 py-5'>
                  <Card
                  key={product.id}
                  id={product.id}
                  title={product.attributes?.title}
                  price={product.attributes?.price}
                  subtitle={product.attributes?.subtitle}
                  imgSrc={ 
                    process.env.REACT_APP_UPLOAD_URL + product?.attributes?.images.data[0].attributes.url
                    
                  }
                  />
                </div>
                
            ))}

        </div>
        
    </div>
  )
}

export default BestSellers