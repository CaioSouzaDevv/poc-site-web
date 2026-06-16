import { Smartphone, Receipt, CreditCard, Bell } from 'lucide-react'

import { Container } from '../../layout/Container'

import appDownload from '../../../assets/images/app-download.png'

const appBenefits = [
  'Acompanhe seus gastos em tempo real',
  'Pague sua fatura com facilidade',
  'Consulte limite e melhores datas de compra',
  'Receba ofertas exclusivas',
]

export function AppDownload() {
  return (
    <section className="py-8">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
          <div className="grid grid-cols-2 items-center gap-8 px-12 py-8">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]">
                App Cartão Torra
              </span>

              <h2 className="mt-4 text-5xl font-extrabold text-[var(--color-dark)]">
                Tudo na palma
                <br />
                da sua mão
              </h2>

              <ul className="mt-8 space-y-4">
                {appBenefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
                      ✓
                    </div>

                    <span className="text-[var(--color-text)]">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex gap-4">
                <button className="rounded-lg bg-black px-4 py-2 text-sm font-bold text-white">
                  App Store
                </button>

                <button className="rounded-lg bg-black px-4 py-2 text-sm font-bold text-white">
                  Google Play
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={appDownload}
                alt="Aplicativo Cartão Torra"
                className="max-h-[520px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}