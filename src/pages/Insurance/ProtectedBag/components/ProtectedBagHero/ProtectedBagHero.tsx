import { Container } from '../../../../../components/layout/Container'
import { Button } from '../../../../../components/ui/Button'
import bgProtectedBag from '../../../../../assets/images/insurance/bg-bolsa-protegida.png'

export function ProtectedBagHero() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--color-dark)] py-24 text-[var(--color-white)]"
      style={{
        backgroundImage: `linear-gradient(90deg, var(--color-dark) 0%, rgba(0, 15, 31, 0.92) 38%, rgba(0, 15, 31, 0.2) 70%), url(${bgProtectedBag})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
      }}
    >
      <Container>
        <span className="text-sm text-white/70">
          Home &gt; Seguros e Assistências &gt; Bolsa Protegida
        </span>

        <h1 className="mt-8 max-w-[620px] text-5xl font-extrabold leading-tight">
          Bolsa Protegida
          <br />
          <span className="text-[var(--color-primary)]">
            Cartão Torra
          </span>
        </h1>

        <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-white/85">
          Mais proteção para situações de roubo, perda de cartão, compra ou
          saque sob coação, conforme as condições do seguro.
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