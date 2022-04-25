import Link                       from 'next/link'
import { FC }                     from 'react'
import { urlFor }                 from '../lib/client'
import { Product as ProductType } from '../types'

interface IProduct {
  product: ProductType
}

const Product: FC<IProduct> = ({ product }) => {
  return (
    <div>
      <Link href={`/product/${product.slug.current}`}>
        <div className='product-card'>
          <img
            src={`${urlFor(product.image[0].asset._ref)}`}
            width={250}
            height={250}
            className='product-image'
            alt='product'
          />
          <p className='product-name'>{product.name}</p>
          <p className='product-price'>${product.price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product

