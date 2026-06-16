import { Container } from '../../layout/Container'
import { Button } from '../../ui/Button'
import {
    House,
    Car,
    HeartPulse,
    Smile,
    Briefcase,
    ShieldCheck,
} from 'lucide-react'


const insurances = [
    {
        icon: House,
        title: 'Seguro Lar',
        description: 'Proteção para o seu lar e família',
    },
    {
        icon: Car,
        title: 'Seguro Auto',
        description: 'Mais segurança para seu veículo',
    },
    {
        icon: HeartPulse,
        title: 'Seguro Saúde',
        description: 'Seu bem-estar em primeiro lugar',
    },
    {
        icon: Smile,
        title: 'Seguro Odonto',
        description: 'Cuidado completo para seu sorriso',
    },
    {
        icon: Briefcase,
        title: 'Bolsa Protegida',
        description: 'Proteção para seus pertences',
    },
    {
        icon: ShieldCheck,
        title: 'Proteção Financeira',
        description: 'Mais segurança para seu bolso',
    },
]

export function Insurance() {
    return (
        <section className="py-24">
            <Container>
                <div className="text-center align-center">
                    <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]">
                        Proteção para todos os momentos
                    </span>

                    <h2 className="mt-4 text-4xl font-extrabold text-[var(--color-dark)]">
                        Seguros e Assistências
                    </h2>
                </div>

                <div className="mt-14 grid grid-cols-6 gap-6">
                    {insurances.map((insurance) => {
                        const Icon = insurance.icon

                        return (
                            <article
                                key={insurance.title}
                                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                            >
                                <div className="mb-4 flex justify-center items-center">
                                    <Icon
                                        size={32}
                                        className="text-[var(--color-primary)]"
                                    />
                                </div>

                                <h3 className="font-bold text-[var(--color-dark)] text-center">
                                    {insurance.title}
                                </h3>

                                <p className="mt-2 text-sm text-[var(--color-text-light)] text-center">
                                    {insurance.description}
                                </p>
                            </article>
                        )
                    })}
                </div>

                <div className="mt-10 flex justify-center">
                    <Button variant="outline-primary">
                        Ver todos os seguros
                    </Button>
                </div>
            </Container>
        </section>
    )
}