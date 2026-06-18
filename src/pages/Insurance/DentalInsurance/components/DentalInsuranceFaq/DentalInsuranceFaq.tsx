import { Container } from '../../../../../components/layout/Container'
import { Faq } from '../../../../../components/sections/Faq'

const faqItems = [
  {
    question: 'O que é a Assistência Odonto Cartão Torra?',
    answer:
      'É um benefício para clientes Cartão Torra que oferece acesso a atendimento odontológico em rede parceira, conforme as condições do serviço.',
  },
  {
    question: 'Como faço para contratar a Assistência Odonto?',
    answer:
      'A adesão deve ser feita presencialmente em uma Loja Torra. Procure um atendente e solicite este benefício.',
  },
  {
    question: 'Como entro em contato para atendimento?',
    answer:
      'Capitais e regiões metropolitanas: 4004-9633. Demais localidades: 0800-275-9092.',
  },
  {
    question: 'Quais procedimentos podem estar disponíveis?',
    answer:
      'O benefício pode incluir atendimentos como clínica geral, restaurações, canais, radiologia, emergência odontológica e outros procedimentos conforme as condições da rede parceira.',
  },
  {
    question: 'A contratação é feita pelo site?',
    answer:
      'Não. O site tem função informativa e orienta o cliente sobre o benefício. A adesão deve ser realizada em uma Loja Torra.',
  },
]

export function DentalInsuranceFaq() {
  return (
    <section id="duvidas" className="bg-slate-50 py-20">
      <Container>
        <div className="mx-auto max-w-[880px]">
          <Faq
            eyebrow="Dúvidas frequentes"
            title="Perguntas frequentes sobre Assistência Odonto"
            items={faqItems}
          />
        </div>
      </Container>
    </section>
  )
}