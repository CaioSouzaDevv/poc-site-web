import { Container } from '../../../../components/layout/Container'
import { Button } from '../../../../components/ui/Button'

import personalLoanBg from '../../../../assets/images/emprestimo-pessoal/bg-emprestimo-pessoal.png'

export function PersonalLoanHero() {
  return (
    <section
      className="text-[var(--color-white)]"
      style={{
        backgroundImage: `url(${personalLoanBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <div className="flex min-h-[520px] items-center">
          <div className="max-w-[620px]">
            <span className="text-sm text-white/80">
              Home &gt; Empréstimo Pessoal
            </span>

            <h1 className="mt-8 text-6xl font-extrabold leading-tight">
              Empréstimo
              <br />
              <span className="text-[var(--color-primary)]">
                Pessoal Torra
              </span>
            </h1>

            <p className="mt-6 max-w-[520px] text-xl leading-relaxed">
              Crédito fácil, rápido e com as melhores condições para você
              realizar seus planos.
            </p>

            <div className="mt-8 flex gap-4">
              <Button href="/emprestimo-pessoal/simular">
                Simular agora
              </Button>

              <Button href="#como-funciona" variant="outline-light">
                Como funciona
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}