import { Header } from '../../../components/layout/Header'
import { Footer } from '../../../components/layout/Footer'
import { AutoInsuranceHero } from './components/AutoInsuranceHero'
import { AutoInsuranceHighlights } from './components/AutoInsuranceHighlights'
import { AutoInsuranceServices } from './components/AutoInsuranceServices'
import { AutoInsuranceSolutions } from './components/AutoInsuranceSolutions'
import { AutoInsuranceFaq } from './components/AutoInsuranceFaq'

export function AutoInsurance() {
  return (
    <>
      <Header />

      <main>
        <AutoInsuranceHero />
        <AutoInsuranceHighlights />
        <AutoInsuranceServices />
        <AutoInsuranceSolutions />
        <AutoInsuranceFaq />
      </main>

      <Footer />
    </>
  )
}