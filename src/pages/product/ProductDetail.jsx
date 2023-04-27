import { useLoaderData, useParams } from "react-router-dom"


function ProductDetail() {
    const {id}=useParams()
    const data=useLoaderData()
    console.log(data)
  return (
     <div className="card">
        <h1>{data.title}</h1>
        <h2>{data.brand}</h2>
        <p>{data.price}</p>
     </div>
  )
}

export default ProductDetail

export const singleProductLoader=async({params})=>{
    const {id}=params
    const res=await fetch(`https://dummyjson.com/products/${id}`)
    if (!res.ok){
      throw Error ("No product found");
    }
    return res.json()
}