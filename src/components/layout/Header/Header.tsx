import { Container } from "../Container";
import torraLogo from '../../../assets/logos/torraLogo.svg'


const menuItems = [
    {
        label: 'Cartão Torra',
        href: '/cartao-torra',
    },
    {
        label: 'Empréstimo Pessoal',
        href: '/emprestimo-pessoal',
    },
    {
        label: 'Seguros e Assistências',
        href: '/seguros-e-assistencias',
    },
    {
        label: 'Benefícios',
        href: '/beneficios',
    },
    {
        label: 'Institucional',
        href: '/institucional',
    },
    {
        label: 'Ajuda',
        href: '/ajuda',
    },
]

export function Header() {
    return (
        <header className="bg-[var(--color-dark)] text-[var(--color-white)]">
            <Container className="flex h-20 items-center">
                <div className="flex w-full items-center justify-between">
                    <div className="flex items-center">
                        <img className="w-28" src={torraLogo} alt="Cartão Torra" />

                        <p>Torra <br /> Cartão</p>
                    </div>

                    <nav>
                        <ul className="flex items-center gap-6">{menuItems.map((menu) => (
                            <li key={menu.href}>
                                <a href={menu.href}>{menu.label}</a>
                            </li>
                        ))}</ul>
                    </nav>

                    <div>
                        Busca
                        CTA
                    </div>
                </div>
            </Container>
        </header>
    );
}