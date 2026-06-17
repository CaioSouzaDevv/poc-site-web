import { Header } from '../../components/layout/Header'
import { Footer } from '../../components/layout/Footer'
import { QuickActions } from '../../components/sections/QuickActions'

import { PersonalLoanHero } from './components/PersonalLoanHero'
import { LoanSteps } from './components/LoanSteps'
import { LoanAdvantages } from './components/LoanAdvantages'
import { LoanDocuments } from './components/LoanDocuments'
import { LoanSupportSection } from './components/LoanSupportSection'

export function PersonalLoan() {
  return (
    <>
      <Header />

      <main>
        <PersonalLoanHero />
        <QuickActions />
        <LoanSteps />
        <LoanAdvantages />
        <LoanDocuments />
        <LoanSupportSection />
      </main>

      <Footer />
    </>
  )
}