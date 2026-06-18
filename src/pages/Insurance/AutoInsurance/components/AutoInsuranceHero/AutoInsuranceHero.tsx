import { Container } from '../../../../../components/layout/Container'
import { Button } from '../../../../../components/ui/Button'
import bgInsuranceAuto from '../../../../../assets/images/insurance/bg-insurance-auto.png'

export function AutoInsuranceHero() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--color-dark)] py-24 text-[var(--color-white)]"
      style={{
        backgroundImage: `linear-gradient(90deg, var(--color-dark) 0%, rgba(0, 15, 31, 0.92) 38%, rgba(0, 15, 31, 0.2) 70%), url(${bgInsuranceAuto})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
      }}
    >
      <Container>
        <span className="text-sm text-white/70">
          Home &gt; Seguros e Assistências &gt; Assistência Auto
        </span>

        <h1 className="mt-8 max-w-[620px] text-5xl font-extrabold leading-tight">
          Assistência Auto
          <br />
          <span className="text-[var(--color-primary)]">
            Cartão Torra
          </span>
        </h1>

        <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-white/85">
          Mais tranquilidade para você dirigir com suporte em situações
          emergenciais do dia a dia.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="tel:08000089772">
            Acionar assistência
          </Button>

          <Button href="#servicos" variant="outline-light">
            Saiba mais
          </Button>
        </div>
      </Container>
    </section>
  )
}