import React, { useState } from 'react'
import "./ProductSection.css"
import ProductCard from "./ProcuctCard"
function ProductSection() {
  const [imgSource, setimgSource] = useState("")
  return (
    <div className='container ProductsSection'>
        <ProductCard imgSource ={imgSource}/>
        <ProductCard imgSource ={imgSource}/>
        <ProductCard imgSource ={imgSource}/>
        <ProductCard imgSource ={imgSource}/>
        <ProductCard imgSource ={imgSource}/>
        <ProductCard imgSource ={imgSource}/>
    </div>
  )
}

export default ProductSection