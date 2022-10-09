import React from 'react'
import { Link } from 'react-router-dom'
const Products = () => {
  return (
    <section>
      <h1>Product Page</h1>
      <ul>
        <li>
          <Link to='/products/p1'>A Book</Link>
        </li>
        <li>
          <Link to='/products/p2'>A Car</Link>
        </li>
        <li>
          <Link to='/products/p3'>A House</Link>
        </li>
      </ul>
    </section>
  )
}

export default Products