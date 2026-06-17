import {
    CreditCard,
    BadgePercent,
    ClipboardCheck,
    Calculator,
    Check,
    Store,
} from 'lucide-react'

import { Container } from '../../../../components/layout/Container'
import { Button } from '../../../../components/ui/Button'
const conditions = [
    {
        icon: CreditCard,
        title: 'Até R$ 3.000,00',
        description: 'Valor sujeito à análise e aprovação da Torra SCD.',
    },
    {
        icon: BadgePercent,
        title: 'Pagamento em até 15x',
        description: 'Taxas, prazos, encargos e CET são informados antes da contratação.',
    },
    {
        icon: ClipboardCheck,
        title: 'Contratação presencial',
        description: 'O atendimento e a contratação acontecem em uma Loja Torra.',
    },
]

const benefits = [
    'Atendimento em loja',
    'Valor via Pix após aprovação',
    'Sem pagamento antecipado',
]

export function LoanAdvantages() {
    return (
        <section className="py-10">
            <Container>
                <div className="grid grid-cols-3 gap-6">
                    <article className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
                        <h2 className="text-2xl font-extrabold text-[var(--color-dark)]">
                            Condições que cabem no seu bolso
                        </h2>

                        <div className="mt-8 space-y-6">
                            {conditions.map((condition) => {
                                const Icon = condition.icon

                                return (
                                    <div key={condition.title} className="flex gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-[var(--color-dark)]">
                                            <Icon size={24} />
                                        </div>

                                        <div>
                                            <h3 className="font-extrabold text-[var(--color-dark)]">
                                                {condition.title}
                                            </h3>

                                            <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-light)]">
                                                {condition.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </article>

                    <article className="rounded-3xl bg-[var(--color-dark)] p-8 text-[var(--color-white)] shadow-sm">
                        <h2 className="text-2xl font-extrabold">
                            Quer consultar
                            <br />
                            seu empréstimo?
                        </h2>

                        <p className="mt-6 text-sm leading-relaxed text-white/80">
                            Vá até uma Loja Torra, fale com um atendente e consulte as condições disponíveis para o seu perfil.
                        </p>

                        <div className="mt-8">
                            <Button href="https://www.lojastorra.com.br/lojas">
                                Encontrar loja
                            </Button>
                        </div>
                        <div className="mt-10 flex justify-end text-white/20">
                            <Calculator size={120} strokeWidth={1} />
                        </div>
                    </article>

                    <article className="rounded-3xl bg-[var(--color-primary)] p-8 text-[var(--color-white)] shadow-sm">
                        <h2 className="text-3xl font-extrabold leading-tight">
                            Empréstimo feito
                            <br />
                            para facilitar sua vida
                        </h2>

                        <ul className="mt-8 space-y-4">
                            {benefits.map((benefit) => (
                                <li key={benefit} className="flex items-center gap-3">
                                    <Check size={18} />

                                    <span className="font-semibold">
                                        {benefit}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 flex justify-end text-white/25">
                            <Store size={120} strokeWidth={1.2} />
                        </div>
                    </article>
                </div>
            </Container>
        </section>
    )
}