import { Clock3, ShieldCheck, Wrench, Store } from 'lucide-react'

import { Container } from '../../../../../components/layout/Container'

const benefits = [
    {
        icon: Clock3,
        title: 'Atendimento 24 horas',
        description:
            'Suporte disponível para situações emergenciais previstas no regulamento.',
    },
    {
        icon: Wrench,
        title: 'Serviços essenciais',
        description:
            'Auxílio para imprevistos com encanador, eletricista, chaveiro e outros serviços.',
    },
    {
        icon: ShieldCheck,
        title: 'Mais segurança',
        description:
            'Conte com uma rede de profissionais para ajudar a proteger sua rotina.',
    },
    {
        icon: Store,
        title: 'Contratação em loja',
        description:
            'A adesão deve ser feita presencialmente em uma Loja Torra.',
    },
]

export function HomeInsuranceBenefits() {
    return (
        <section className="bg-white py-20">
            <Container>
                <div className="mx-auto max-w-[760px] text-center">
                    <span className="text-sm font-extrabold uppercase tracking-wide text-[var(--color-primary)]">
                        Benefícios
                    </span>

                    <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[var(--color-dark)]">
                        Mais tranquilidade para cuidar da sua casa
                    </h2>

                    <p className="mt-5 text-base leading-relaxed text-slate-600">
                        A Assistência Lar Cartão Torra oferece apoio para imprevistos
                        residenciais, com praticidade, orientação e serviços para o dia a dia.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {benefits.map((benefit) => {
                        const Icon = benefit.icon

                        return (
                            <article
                                key={benefit.title}
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[var(--color-primary)]">
                                    <Icon size={24} />
                                </div>

                                <h3 className="mt-6 text-lg font-extrabold text-[var(--color-dark)]">
                                    {benefit.title}
                                </h3>

                                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                    {benefit.description}
                                </p>
                            </article>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}