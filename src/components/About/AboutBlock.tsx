import { AboutItems } from './AboutItems'

export default function () {
	return (
		<>
			{AboutItems.map((item, index) => {
				return (
					<div className='flex flex-col items-center' key={index}>
						<h3 className='accentGradient font-fjallaone text-5xl'>{item.year}</h3>
						<p className='my-4'>{item.text}</p>
					</div>
				)
			})}
		</>
	)
}
