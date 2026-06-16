
import torraLogo from '../../../assets/logos/torraLogo.svg'

const footerColumns = [
    {
        title: 'Cartão Torra',
        links: [
            'Faça seu cartão',
            'Benefícios',
            'Bônus Torra',
            'Multi Bônus',
            'Pague sua fatura',
        ],
    },
    {
        title: 'Empréstimo Pessoal',
        links: [
            'Simule agora',
            'Políticas',
            'Educação Financeira',
            'Outras informações',
        ],
    },
    {
        title: 'Seguros e Assistências',
        links: [
            'Seguro Lar',
            'Seguro Auto',
            'Seguro Saúde',
            'Seguro Odonto',
            'Bolsa Protegida',
            'Proteção Financeira',
        ],
    },
    {
        title: 'Institucional',
        links: [
            'Fale Conosco',
            'Política de Privacidade',
            'Termos de Uso',
            'Política de Segurança',
            'Taxas e Tarifas',
        ],
    },
]

export function Footer() {
    return (
        <footer className="bg-[var(--color-dark)] text-[var(--color-white)]">
            <div className="mx-auto w-full max-w-[1280px] px-6 py-16">
                <div className="grid grid-cols-[280px_1fr_1fr_1fr_1fr] gap-10">
                    <div>
                        <img
                            src={torraLogo}
                            alt="Cartão Torra"
                            className="w-32"
                        />


                    </div>

                    {footerColumns.map((column) => (
                        <div key={column.title}>
                            <h3 className="mb-4 font-bold uppercase">
                                {column.title}
                            </h3>

                            <ul className="space-y-2">
                                {column.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-sm text-gray-300 hover:text-white"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 border-t border-white/10 pt-6 text-sm text-gray-400">
                    <div className="flex items-center justify-between">
                        <p>
                            Cartão Torra é um produto financeiro emitido pelo
                            Banco Daycoval S.A.
                        </p>

                        <p>
                            © 2026 Cartão Torra. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}