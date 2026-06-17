import { FileText, BadgeCheck, Home, WalletCards } from 'lucide-react'

import { Container } from '../../../../components/layout/Container'

const documents = [
  {
    icon: BadgeCheck,
    title: 'Documento com foto',
    description: 'RG ou CNH dentro da validade.',
  },
  {
    icon: FileText,
    title: 'CPF',
    description: 'Documento necessário para consulta e análise.',
  },
  {
    icon: Home,
    title: 'Comprovante de residência',
    description: 'Leve um comprovante atualizado.',
  },
  {
    icon: WalletCards,
    title: 'Cartão Torra',
    description: 'O empréstimo é consultado para clientes elegíveis.',
  },
]

export function LoanDocuments() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-3xl bg-white p-10 shadow-sm">
          <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]">
            Antes de ir à loja
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-[var(--color-dark)]">
            O que levar para consultar
          </h2>

          <p className="mt-4 max-w-[720px] text-[var(--color-text-light)]">
            A contratação do Empréstimo Pessoal Torra é feita presencialmente em loja,
            com análise de crédito e apresentação das condições antes da contratação.
          </p>

          <div className="mt-10 grid grid-cols-4 gap-6">
            {documents.map((document) => {
              const Icon = document.icon

              return (
                <article
                  key={document.title}
                  className="rounded-2xl border border-gray-100 p-6"
                >
                  <Icon
                    size={32}
                    className="text-[var(--color-primary)]"
                  />

                  <h3 className="mt-5 font-extrabold text-[var(--color-dark)]">
                    {document.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-light)]">
                    {document.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}