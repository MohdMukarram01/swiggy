import { Suspense, lazy, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Coordinates } from "./ContextData/Context.js"
import { useSelector } from "react-redux"

// ✅ Lazy loaded components
const Head = lazy(() => import("./Components/Head"))
const Body = lazy(() => import("./Components/Body"))
const RestaurantMenu = lazy(() => import("./Components/RestaurantMenu"))
const Cart = lazy(() => import("./Components/Cart.jsx"))
const Search = lazy(() => import("./Components/Search"))
// const Signin = lazy(() => import("./Components/Signin")) // agar chahiye to ye bhi add kar sakte ho

function App() {
  const [coord, setcoord] = useState({ lat: 18.96862260313707, lng: 72.82153755329409 })
  const cartData = useSelector((state) => state.cartslice.cartItems)

  return (
    <Coordinates.Provider value={{ coord, setcoord }}>
      {/* Suspense tab tak fallback show karta hai jab tak component load nahi hota */}
      <Suspense fallback={<div className="text-center p-10 text-xl">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Head />}>
            <Route index element={<Body />} />
            <Route path="/restaurant/:id" element={<RestaurantMenu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<Search />} />
          </Route>
        </Routes>
      </Suspense>
    </Coordinates.Provider>
  )
}

export default App
