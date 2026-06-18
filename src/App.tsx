import { BrowserRouter, Route, Routes } from 'react-router'

import { Home } from './pages/Home'
import { Insurance } from './pages/Insurance'
import { HomeInsurance } from './pages/Insurance/HomeInsurance'
import { AutoInsurance } from './pages/Insurance/AutoInsurance'
import { DentalInsurance } from './pages/Insurance/DentalInsurance'
import { ProtectedBag } from './pages/Insurance/ProtectedBag'
import { FinancialProtection } from './pages/Insurance/FinancialProtection'
import { PersonalLoan } from './pages/PersonalLoan'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartao-torra" element={<Home />} />
        <Route path="/seguros" element={<Insurance />} />
        <Route path="/seguros/lar" element={<HomeInsurance />} />
        <Route path="/seguros/auto" element={<AutoInsurance />} />
        <Route path="/seguros/odonto" element={<DentalInsurance />} />
        <Route path="/seguros/bolsa-protegida" element={<ProtectedBag />} />
        <Route path="/seguros/protecao-financeira" element={<FinancialProtection />} />
        <Route path="/emprestimo-pessoal" element={<PersonalLoan />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App