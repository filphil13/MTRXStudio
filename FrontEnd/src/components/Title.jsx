import MTRXLogo from '../assets/1.svg';

function Title() {
	return (
		<section id='home' className='min-h-[calc(100vh-7rem)] pt-0 bg-[#202c39] justify-center items-center text-center'>
			
			<img src={MTRXLogo} alt="Company Logo" className='h-1/6' />

			<h1 className="mb-4 text-6xl font-extrabold font-kode text-gray-900 dark:text-white  md:text-5xl lg:text-6xl">
				<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
					MTRX
				</span>
				{' '}Studio
			</h1>

			<p className="text-lg text-center font-normal text-gray-500 lg:text-xl dark:text-gray-400">
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

		
		</section>
	);
}

export default Title;
