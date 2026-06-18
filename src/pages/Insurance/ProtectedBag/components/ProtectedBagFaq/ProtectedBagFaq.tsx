import { Container } from '../../../../../components/layout/Container'
import { Faq } from '../../../../../components/sections/Faq'

const faqItems = [
  {
    question: 'O que é o Bolsa Protegida Cartão Torra?',
    answer:
      'É um seguro para clientes Cartão Torra que oferece proteção em situações previstas no regulamento, como perda ou roubo de cartão, compra ou saque sob coação.',
  },
  {
    question: 'Como faço para contratar o Bolsa Protegida?',
    answer:
      'A adesão deve ser feita presencialmente em uma Loja Torra. Procure um atendente e solicite este benefício.',
  },
  {
    question: 'Como aciono o seguro quando precisar?',
    answer:
      'O acionamento deve ser feito pelo SAC Tokio Marine: 0800 703 9000, conforme as condições do seguro.',
  },
  {
    question: 'Quais situações podem ter cobertura?',
    answer:
      'O seguro pode oferecer cobertura para situações como compra sob coação, saque sob coação, perda ou roubo de cartão, respeitando limites e regras do regulamento.',
  },
  {
    question: 'A contratação é feita pelo site?',
    answer:
      'Não. O site tem função informativa e orienta o cliente sobre o seguro. A adesão deve ser realizada em uma Loja Torra.',
  },
]

export function ProtectedBagFaq() {
  return (
    <section id="duvidas" className="bg-slate-50 py-20">
      <Container>
        <div className="mx-auto max-w-[880px]">
          <Faq
            eyebrow="Dúvidas frequentes"
            title="Perguntas frequentes sobre Bolsa Protegida"
            items={faqItems}
          />
        </div>
      </Container>
    </section>
  )
}