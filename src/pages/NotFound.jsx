import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div>
        <h1>OOps page Not found</h1>
        <p>Go to <Link to="/">HomePage</Link></p>
    </div>
  )
}

export default NotFound