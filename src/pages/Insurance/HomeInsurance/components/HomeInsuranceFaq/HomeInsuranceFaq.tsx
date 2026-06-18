import { Container } from '../../../../../components/layout/Container'
import { Faq } from '../../../../../components/sections/Faq'

const faqItems = [
  {
    question: 'O que é a Assistência Lar Cartão Torra?',
    answer:
      'É um benefício para clientes Cartão Torra que oferece suporte em serviços emergenciais para o lar, conforme as condições previstas no regulamento.',
  },
  {
    question: 'Como faço para contratar a Assistência Lar?',
    answer:
      'A adesão deve ser feita presencialmente em uma Loja Torra. Procure um atendente e solicite este benefício.',
  },
  {
    question: 'Como aciono a assistência quando precisar?',
    answer:
      'O acionamento pode ser feito pelo telefone 0800 008 9772, disponível para atendimento conforme as condições do serviço.',
  },
  {
    question: 'A contratação é feita pelo site?',
    answer:
      'Não. O site tem função informativa e orienta o cliente sobre o benefício. A adesão deve ser realizada em uma Loja Torra.',
  },
  {
    question: 'Existem regras de utilização?',
    answer:
      'Sim. Os serviços possuem regras, limites de utilização, vigência e condições específicas descritas no regulamento da Assistência Lar.',
  },
]

export function HomeInsuranceFaq() {
  return (
    <section id="duvidas" className="bg-slate-50 py-20">
      <Container>
        <div className="mx-auto max-w-[880px]">
          <Faq
            eyebrow="Dúvidas frequentes"
            title="Perguntas frequentes sobre Assistência Lar"
            items={faqItems}
          />
        </div>
      </Container>
    </section>
  )
}