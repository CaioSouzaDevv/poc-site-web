import { Container } from '../../layout/Container'
import { Button } from '../../ui/Button'


import bonusTorra from '../../../assets/images/bonus-torra.png'

export function BonusBanner() {
    return (
        <section className="py-8">
            <Container>
                <div
                    className="overflow-hidden rounded-3xl"
                    style={{
                        backgroundImage: `url(${bonusTorra})`,
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className="flex min-h-[420px] items-center">
                        <div className="max-w-[420px] p-12 text-[var(--color-white)]">
                            <span className="text-sm font-bold uppercase tracking-widest">
                                Benefícios exclusivos
                            </span>

                            <h2 className="mt-4 text-5xl font-extrabold leading-tight">
                                Bônus Torra
                                <br />
                                e Multi Bônus
                            </h2>

                            <p className="mt-6 text-lg leading-relaxed">
                                Acumule pontos em suas compras e troque por descontos,
                                produtos e experiências incríveis.
                            </p>

                            <div className="mt-8">
                                <Button variant="outline-light">
                                    Saiba mais
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}