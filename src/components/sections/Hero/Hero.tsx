import { Container } from '../../layout/Container'
import { Button } from '../../ui/Button'

import heroBackground from '../../../assets/images/bg-blue-orange.png'
import cardTorra from '../../../assets/images/torra-visa.png'

export function Hero() {
  return (
    <section
      className="text-[var(--color-white)]"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <div className="flex min-h-[620px] items-center justify-between">
          <div className="max-w-[520px]">
            <h1 className="text-6xl font-extrabold leading-tight">
              O Cartão que
              <br />
              combina com
              <br />
              o{' '}
              <span className="text-[var(--color-primary)]">
                seu estilo
              </span>
            </h1>

            <p className="mt-6 max-w-[380px] text-lg leading-relaxed">
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

          <div className="flex justify-end">
            <img
              src={cardTorra}
              alt="Cartão Torra Visa"
              className="max-w-[560px]"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}