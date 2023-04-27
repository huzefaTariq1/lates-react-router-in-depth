import { Link, useLoaderData } from "react-router-dom"

function Products() {
  const data=useLoaderData()
  const {products}=data
  
  
  return (
     <>
     {products.map(obj=>(
      <Link to={obj.id.toString()} className="card">
        <h3>{obj.title}</h3>
        <p>{obj.price}</p>
      </Link>
     ))}
     </>
  )
}

export default Products

export const productsLoader=async()=>{
  const res=await fetch('https://dummyjson.com/products')
  if (!res.ok){
    throw Error("Could Not Fetch")
  }
   return res.json()
}