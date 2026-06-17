import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type FaqItem = {
  question: string
  answer: string
}

type FaqProps = {
  eyebrow?: string
  title: string
  items: FaqItem[]
}

export function Faq({ eyebrow = 'Dúvidas frequentes', title, items }: FaqProps) {
  const [openItem, setOpenItem] = useState<string | null>(null)

  function handleToggle(question: string) {
    setOpenItem((currentOpenItem) =>
      currentOpenItem === question ? null : question,
    )
  }

  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]">
        {eyebrow}
      </span>

      <h2 className="mt-4 text-3xl font-extrabold text-[var(--color-dark)]">
        {title}
      </h2>

      <div className="mt-8 divide-y divide-gray-100">
        {items.map((item) => {
          const isOpen = openItem === item.question

          return (
            <div key={item.question} className="py-5">
              <button
                type="button"
                onClick={() => handleToggle(item.question)}
                className="flex w-full items-center justify-between gap-6 text-left"
              >
                <span className="font-extrabold text-[var(--color-dark)]">
                  {item.question}
                </span>

                <ChevronDown
                  size={22}
                  className={`shrink-0 text-[var(--color-primary)] transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-light)]">
                  {item.answer}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}