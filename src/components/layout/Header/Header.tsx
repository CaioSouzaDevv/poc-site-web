import { Container } from '../Container'
import torraLogo from '../../../assets/logos/torraLogo.svg'
import { Button } from '../../ui/Button'
import { menuItems } from '../../../data/navigation'
import { HeaderMenuItem } from './HeaderMenuItem'

export function Header() {
  return (
    <header className="relative z-[1000] bg-[var(--color-dark)] text-[var(--color-white)]">
      <Container className="flex h-20 items-center">
        <div className="flex w-full items-center justify-between gap-8">
          <div className="flex items-center">
            <a href="/cartao-torra" aria-label="Ir para a página inicial do Cartão Torra">
              <img className="w-28" src={torraLogo} alt="Cartão Torra" />
            </a>
          </div>

          <nav>
            <ul className="flex items-center gap-6">
              {menuItems.map((menuItem) => (
                <HeaderMenuItem
                  key={menuItem.href}
                  menuItem={menuItem}
                />
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://fideliza.cartaotorra.com.br/"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white hover:text-[var(--color-dark)]"
            >
              Minha Conta
            </a>

            <Button href="https://fideliza.cartaotorra.com.br/bill-menu">
              Pagar minha fatura
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}