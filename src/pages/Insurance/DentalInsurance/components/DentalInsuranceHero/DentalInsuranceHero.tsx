import { Container } from '../../../../../components/layout/Container'
import { Button } from '../../../../../components/ui/Button'
import bgInsuranceDental from '../../../../../assets/images/insurance/bg-insurance-dental.png'

export function DentalInsuranceHero() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--color-dark)] py-24 text-[var(--color-white)]"
      style={{
        backgroundImage: `linear-gradient(90deg, var(--color-dark) 0%, rgba(0, 15, 31, 0.92) 38%, rgba(0, 15, 31, 0.2) 70%), url(${bgInsuranceDental})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
      }}
    >
      <Container>
        <span className="text-sm text-white/70">
          Home &gt; Seguros e Assistências &gt; Assistência Odonto
        </span>

        <h1 className="mt-8 max-w-[620px] text-5xl font-extrabold leading-tight">
          Assistência Odonto
          <br />
          <span className="text-[var(--color-primary)]">
            Cartão Torra
          </span>
        </h1>

        <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-white/85">
          Cuidado odontológico com mais praticidade, economia e acesso a uma
          rede de atendimento para você sorrir com tranquilidade.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="tel:40049633">
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