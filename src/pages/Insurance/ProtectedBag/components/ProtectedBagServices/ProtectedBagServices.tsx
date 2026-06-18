import {
  ShoppingBag,
  CreditCard,
  Banknote,
  ShieldCheck,
  FileText,
  CircleDollarSign,
} from 'lucide-react'

import { Container } from '../../../../../components/layout/Container'

const coverages = [
  {
    icon: ShoppingBag,
    title: 'Bolsa protegida',
  },
  {
    icon: CreditCard,
    title: 'Perda ou roubo de cartão',
  },
  {
    icon: Banknote,
    title: 'Saque sob coação',
  },
  {
    icon: ShieldCheck,
    title: 'Compra sob coação',
  },
  {
    icon: CircleDollarSign,
    title: 'Indenização conforme cobertura',
  },
  {
    icon: FileText,
    title: 'Condições em regulamento',
  },
]

export function ProtectedBagServices() {
  return (
    <section id="servicos" className="bg-slate-50 py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div>
            <span className="text-sm font-extrabold uppercase tracking-wide text-[var(--color-primary)]">
              Cobertura para imprevistos
            </span>

            <h2 className="mt-4 max-w-[520px] text-4xl font-extrabold leading-tight text-[var(--color-dark)]">
              Mais proteção em situações de roubo, perda ou coação
            </h2>

            <p className="mt-6 max-w-[520px] text-base leading-relaxed text-slate-600">
              O Bolsa Protegida Cartão Torra oferece cobertura para situações
              previstas no seguro, como perda ou roubo de cartão, compra ou
              saque sob coação, conforme os limites e condições do regulamento.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coverages.map((coverage) => {
              const Icon = coverage.icon

              return (
                <article
                  key={coverage.title}
                  className="flex min-h-[150px] flex-col items-center justify-center rounded-2xl bg-white p-6 text-center shadow-sm"
                >
                  <Icon
                    size={36}
                    className="text-[var(--color-primary)]"
                    strokeWidth={1.8}
                  />

                  <strong className="mt-5 text-sm font-extrabold text-[var(--color-dark)]">
                    {coverage.title}
                  </strong>
                </article>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}