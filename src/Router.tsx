import { Route, Routes } from 'react-router-dom'

import { Checkout } from './pages/Checkout'
import { FinishedCheckout } from './pages/FinishedCheckout'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/finished" element={<FinishedCheckout />} />
    </Routes>
  )
}
