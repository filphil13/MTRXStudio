function Title() {
	return (
		<section
			id="home"
			className="flex w-full pt-0 flex-col bg-transparent items-center md:flex-col"
		>
			<div className="flex items-center min-h-[50vh] justify-center text-center md:w-full">
				<h1 className=" text-6xl pb-28 font-extrabold font-kode text-gray-900 dark:text-white  md:text-5xl lg:text-6xl">
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow ">
						MTRX
					</span>{" "}
					Studio
				</h1>
			</div>

			<div className="flex flex-col min-h-[50vh] items-center justify-center text-center md:w-full">
				<p className="text-md text-center font-kode font-normal text-gray-500 lg:text-lg dark:text-gray-400">
					We design high-converting websites for growing businesses
					that want more leads, trust, and sales.
				</p>

				<div className="mt-8 flex justify-center gap-4">
					<a
						href="#contact"
						className="
						px-6 py-3 rounded-lg font-semibold text-cyber-text
						border border-cyber-border
						bg-cyber-accent
						bg-[length:0%_100%]
						bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow
						bg-no-repeat
						hover:bg-[length:100%_100%]
						transition-[background-size,box-shadow] duration-300
						shadow-lg hover:shadow-cyber-glow/50 
						hover:[text-shadow:0.5px_0_0_#000,-0.5px_0_0_#000,0_0.5px_0_#000,0_-0.5px_0_#000]
						text-lg"
					>
						Book a Free Discovery Call
					</a>
					<a
						href="#portfolio"
						className="px-6 py-3 rounded-lg font-semibold
						text-cyber-accent bg-cyber-void border border-cyber-border
						hover:bg-cyber-purpleHover
						bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow
						bg-[length:0%_100%] bg-no-repeat hover:bg-[length:100%_100%]
						transition-[background-size,box-shadow] duration-300 shadow-lg hover:shadow-cyber-glow/50
						hover:text-cyber-text hover:[text-shadow:0.5px_0_0_#000,-0.5px_0_0_#000,0_0.5px_0_#000,0_-0.5px_0_#000] text-lg
						"
					>
						View Portfolio
					</a>
				</div>
			</div>
		</section>
	);
}

export default Title;
