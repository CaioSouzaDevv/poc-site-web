import {
  Smile,
  ClipboardCheck,
  ShieldCheck,
  ScanLine,
  HeartPulse,
  CircleDollarSign,
} from 'lucide-react'

import { Container } from '../../../../../components/layout/Container'

const services = [
  {
    icon: Smile,
    title: 'Clínica geral',
  },
  {
    icon: ClipboardCheck,
    title: 'Restaurações e canais',
  },
  {
    icon: ShieldCheck,
    title: 'Periodontia',
  },
  {
    icon: ScanLine,
    title: 'Radiologia',
  },
  {
    icon: HeartPulse,
    title: 'Emergência odontológica',
  },
  {
    icon: CircleDollarSign,
    title: 'Economia em procedimentos',
  },
]

export function DentalInsuranceServices() {
  return (
    <section id="servicos" className="bg-slate-50 py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div>
            <span className="text-sm font-extrabold uppercase tracking-wide text-[var(--color-primary)]">
              Cuidado para o seu sorriso
            </span>

            <h2 className="mt-4 max-w-[520px] text-4xl font-extrabold leading-tight text-[var(--color-dark)]">
              Atendimento odontológico com mais praticidade
            </h2>

            <p className="mt-6 max-w-[520px] text-base leading-relaxed text-slate-600">
              Com a Assistência Odonto Cartão Torra, você conta com acesso a
              uma rede parceira para cuidar da saúde bucal com mais economia,
              orientação e tranquilidade.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon

              return (
                <article
                  key={service.title}
                  className="flex min-h-[150px] flex-col items-center justify-center rounded-2xl bg-white p-6 text-center shadow-sm"
                >
                  <Icon
                    size={36}
                    className="text-[var(--color-primary)]"
                    strokeWidth={1.8}
                  />

                  <strong className="mt-5 text-sm font-extrabold text-[var(--color-dark)]">
                    {service.title}
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