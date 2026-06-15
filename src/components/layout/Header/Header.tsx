import { Container } from "../Container";
import torraLogo from '../../../assets/logos/torraLogo.svg'


export function Header() {
    return (
        <header className="bg-[var(--color-dark)] text-[var(--color-white)]">
            <Container className="flex h-20 items-center">
                <div className="flex w-full items-center justify-between">
                    <div className="flex items-center">
                        <img className="w-28" src={torraLogo} alt="Cartão Torra" />

                        <p>Torra <br /> Cartão</p>
                    </div>

                    <nav className="flex items-center gap-6">
                        <a href="/cartao-torra">Cartão Torra</a>
                        <a href="/emprestimo-pessoal">Empréstimo Pessoal</a>
                        <a href="/seguros-e-assistencias">Seguros e Assistências</a>
                        <a href="/beneficios">Benefícios</a>
                        <a href="/institucional">Institucional</a>
                        <a href="/ajuda">Ajuda</a>
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