import { Container } from "../Container";


export function Header() {
    return (
        <header className="bg-[var(--color-dark)] text-[var(--color-white)]">
            <Container>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img src="/torraLogo.svg" alt="Lojas Torra" />
                        <h2>Torra <br /> Cartão</h2>
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