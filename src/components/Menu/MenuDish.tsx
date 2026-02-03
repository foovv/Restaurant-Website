import MenuItem from './MenuItem'
import type { MenuItem as MenuItemType } from './MenuList'

interface MenuDishProps {
	filteredMenu: MenuItemType[]
}

export default function MenuDish({filteredMenu}: MenuDishProps) {
	return (
		<div className='bg-snowWhite w-full h-full rounded-2xl'>
			<div>
				<MenuItem filteredMenu={filteredMenu}/>
			</div>
		</div>
	)
}
