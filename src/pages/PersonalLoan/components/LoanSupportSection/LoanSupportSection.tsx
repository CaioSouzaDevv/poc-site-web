import { Container } from '../../../../components/layout/Container'
import { Faq } from '../../../../components/sections/Faq'

import { LoanCta } from './LoanCta'

const loanFaqItems = [
    {
        question: 'O empréstimo é contratado pelo site?',
        answer:
            'Não. A contratação do Empréstimo Pessoal Torra é feita presencialmente em uma Loja Torra, com apoio de um atendente.',
    },
    {
        question: 'Quem pode contratar?',
        answer:
            'O empréstimo está disponível para clientes elegíveis, sujeito à análise de crédito e aprovação.',
    },
    {
        question: 'Qual o valor máximo?',
        answer:
            'O valor pode chegar a até R$ 3.000,00, conforme análise e condições disponíveis para o perfil do cliente.',
    },
    {
        question: 'Como recebo o dinheiro?',
        answer:
            'Após aprovação, o valor é transferido via Pix para a conta informada.',
    },
]

export function LoanSupportSection() {
    return (
        <section className="py-20">
            <Container>
                <div className="grid grid-cols-2 gap-8">
                    <Faq
                        title="Sobre o Empréstimo Pessoal"
                        items={loanFaqItems}
                    />

                    <LoanCta />
                </div>
            </Container>
        </section>
    )
}