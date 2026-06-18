import { Header } from '../../../components/layout/Header'
import { Footer } from '../../../components/layout/Footer'
import { FinancialProtectionHero } from './components/FinancialProtectionHero'
import { FinancialProtectionHighlights } from './components/FinancialProtectionHighlights'
import { FinancialProtectionServices } from './components/FinancialProtectionServices'
import { FinancialProtectionSolutions } from './components/FinancialProtectionSolutions'
import { FinancialProtectionFaq } from './components/FinancialProtectionFaq'

export function FinancialProtection() {
  return (
    <>
      <Header />

      <main>
        <FinancialProtectionHero />
        <FinancialProtectionHighlights />
        <FinancialProtectionServices />
        <FinancialProtectionSolutions />
        <FinancialProtectionFaq />
      </main>

      <Footer />
    </>
  )
}