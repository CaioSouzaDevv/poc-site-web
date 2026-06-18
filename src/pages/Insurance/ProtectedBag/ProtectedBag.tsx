import { Header } from '../../../components/layout/Header'
import { Footer } from '../../../components/layout/Footer'
import { ProtectedBagHero } from './components/ProtectedBagHero'
import { ProtectedBagHighlights } from './components/ProtectedBagHighlights'
import { ProtectedBagServices } from './components/ProtectedBagServices'
import { ProtectedBagSolutions } from './components/ProtectedBagSolutions'
import { ProtectedBagFaq } from './components/ProtectedBagFaq'

export function ProtectedBag() {
  return (
    <>
      <Header />

      <main>
        <ProtectedBagHero />
        <ProtectedBagHighlights />
        <ProtectedBagServices />
        <ProtectedBagSolutions />
        <ProtectedBagFaq />
      </main>

      <Footer />
    </>
  )
}