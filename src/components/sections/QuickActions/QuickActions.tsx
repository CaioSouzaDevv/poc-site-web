import { Container } from '../../layout/Container'

const quickActions = [
    {
        title: 'Pague sua fatura',
        description: '2ª via de boleto',
        href: '/fatura',
    },
    {
        title: 'Consulte seu limite',
        description: 'Acesse agora',
        href: '/limite',
    },
    {
        title: 'Negocie sua dívida',
        description: 'Parcele em até 12x',
        href: '/negociacao',
    },
    {
        title: 'Empréstimo pessoal',
        description: 'Crédito rápido para você',
        href: '/emprestimo-pessoal',
    },
    {
        title: 'Atendimento',
        description: 'Fale com a gente',
        href: '/atendimento',
    },
]

export function QuickActions() {
    return (
        <section className="relative z-10 -mt-12">
            <Container>
                <div className="grid grid-cols-5 rounded-2xl bg-[var(--color-white)] px-8 py-6 shadow-xl">
                    {quickActions.map((action) => (
                        <a
                            key={action.href}
                            href={action.href}
                            className="flex items-center gap-4 border-r border-gray-200 px-4 last:border-r-0"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--color-primary)] text-[var(--color-primary)]">
                                ●
                            </div>

                            <div>
                                <h3 className="text-sm font-extrabold uppercase text-[var(--color-dark)]">
                                    {action.title}
                                </h3>

                                <p className="mt-1 text-sm text-[var(--color-text-light)]">
                                    {action.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </Container>
        </section>
    )
}