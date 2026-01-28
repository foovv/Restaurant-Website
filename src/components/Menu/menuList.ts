interface MenuItem {
	id: number
	category: string
	name: string
	cost: number
}

export const categoryList: MenuItem[] = [
	{
		id: 1,
		category: 'dinner',
		name: 'Kotlet',
		cost: 24,
	},
	{
		id: 2,
		category: 'dinner',
		name: 'Gołabki',
		cost: 55,
	},
	{
		id: 3,
		category: 'drinks',
		name: 'Wódka z cola',
		cost: 27,
	},
	{
		id: 4,
		category: 'drinks',
		name: 'Whiskey z cola',
		cost: 22,
	},
	{
		id: 5,
		category: 'dessert',
		name: 'Sernik',
		cost: 34,
	},
	{
		id: 6,
		category: 'dessert',
		name: 'Kotlet',
		cost: 24,
	},
]
