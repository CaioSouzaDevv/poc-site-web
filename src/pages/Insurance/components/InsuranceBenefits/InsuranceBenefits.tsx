import { ShieldCheck, Handshake, WalletCards } from 'lucide-react'

import { Container } from '../../../../components/layout/Container'

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Proteção para diferentes momentos',
    description:
      'Opções de seguros e assistências para ajudar você em situações do dia a dia.',
  },
  {
    icon: WalletCards,
    title: 'Planos acessíveis',
    description:
      'Produtos pensados para clientes Cartão Torra, com contratação simples.',
  },
  {
    icon: Handshake,
    title: 'Atendimento com parceiros especializados',
    description:
      'Os seguros são oferecidos com apoio de parceiros responsáveis pela cobertura e assistência.',
  },
]

export function InsuranceBenefits() {
  return (
    <section className="py-8">
      <Container>
        <div className="grid grid-cols-[0.8fr_1.2fr] gap-12 rounded-3xl bg-[var(--color-dark)] p-12 text-[var(--color-white)]">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]">
              Mais tranquilidade
            </span>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight">
              Seguros e assistências para proteger o que importa
            </h2>
          </div>

          <div className="grid gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon

              return (
                <article
                  key={benefit.title}
                  className="flex gap-5 rounded-2xl bg-white/5 p-6"
                >
                  <Icon
                    size={32}
                    className="shrink-0 text-[var(--color-primary)]"
                  />

                  <div>
                    <h3 className="font-extrabold">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-white/75">
                      {benefit.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}