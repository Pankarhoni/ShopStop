import React, { useContext } from 'react'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const Product = () => {
  const {products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = products.find((e)=>e.id === Number(productId));
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <RelatedProducts tag={product.tag}/>
    </div>
  )
}

export default Product
