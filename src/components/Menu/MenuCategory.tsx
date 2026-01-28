const categoryList = ['Obiady', 'Drinki', 'Desery']

export default function MenuCategory() {
	return (
		<div className='w-full mt-2 h-48 bg-snowWhite rounded-2xl py-5'>
			<div className='flex flex-col px-5'>
				<ul className='w-full'>
					{categoryList.map((item, index) => {
						return (
							<a className='flex justify-center cursor-pointer font-montserrat text-xl w-full hover:text-accentTwo ease-in-out duration-300'>
								<li className='py-3' key={index}>
									{item}
								</li>
							</a>
						)
					})}
				</ul>
			</div>
		</div>
	)
}
