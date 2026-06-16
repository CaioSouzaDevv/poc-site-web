import { Container } from '../../layout/Container'
import { Button } from '../../ui/Button'

type ProductVariant = 'dark' | 'primary' | 'light'

type Product = {
    title: string
    description: string
    benefits: string[]
    cta: string
    href: string
    variant: ProductVariant
}

const products: Product[] = [
    {
        title: 'Cartão Torra',
        description: 'Facilidade e vantagens para suas compras do dia a dia.',
        benefits: [
            'Até 10x sem juros na Torra',
            'Até 40 dias para pagar',
            'Descontos exclusivos',
            'Programa de benefícios',
        ],
        cta: 'Quero o meu',
        href: '/cartao-torra',
        variant: 'dark',
    },
    {
        title: 'Empréstimo Pessoal',
        description: 'Crédito rápido, fácil e com as melhores condições.',
        benefits: [
            'Dinheiro na conta',
            'Até 24 meses para pagar',
            'Taxas competitivas',
            'Simulação sem compromisso',
        ],
        cta: 'Simular agora',
        href: '/emprestimo-pessoal',
        variant: 'primary',
    },
    {
        title: 'Seguros e Assistências',
        description: 'Mais tranquilidade para você e sua família.',
        benefits: [
            'Proteção para diversos momentos',
            'Assistências completas',
            'Planos acessíveis',
            'Contratação simples',
        ],
        cta: 'Conhecer',
        href: '/seguros',
        variant: 'light',
    },
]

function getProductCardClasses(variant: ProductVariant) {
    const base = 'rounded-3xl p-8 shadow-lg min-h-[360px]'

    if (variant === 'dark') {
        return `${base} bg-[var(--color-dark)] text-[var(--color-white)]`
    }

    if (variant === 'primary') {
        return `${base} bg-[var(--color-primary)] text-[var(--color-white)]`
    }

    return `${base} bg-[var(--color-white)] text-[var(--color-dark)]`
}

function getProductButtonClasses(variant: ProductVariant) {
    if (variant === 'light') {
        return 'border border-[var(--color-primary)] bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-white)]'
    }

    return 'border border-[var(--color-white)] bg-transparent text-[var(--color-white)] hover:bg-[var(--color-white)] hover:text-[var(--color-dark)]'
}

export function Products() {
    return (
        <section className="py-8">
            <Container>
                <div className="text-center">
                    <span className="text-sm font-extrabold uppercase tracking-widest text-[var(--color-primary)]">
                        Soluções para você
                    </span>

                    <h2 className="mt-4 text-4xl font-extrabold text-[var(--color-dark)]">
                        Muito mais que um cartão
                    </h2>
                </div>

                <div className="mt-14 grid grid-cols-3 gap-8">
                    {products.map((product) => (
                        <article
                            key={product.title}
                            className={getProductCardClasses(product.variant)}
                        >
                            <h3 className="text-2xl font-extrabold uppercase">
                                {product.title}
                            </h3>

                            <p className="mt-4 max-w-[320px] text-base leading-relaxed">
                                {product.description}
                            </p>

                            <ul className="mt-6 space-y-3">
                                {product.benefits.map((benefit) => (
                                    <li key={benefit} className="text-sm">
                                        {benefit}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8">
                                <Button
                                    href={product.href}
                                    variant={product.variant === 'light' ? 'outline-primary' : 'outline-light'}
                                >
                                    {product.cta}
                                </Button>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    )
}