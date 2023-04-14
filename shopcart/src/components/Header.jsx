import React from "react"
import { FiShoppingCart } from "react-icons/fi"
import CartIcon from "./CartIcon"

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-semibold">
        React ve Tailwind Sepet Uygulaması
      </h1>
      <div className="relative">
        <FiShoppingCart className="text-2xl" />
        <CartIcon />
      </div>
    </div>
  )
}

export default Header
