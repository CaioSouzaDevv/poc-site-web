import { Store, MapPin } from 'lucide-react'

import { Button } from '../../../../components/ui/Button'

export function LoanCta() {
  return (
    <div className="flex h-full flex-col justify-between rounded-3xl bg-[var(--color-dark)] p-8 text-[var(--color-white)] shadow-sm">
      <div>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-primary)]">
          <Store size={30} />
        </div>

        <h2 className="mt-8 text-4xl font-extrabold leading-tight">
          Consulte seu
          <br />
          empréstimo
          <br />
          na loja
        </h2>

        <p className="mt-6 max-w-[420px] text-sm leading-relaxed text-white/80">
          Vá até uma Loja Torra, fale com um atendente e consulte as condições
          disponíveis para o seu perfil. A contratação é presencial e sujeita à
          análise.
        </p>
      </div>

      <div className="mt-10">
        <Button href="https://www.lojastorra.com.br/lojas">
          <MapPin size={18} />
          Encontrar loja
        </Button>
      </div>
    </div>
  )
}