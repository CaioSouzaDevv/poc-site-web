import { Container } from '../../../../components/layout/Container'

export function InsuranceHero() {
  return (
    <section className="bg-[var(--color-dark)] py-24 text-[var(--color-white)]">
      <Container>
        <span className="text-sm text-white/80">
          Home &gt; Seguros e Assistências
        </span>

        <h1 className="mt-8 text-6xl font-extrabold leading-tight">
          Seguros e
          <br />
          <span className="text-[var(--color-primary)]">
            Assistências
          </span>
        </h1>

        <p className="mt-6 max-w-[620px] text-xl leading-relaxed">
          Proteção e tranquilidade para você e sua família em todos os momentos.
        </p>
      </Container>
    </section>
  )
}