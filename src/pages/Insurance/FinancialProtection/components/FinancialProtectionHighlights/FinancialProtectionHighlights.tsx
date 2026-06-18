import { Briefcase, HeartPulse, ShieldCheck, BadgeCheck, Pill } from 'lucide-react'
import { Container } from '../../../../../components/layout/Container'

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Proteção para',
    description: 'imprevistos financeiros',
  },
  {
    icon: HeartPulse,
    title: 'Cobertura por',
    description: 'morte ou invalidez',
  },
  {
    icon: Briefcase,
    title: 'Apoio em caso',
    description: 'de perda de renda',
  },
  {
    icon: Pill,
    title: 'Benefício em',
    description: 'farmácias parceiras',
  },
  {
    icon: BadgeCheck,
    title: 'Exclusivo para',
    description: 'clientes Cartão Torra',
  },
]

export function FinancialProtectionHighlights() {
  return (
    <section className="relative z-10 -mt-12">
      <Container>
        <div className="grid grid-cols-1 rounded-2xl bg-white shadow-xl md:grid-cols-5">
          {highlights.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="flex items-center gap-4 border-b border-slate-200 px-6 py-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--color-primary)] text-[var(--color-primary)]">
                  <Icon size={24} />
                </div>

                <div>
                  <strong className="block text-sm font-extrabold text-[var(--color-dark)]">
                    {item.title}
                  </strong>
                  <span className="text-sm text-slate-600">
                    {item.description}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}