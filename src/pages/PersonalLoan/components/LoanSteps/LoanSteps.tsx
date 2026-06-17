import { Store, UserRound, ClipboardCheck, HandCoins } from 'lucide-react'

import { Container } from '../../../../components/layout/Container'

const steps = [
  {
    icon: Store,
    number: '1',
    title: 'Vá até uma Loja Torra',
    description: 'Procure a loja de sua preferência e fale com um atendente.',
  },
  {
    icon: UserRound,
    number: '2',
    title: 'Consulte o valor disponível',
    description: 'A contratação é presencial e disponível para clientes pré-selecionados.',
  },
  {
    icon: ClipboardCheck,
    number: '3',
    title: 'Escolha valor e parcelas',
    description: 'Informe o valor desejado e escolha em até 15 parcelas.',
  },
  {
    icon: HandCoins,
    number: '4',
    title: 'Receba via Pix',
    description: 'Após aprovação, o valor é transferido para a conta informada.',
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