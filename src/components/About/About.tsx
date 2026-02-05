import AboutBlock from './AboutBlock'

export default function () {
	return (
		<section className='min-h-screen w-full bg-whiteTwo' id='Onas'>
			<div className='flex justify-center items-center flex-col pt-20 '>
				<div className='flex flex-col items-center pb-8 uppercase font-fjallaone '>
					<h1 className='text-6xl  lg:text-8xl z-10'>O nas</h1>
					<p className='relative -top-4 text-snowWhite text-3xl lg:text-4xl'>Nasza historia</p>
				</div>
				<div className='h-full mx-4'>
					<div className='w-full bg-snowWhite rounded-2xl p-6'>
						<AboutBlock />
					</div>
				</div>
			</div>
		</section>
	)
}
