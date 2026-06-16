import { Container } from '../../layout/Container'
import { Button } from '../../ui/Button'

import heroBackground from '../../../assets/images/bg-blue-orange.png'
import cardTorra from '../../../assets/images/torra-visa.png'
import { CalendarDays, CreditCard, BadgePercent, MapPin } from 'lucide-react'

const heroBenefits = [
  {
    icon: CalendarDays,
    title: 'Até 40 dias',
    description: 'para pagar',
  },
  {
    icon: CreditCard,
    title: 'Parcele em até',
    description: '10x sem juros',
  },
  {
    icon: BadgePercent,
    title: 'Descontos',
    description: 'exclusivos',
  },
  {
    icon: MapPin,
    title: 'Aceito em todo',
    description: 'o Brasil',
  },
]

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
          <div className="max-w-[700px]">
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

            <div className="mt-10 flex gap-8">
              {heroBenefits.map((benefit) => {
                const Icon = benefit.icon

                return (
                  <div
                    key={benefit.title}
                    className="flex items-start gap-3"
                  >
                    <Icon
                      size={24}
                      className="text-[var(--color-primary)]"
                    />

                    <div>
                      <p className="font-semibold">
                        {benefit.title}
                      </p>

                      <p className="text-sm text-gray-300">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                )
              })}
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