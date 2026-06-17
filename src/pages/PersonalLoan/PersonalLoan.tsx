import { Header } from '../../components/layout/Header'
import { Footer } from '../../components/layout/Footer'
import { PersonalLoanHero } from './components/PersonalLoanHero'
import { QuickActions } from '../../components/sections/QuickActions'
import { LoanSteps } from './components/LoanSteps'
import { LoanAdvantages } from './components/LoanAdvantages'
export function PersonalLoan() {
  return (
    <>
      <Header />

      <main>
        <PersonalLoanHero />
        <QuickActions />
        <LoanSteps />
        <LoanAdvantages />
      </main>

      <Footer />
    </>
  )
}