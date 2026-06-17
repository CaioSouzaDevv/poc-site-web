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
    title: 'Parcelamento em até 24x',
    description:
      'Escolha o número de parcelas que melhor se encaixa no seu orçamento.',
  },
  {
    icon: BadgePercent,
    title: 'Taxas competitivas',
    description: 'Condições exclusivas para clientes Cartão Torra.',
  },
  {
    icon: ClipboardCheck,
    title: 'Crédito personalizado',
    description: 'Valores de acordo com seu perfil, sujeito à aprovação.',
  },
]

const benefits = [
  'Sem burocracia',
  'Atendimento humanizado',
  'Tudo rápido e seguro',
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
              Quer saber quanto
              <br />
              pode contratar?
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-white/80">
              Faça uma simulação na loja e descubra o valor ideal para você.
            </p>

            <div className="mt-8">
              <Button href="/emprestimo-pessoal/lojas">
                Ir para a loja
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