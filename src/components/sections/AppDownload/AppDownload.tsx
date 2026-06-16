import { Smartphone, Receipt, CreditCard, Bell } from 'lucide-react'

import { Container } from '../../layout/Container'

import appDownload from '../../../assets/images/app-download.png'
import appleButton from '../../../assets/images/botao_apple_pt.png'
import androidButton from '../../../assets/images/botao_android_pt.png'
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



                            <div className="mt-8 flex items-center gap-4">
                                <a href="#" aria-label="Baixar na App Store">
                                    <img
                                        src={appleButton}
                                        alt="Baixar na App Store"
                                        className="h-12" />
                                </a>

                                <a href="#" aria-label="Baixar no Google Play">
                                    <img
                                        src={androidButton}
                                        alt="Baixar no Google Play"
                                        className="h-12" />
                                </a>
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