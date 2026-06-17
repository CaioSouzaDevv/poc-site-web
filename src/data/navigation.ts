export type MenuItem = {
  label: string
  href: string
  children?: MenuItem[]
}

export const menuItems: MenuItem[] = [
  {
    label: 'Cartão Torra',
    href: '/cartao-torra',
  },
  {
    label: 'Empréstimo Pessoal',
    href: '/emprestimo-pessoal',
  },
  {
    label: 'Seguros e Assistências',
    href: '/seguros',
    children: [
      {
        label: 'Seguro Lar',
        href: '/seguros/lar',
      },
      {
        label: 'Seguro Auto',
        href: '/seguros/auto',
      },
      {
        label: 'Seguro Saúde',
        href: '/seguros/saude',
      },
      {
        label: 'Seguro Odonto',
        href: '/seguros/odonto',
      },
      {
        label: 'Bolsa Protegida',
        href: '/seguros/bolsa-protegida',
      },
      {
        label: 'Proteção Financeira',
        href: '/seguros/protecao-financeira',
      },
    ],
  },
  {
    label: 'Benefícios',
    href: '/beneficios',
  },
  {
    label: 'Institucional',
    href: '/institucional',
  },
  {
    label: 'Ajuda',
    href: '/ajuda',
  },
]