import { navItem } from './NavItems'



export default function NavList({ ...props }) {
	return (
		<ul {...props}>
			{navItem.map(item => {
				return (
					<li key={item.href}>
						<a href={item.href}>{item.text}</a>
					</li>
				)
			})}
		</ul>
	)
}
