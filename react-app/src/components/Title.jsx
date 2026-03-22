import Button from "./ui/Button";

function Title() {
	return (
		<section
			id="home"
			className="flex w-full pt-0 flex-col pb-56 bg-transparent items-center md:flex-col"
		>
			<div className="flex items-center min-h-[50vh] justify-center text-center md:w-full">
				<h1 className=" text-6xl pb-28 font-extrabold font-kode text-white  md:text-5xl lg:text-6xl">
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

				<div className="mt-8 flex flex-col px-6 sm:flex-row justify-center gap-4 w-full sm:w-auto">
					<Button variant="primary" as="a" href="#contact">
						Book Free Discovery Call
					</Button>

					<Button variant="secondary" as="a" href="#contact">
						View Portfolio
					</Button>
				</div>
			</div>
		</section>
	);
}

export default Title;
