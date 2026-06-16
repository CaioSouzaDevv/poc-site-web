import { Header } from '../../components/layout/Header'
import { Hero } from '../../components/sections/Hero'
import { QuickActions } from '../../components/sections/QuickActions/QuickActions'
export function Home() {
    return (
        <>
            <Header />

            <main>
                <Hero />
                <QuickActions />
            </main>
        </>
    )
}