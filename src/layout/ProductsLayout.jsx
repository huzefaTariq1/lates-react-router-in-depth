import { Outlet } from "react-router-dom"

function ProductsLayout() {
  return (
     <div>
        <h1>Here are List of Products</h1>
        <Outlet/>
     </div>
  )
}

export default ProductsLayout