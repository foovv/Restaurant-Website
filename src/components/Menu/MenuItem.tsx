import type { MenuItem as MenuItemType } from './MenuList'

interface MenuItemProps {
	filteredMenu: MenuItemType[]
}


export default function MenuItem({filteredMenu}:MenuItemProps) {
	return (
		<div>
			{filteredMenu.map(item => (
				<div key={item.id}>
					<img className='w-48 h-48' src={item.img} alt='' />
					<div className='flex'>
						<h3 className='pr-3.5'>{item.name}</h3>
						<p>{item.cost}</p>
					</div>
				</div>
			))}
		</div>
	)
}
