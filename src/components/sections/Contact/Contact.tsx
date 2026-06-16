import { MessageCircle, Phone, ReceiptText, Headphones } from 'lucide-react'

import { Container } from '../../layout/Container'

const contactChannels = [
    {
        icon: MessageCircle,
        title: 'WhatsApp',
        description: '(11) 4002-8922',
    },
    {
        icon: Phone,
        title: 'Capitais e regiões',
        description: '4002-8922',
    },
    {
        icon: ReceiptText,
        title: 'Demais localidades',
        description: '0800 770 3333',
    },
    {
        icon: Headphones,
        title: 'Chat Online',
        description: 'No site',
    },
]

export function Contact() {
    return (
        <section className="py-8">
            <Container>
                <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr_1fr] items-center rounded-3xl border border-gray-100 bg-white px-10 py-8 shadow-sm">
                    <div>
                        <h2 className="text-2xl font-extrabold text-[var(--color-dark)]">
                            Precisa de ajuda?
                            <br />
                            Estamos aqui para você.
                        </h2>

                        <p className="mt-2 max-w-[360px] text-sm text-[var(--color-text-light)]">
                            Nosso time está pronto para te atender pelos canais que preferir.
                        </p>
                    </div>

                    {contactChannels.map((channel) => {
                        const Icon = channel.icon

                        return (
                            <div
                                key={channel.title}
                                className="flex items-center gap-4 border-l border-gray-200 px-6"
                            >
                                <Icon
                                    size={32}
                                    className="text-[var(--color-primary)]"
                                />

                                <div>
                                    <h3 className="text-sm font-extrabold text-[var(--color-dark)]">
                                        {channel.title}
                                    </h3>

                                    <p className="mt-1 text-sm text-[var(--color-text-light)]">
                                        {channel.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}