import { Container } from "../Container";
import torraLogo from '../../../assets/logos/torraLogo.svg'
import { Button } from '../../ui/Button'
import { menuItems } from '../../../data/navigation'
import { HeaderMenuItem } from './HeaderMenuItem'

export function Header() {
    return (
        <header className="bg-[var(--color-dark)] text-[var(--color-white)]">
            <Container className="flex h-20 items-center">
                <div className="flex w-full items-center justify-between">
                    <div className="flex items-center">
                        <img className="w-28" src={torraLogo} alt="Cartão Torra" />

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

                    <div>
                        {/* Busca */}
                        <Button>
                            Faça seu Cartão
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
}