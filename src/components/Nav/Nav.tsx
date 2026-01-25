import NavList from './NavList'
import NavMobile from './NavMobile'
import { useState } from 'react'
import logo from '../.../../../../public/etsy.png'

export default function Nav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<nav className='fixed h-16 w-screen mt-1 font-montserrat shadow-lg shadow-black-50  bg-white lg:bg-transparent lg:shadow-none'>
			<div className='flex justify-between items-center px-5 max-w-300 m-auto h-full'>
				<div className='cursor-pointer flex justify-start lg:justify-center items-center h-full  w-[25%]'>
					<img className='w-5' src={logo} alt='logo (not my logo its etsy)' />
				</div>
				<div className='flex justify-end lg:justify-center items-center h-full w-[50%] lg:shadow-lg lg:shadow-black-50  lg:bg-white '>
					<button onClick={() => setIsMenuOpen(prev => !prev)} className='flex justify-center items-center cursor-pointer w-10 h-full lg:hidden '>
						<div className='flex relative justify-center items-center -top-1 h-0.5 w-[40%] bg-black after:absolute after:bg-black after:top-1 after:w-full after:h-full'></div>
					</button>
					<div className='hidden lg:flex justify-center items-center  w-full h-full'>
						<NavList className='hidden lg:flex lg:gap-14' />
					</div>
				</div>
				<div className='hidden lg:flex lg: w-[25%] lg:justify-end'>
					<a className='cursor-pointer px-12 py-2 border-2 border-accentOne rounded-[5px] '>Zamów</a>
				</div>
			</div>

			{isMenuOpen && (
				<>
					<NavMobile />
				</>
			)}
		</nav>
	)
}
