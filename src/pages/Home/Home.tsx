import { Header } from '../../components/layout/Header'
import { Hero } from '../../components/sections/Hero'
import { QuickActions } from '../../components/sections/QuickActions/QuickActions'
import { Products } from '../../components/sections/Products/Products'
import { Insurance } from '../../components/sections/Insurance'
import { BonusBanner } from '../../components/sections/BonusBanner'
export function Home() {
    return (
        <>
            <Header />

            <main>
                <Hero />
                <QuickActions />
                <Products />
                <Insurance />
                <BonusBanner />
            </main>
        </>
    )
}