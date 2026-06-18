import { Container } from '../../../../../components/layout/Container'
import { Button } from '../../../../../components/ui/Button'
import bgFinancialProtection from '../../../../../assets/images/insurance/bg-protecao-financeira.png'

export function FinancialProtectionHero() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--color-dark)] py-24 text-[var(--color-white)]"
      style={{
        backgroundImage: `linear-gradient(90deg, var(--color-dark) 0%, rgba(0, 15, 31, 0.92) 38%, rgba(0, 15, 31, 0.2) 70%), url(${bgFinancialProtection})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
      }}
    >
      <Container>
        <span className="text-sm text-white/70">
          Home &gt; Seguros e Assistências &gt; Proteção Financeira
        </span>

        <h1 className="mt-8 max-w-[620px] text-5xl font-extrabold leading-tight">
          Proteção Financeira
          <br />
          <span className="text-[var(--color-primary)]">
            Cartão Torra
          </span>
        </h1>

        <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-white/85">
          Mais segurança para imprevistos financeiros, com coberturas previstas
          no seguro e apoio para proteger sua rotina.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="tel:08007039000">
            Acionar seguro
          </Button>

          <Button href="#servicos" variant="outline-light">
            Saiba mais
          </Button>
        </div>
      </Container>
    </section>
  )
}