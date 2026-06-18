import { Container } from '../../../../../components/layout/Container'
import { Faq } from '../../../../../components/sections/Faq'

const faqItems = [
  {
    question: 'O que é a Assistência Auto Cartão Torra?',
    answer:
      'É um benefício para clientes Cartão Torra que oferece suporte em situações emergenciais envolvendo o veículo, conforme as condições previstas no regulamento.',
  },
  {
    question: 'Como faço para contratar a Assistência Auto?',
    answer:
      'A adesão deve ser feita presencialmente em uma Loja Torra. Procure um atendente e solicite este benefício.',
  },
  {
    question: 'Como aciono a assistência quando precisar?',
    answer:
      'O acionamento pode ser feito pelo telefone 0800 008 9772, disponível para atendimento conforme as condições do serviço.',
  },
  {
    question: 'Quais serviços podem estar inclusos?',
    answer:
      'A assistência pode incluir serviços como guincho, socorro mecânico, troca de pneu, chaveiro, táxi e outros atendimentos previstos no regulamento.',
  },
  {
    question: 'A contratação é feita pelo site?',
    answer:
      'Não. O site tem função informativa e orienta o cliente sobre o benefício. A adesão deve ser realizada em uma Loja Torra.',
  },
]

export function AutoInsuranceFaq() {
  return (
    <section id="duvidas" className="bg-slate-50 py-20">
      <Container>
        <div className="mx-auto max-w-[880px]">
          <Faq
            eyebrow="Dúvidas frequentes"
            title="Perguntas frequentes sobre Assistência Auto"
            items={faqItems}
          />
        </div>
      </Container>
    </section>
  )
}