import React from 'react'

function Cart({user}) {
  const products = user.products;
  console.log(products)
  return (
    <>
    <div>user email :  {user.email} </div>
    {products.map((item,index)=>{
      return(<div key={index}>{item}</div>)
    })}
    </>
    
  )
}

export default Cart