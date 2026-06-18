import {
  HeartPulse,
  ShieldCheck,
  Briefcase,
  Activity,
  Pill,
  FileText,
} from 'lucide-react'

import { Container } from '../../../../../components/layout/Container'

const coverages = [
  {
    icon: HeartPulse,
    title: 'Morte',
  },
  {
    icon: ShieldCheck,
    title: 'Invalidez permanente total por acidente',
  },
  {
    icon: Briefcase,
    title: 'Perda de renda por desemprego involuntário',
  },
  {
    icon: Activity,
    title: 'Incapacidade física temporária',
  },
  {
    icon: Pill,
    title: 'Desconto em farmácias',
  },
  {
    icon: FileText,
    title: 'Condições em regulamento',
  },
]

export function FinancialProtectionServices() {
  return (
    <section id="servicos" className="bg-slate-50 py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div>
            <span className="text-sm font-extrabold uppercase tracking-wide text-[var(--color-primary)]">
              Cobertura para momentos difíceis
            </span>

            <h2 className="mt-4 max-w-[520px] text-4xl font-extrabold leading-tight text-[var(--color-dark)]">
              Mais segurança para sua vida financeira
            </h2>

            <p className="mt-6 max-w-[520px] text-base leading-relaxed text-slate-600">
              A Proteção Financeira Cartão Torra oferece coberturas para
              situações previstas no seguro, ajudando a proteger sua rotina em
              momentos de imprevisto.
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