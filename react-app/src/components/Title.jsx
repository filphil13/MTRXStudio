
function Title() {
	return (
		<section id='home' className='flex w-full pt-0 flex-col bg-transparent items-center md:flex-col'>
			
			<div className='flex items-center min-h-[50vh] justify-center text-center md:w-full'>
				<h1 className=" text-6xl pb-28 font-extrabold font-kode text-gray-900 dark:text-white  md:text-5xl lg:text-6xl">
					<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
						MTRX
					</span>
					{' '}Studio
				</h1>
			</div>

			<div className='flex flex-col min-h-[50vh] items-center justify-center text-center md:w-full'>
				<p className="text-md text-center font-kode font-normal text-gray-500 lg:text-lg dark:text-gray-400">
					We design high-converting websites for growing businesses that want more leads, trust, and sales.
				</p>

				<div className="mt-8 flex justify-center gap-4">
					<a href="#contact" className="px-6 py-3 rounded-lg font-semibold text-white bg-emerald-500 hover:bg-emerald-400 border border-emerald-300/30 shadow-lg shadow-emerald-900/30">
						Book a Free Discovery Call
					</a>
					<a href="#portfolio" className="px-6 py-3 rounded-lg font-semibold text-slate-100 bg-[#334a5d] border border-sky-300/30 hover:bg-[#3f5d75]">
						View Portfolio
					</a>
				</div>
			</div>
		</section>
	);
}

export default Title;
