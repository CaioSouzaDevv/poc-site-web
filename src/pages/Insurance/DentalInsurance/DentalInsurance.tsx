import { Header } from '../../../components/layout/Header'
import { Footer } from '../../../components/layout/Footer'
import { DentalInsuranceHero } from './components/DentalInsuranceHero'
import { DentalInsuranceHighlights } from './components/DentalInsuranceHighlights'
import { DentalInsuranceServices } from './components/DentalInsuranceServices'
import { DentalInsuranceSolutions } from './components/DentalInsuranceSolutions'
import { DentalInsuranceFaq } from './components/DentalInsuranceFaq'

export function DentalInsurance() {
  return (
    <>
      <Header />

      <main>
        <DentalInsuranceHero />
        <DentalInsuranceHighlights />
        <DentalInsuranceServices />
        <DentalInsuranceSolutions />
        <DentalInsuranceFaq />
      </main>

      <Footer />
    </>
  )
}