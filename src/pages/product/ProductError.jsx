import { Link, useRouteError } from "react-router-dom"


function ProductError() {
   const error= useRouteError()
  return (
    <div>
        <h1>{error.message}</h1>
        <Link to="/">back to home page</Link>
    </div>
  )
}

export default ProductError