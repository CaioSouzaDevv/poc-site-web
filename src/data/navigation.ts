export type MenuItem = {
	label: string;
	href: string;
	children?: MenuItem[];
	external?: boolean;
};

export const menuItems: MenuItem[] = [
	{
		label: "Cartão Torra",
		href: "/cartao-torra",
	},
	{
		label: "Empréstimo Pessoal",
		href: "/emprestimo-pessoal",
	},
	{
		label: "Seguros e Assistências",
		href: "/seguros",
		children: [
			{
				label: "Assistência Lar",
				href: "/seguros/lar",
			},
			{
				label: "Assistência Auto",
				href: "/seguros/auto",
			},
			{
				label: "Assistência Odonto",
				href: "/seguros/odonto",
			},
			{
				label: "Bolsa Protegida",
				href: "/seguros/bolsa-protegida",
			},
			{
				label: "Proteção Financeira",
				href: "/seguros/protecao-financeira",
			},
		],
	},
	{
		label: "Negociação de Dívidas",
		href: "https://negocie.cartaotorra.com.br/",
		external: true,
	},
];
