import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CartIcon = () => {
  const { cart } = useContext(CartContext)
  return (
    <span className="bg-red-500 text-white flex w-5 h-5 justify-center items-center rounded-full absolute -top-2 -right-3 text-xs">
      {cart.length}
    </span>
  )
}

export default CartIcon
