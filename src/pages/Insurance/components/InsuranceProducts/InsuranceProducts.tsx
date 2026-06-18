import {
  House,
  Car,
  HeartPulse,
  Smile,
  Briefcase,
  ShieldCheck,
} from 'lucide-react'

import { Container } from '../../../../components/layout/Container'
import { Button } from '../../../../components/ui/Button'

const insuranceProducts = [
  {
    icon: House,
    title: 'Seguro Lar',
    description: 'Proteção para o seu lar e sua família.',
    href: '/seguros/lar',
  },
  {
    icon: Car,
    title: 'Seguro Auto',
    description: 'Mais segurança para seu veículo.',
    href: '/seguros/auto',
  },
  {
    icon: HeartPulse,
    title: 'Seguro Saúde',
    description: 'Seu bem-estar em primeiro lugar.',
    href: '/seguros/saude',
  },
  {
    icon: Smile,
    title: 'Seguro Odonto',
    description: 'Cuidado completo para seu sorriso.',
    href: '/seguros/odonto',
  },
  {
    icon: Briefcase,
    title: 'Bolsa Protegida',
    description: 'Proteção para seus pertences.',
    href: '/seguros/bolsa-protegida',
  },
  {
    icon: ShieldCheck,
    title: 'Proteção Financeira',
    description: 'Mais segurança para seu bolso.',
    href: '/seguros/protecao-financeira',
  },
]

export function InsuranceProducts() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]">
            Proteção para todos os momentos
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-[var(--color-dark)]">
            Escolha o seguro ideal para você
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-6">
          {insuranceProducts.map((product) => {
            const Icon = product.icon

            return (
              <article
                key={product.href}
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <Icon
                  size={36}
                  className="text-[var(--color-primary)]"
                />

                <h3 className="mt-6 text-2xl font-extrabold text-[var(--color-dark)]">
                  {product.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-light)]">
                  {product.description}
                </p>

                <div className="mt-8">
                  <Button href={product.href} variant="outline-primary">
                    Conhecer
                  </Button>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}