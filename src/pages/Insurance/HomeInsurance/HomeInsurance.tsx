import { Header } from '../../../components/layout/Header'
import { Footer } from '../../../components/layout/Footer'
import { HomeInsuranceHero } from './components/HomeInsuranceHero'
import { HomeInsuranceHighlights } from './components/HomeInsuranceHighlights'
import { HomeInsuranceServices } from './components/HomeInsuranceServices'
import { HomeInsuranceSolutions } from './components/HomeInsuranceSolutions'
import { HomeInsuranceFaq } from './components/HomeInsuranceFaq'

export function HomeInsurance() {
  return (
    <>
      <Header />

      <main>
        <HomeInsuranceHero />
        <HomeInsuranceHighlights />
        <HomeInsuranceServices />
        <HomeInsuranceSolutions />
        <HomeInsuranceFaq />
      </main>

      <Footer />
    </>
  )
}