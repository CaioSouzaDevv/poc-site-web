import { Header } from '../../components/layout/Header'
import { Footer } from '../../components/layout/Footer'
import { QuickActions } from '../../components/sections/QuickActions'

import { InsuranceHero } from './components/InsuranceHero'
import { InsuranceProducts } from './components/InsuranceProducts/InsuranceProducts'
import { InsuranceBenefits } from './components/InsuranceBenefits'
import { HomeInsuranceHighlights } from './HomeInsurance/components/HomeInsuranceHighlights'

export function Insurance() {
    return (
        <>
            <Header />

            <main>
                <InsuranceHero />
                <QuickActions />

                <InsuranceBenefits />
                <InsuranceProducts />
                

            </main>

            <Footer />
        </>
    )
}