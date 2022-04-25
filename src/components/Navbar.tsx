import Link                  from 'next/link'
import { FC }                from 'react'
import { AiOutlineShopping } from 'react-icons/ai'
import Cart                  from './Cart'

const Navbar: FC = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>Bitss best store</Link>
      </p>

      <button
        type='button'
        className='cart-icon'
      >
        <AiOutlineShopping />
        <span className='cart-item-qty'>0</span>
      </button>

      {false && <Cart />}
    </div>
  )
}

export default Navbar

