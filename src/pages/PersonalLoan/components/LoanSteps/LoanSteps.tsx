import { Store, UserRound, ClipboardCheck, HandCoins } from 'lucide-react'

import { Container } from '../../../../components/layout/Container'

const steps = [
    {
        icon: Store,
        number: '1',
        title: 'Vá até a loja Torra',
        description: 'Encontre a loja mais próxima de você.',
    },
    {
        icon: UserRound,
        number: '2',
        title: 'Fale com um atendente',
        description: 'Apresente seus documentos e faça uma simulação.',
    },
    {
        icon: ClipboardCheck,
        number: '3',
        title: 'Aguarde a análise',
        description: 'Seu crédito será analisado e aprovado na hora.',
    },
    {
        icon: HandCoins,
        number: '4',
        title: 'Dinheiro na sua mão',
        description: 'Após aprovação, o valor é liberado rapidamente.',
    },
]

export function LoanSteps() {
    return (
        <section id="como-funciona" className="py-20">
            <Container>
                <div className="text-center">
                    <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]">
                        Como funciona
                    </span>

                    <h2 className="mt-4 text-4xl font-extrabold text-[var(--color-dark)]">
                        É rápido, simples e feito na loja
                    </h2>
                </div>

                <div className="mt-14 grid grid-cols-4 gap-8">
                    {steps.map((step) => {
                        const Icon = step.icon

                        return (
                            <article key={step.number} className="text-center">
                                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
                                    <Icon size={40} />
                                </div>

                                <span className="mx-auto -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white">
                                    {step.number}
                                </span>

                                <h3 className="mt-6 font-extrabold text-[var(--color-dark)]">
                                    {step.title}
                                </h3>

                                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-light)]">
                                    {step.description}
                                </p>
                            </article>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}