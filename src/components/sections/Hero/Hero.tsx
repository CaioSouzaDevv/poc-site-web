import { Container } from '../../layout/Container'
import { Button } from '../../ui/Button'
import cardTorra from '../../../assets/images/torra-visa.png'

export function Hero() {
  return (
    <section className="bg-[var(--color-dark)] text-[var(--color-white)]">
      <Container>
        <div className="flex min-h-[520px] items-center justify-between gap-12">
          <div className="max-w-[520px]">
            <h1 className="text-6xl font-extrabold leading-tight">
              O Cartão que combina com o{' '}
              <span className="text-[var(--color-primary)]">
                seu estilo
              </span>
            </h1>

            <p className="mt-6 max-w-[420px] text-lg leading-relaxed">
              Mais vantagens, mais facilidades e benefícios exclusivos para você.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Button href="/faca-seu-cartao">
                Faça seu cartão
              </Button>

              <Button
                href="#beneficios"
                className="border border-[var(--color-white)] bg-transparent hover:bg-[var(--color-white)] hover:text-[var(--color-dark)]"
              >
                Ver benefícios
              </Button>
            </div>
          </div>

          <div className="flex flex-1 justify-center">
            <img
              src={cardTorra}
              alt="Cartão Torra Visa"
              className="w-full max-w-[520px]"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}