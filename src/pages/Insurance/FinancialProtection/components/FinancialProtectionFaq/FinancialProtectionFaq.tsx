import { Container } from '../../../../../components/layout/Container'
import { Faq } from '../../../../../components/sections/Faq'

const faqItems = [
  {
    question: 'O que é a Proteção Financeira Cartão Torra?',
    answer:
      'É um seguro para clientes Cartão Torra que oferece coberturas para situações previstas no regulamento, como morte, invalidez, perda de renda e incapacidade física temporária.',
  },
  {
    question: 'Como faço para contratar a Proteção Financeira?',
    answer:
      'A adesão deve ser feita presencialmente em uma Loja Torra. Procure um atendente e solicite este benefício.',
  },
  {
    question: 'Como aciono o seguro quando precisar?',
    answer:
      'O acionamento deve ser feito pelo SAC Tokio Marine: 0800 703 9000, conforme as condições do seguro.',
  },
  {
    question: 'Quais coberturas podem estar inclusas?',
    answer:
      'O seguro pode incluir coberturas como morte, invalidez permanente total por acidente, perda de renda por desemprego involuntário, incapacidade física temporária e benefício em farmácias parceiras.',
  },
  {
    question: 'A contratação é feita pelo site?',
    answer:
      'Não. O site tem função informativa e orienta o cliente sobre o seguro. A adesão deve ser realizada em uma Loja Torra.',
  },
]

export function FinancialProtectionFaq() {
  return (
    <section id="duvidas" className="bg-slate-50 py-20">
      <Container>
        <div className="mx-auto max-w-[880px]">
          <Faq
            eyebrow="Dúvidas frequentes"
            title="Perguntas frequentes sobre Proteção Financeira"
            items={faqItems}
          />
        </div>
      </Container>
    </section>
  )
}