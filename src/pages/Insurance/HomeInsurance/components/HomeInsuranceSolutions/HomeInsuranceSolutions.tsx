import { PhoneCall, Store, FileText } from 'lucide-react'

import { Container } from '../../../../../components/layout/Container'
import { Button } from '../../../../../components/ui/Button'

export function HomeInsuranceSolutions() {
  return (
    <section className="bg-[var(--color-dark)] py-20 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="text-sm font-extrabold uppercase tracking-wide text-[var(--color-primary)]">
              Assistência quando precisar
            </span>

            <h2 className="mt-4 max-w-[620px] text-4xl font-extrabold leading-tight">
              Soluções para diversas situações do dia a dia
            </h2>

            <p className="mt-6 max-w-[560px] text-base leading-relaxed text-white/75">
              Conte com suporte para imprevistos residenciais, como problemas
              hidráulicos, elétricos, chaveiro, vidraceiro e outros serviços
              previstos no regulamento.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="tel:08000089772">
                Acionar assistência
              </Button>

              <Button href="#regulamento" variant="outline-light">
                Ver regulamento
              </Button>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 text-[var(--color-dark)]">
            <strong className="text-2xl font-extrabold">
              Como funciona?
            </strong>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <PhoneCall className="mt-1 text-[var(--color-primary)]" />
                <div>
                  <strong className="block">Acione pelo telefone</strong>
                  <span className="text-sm text-slate-600">
                    Ligue para 0800 008 9772 quando precisar de atendimento.
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <Store className="mt-1 text-[var(--color-primary)]" />
                <div>
                  <strong className="block">Contrate em loja</strong>
                  <span className="text-sm text-slate-600">
                    A adesão é feita presencialmente em uma Loja Torra.
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <FileText className="mt-1 text-[var(--color-primary)]" />
                <div>
                  <strong className="block">Consulte as condições</strong>
                  <span className="text-sm text-slate-600">
                    Serviços sujeitos às regras, limites e vigência do regulamento.
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