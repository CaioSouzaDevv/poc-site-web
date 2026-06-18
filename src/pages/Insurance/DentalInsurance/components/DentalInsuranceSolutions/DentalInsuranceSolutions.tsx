import { PhoneCall, Store, FileText } from 'lucide-react'

import { Container } from '../../../../../components/layout/Container'
import { Button } from '../../../../../components/ui/Button'

const regulationUrl =
  'https://www.cartaotorra.com.br/cartao-torra/assistencia-odonto/'

export function DentalInsuranceSolutions() {
  return (
    <section className="bg-[var(--color-dark)] py-20 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="text-sm font-extrabold uppercase tracking-wide text-[var(--color-primary)]">
              Como funciona
            </span>

            <h2 className="mt-4 max-w-[620px] text-4xl font-extrabold leading-tight">
              Cuidado odontológico com acesso facilitado
            </h2>

            <p className="mt-6 max-w-[560px] text-base leading-relaxed text-white/75">
              Conte com uma rede parceira para atendimentos odontológicos,
              procedimentos e orientações conforme as condições do benefício.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="tel:40049633">
                Capitais: 4004-9633
              </Button>

              <Button
                href="https://www.lojastorra.com.br/encontre-uma-loja"
                variant="outline-light"
              >
                Encontrar loja
              </Button>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 text-[var(--color-dark)]">
            <strong className="text-2xl font-extrabold">
              O que você precisa saber
            </strong>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <PhoneCall className="mt-1 shrink-0 text-[var(--color-primary)]" />
                <div>
                  <strong className="block">Fale com o atendimento</strong>
                  <span className="text-sm text-slate-600">
                    Capitais e regiões metropolitanas: 4004-9633. Demais
                    localidades: 0800-275-9092.
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <Store className="mt-1 shrink-0 text-[var(--color-primary)]" />
                <div>
                  <strong className="block">Contrate em loja</strong>
                  <span className="text-sm text-slate-600">
                    A adesão é feita presencialmente em uma Loja Torra.
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <FileText className="mt-1 shrink-0 text-[var(--color-primary)]" />
                <div>
                  <strong className="block">Consulte as condições</strong>
                  <span className="text-sm text-slate-600">
                    Procedimentos, rede, regras e condições devem ser consultados
                    na página oficial do{' '}
                    <a
                      href={regulationUrl}
                      className="font-bold text-[var(--color-primary)] underline-offset-4 hover:underline"
                    >
                      benefício
                    </a>
                    .
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}