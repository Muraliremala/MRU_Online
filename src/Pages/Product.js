import React, { useContext } from 'react'
import { CategoryContext } from '../Context/CategoryContext'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'

const Product = () => {
  const {all_product} = useContext(CategoryContext)
  const {productId} = useParams()
  const product = all_product.find((ele) => 
    ele.id === Number(productId))
  return (
    <div>
      <Breadcrum product = {product}/>
      <ProductDisplay product ={product}/>
    </div>
  )
}

export default Product
