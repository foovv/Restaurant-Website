import { navItem } from './NavItems'

export default function NavList({ ...props }) {
	return (
		<ul {...props}>
			{navItem.map(item => {
				return (
					<li className='hover:text-accentTwo ease-in-out duration-200' key={item.href}>
						<a href={item.href}>{item.text}</a>
					</li>
				)
			})}
		</ul>
	)
}
