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

			<div className="flex w-full max-w-3xl flex-col items-center justify-center sm:mt-80 mt-60 ">
				<h2 className="text-balance font-kode text-2xl font-semibold leading-snug text-cyber-text sm:text-3xl md:text-4xl">
					Websites built to earn trust and drive action.
				</h2>

				<p className="mt-5 max-w-2xl text-sm leading-relaxed text-cyber-muted sm:text-base md:text-lg">
					We design modern, high-converting websites for growing
					businesses that want to look more credible, attract better
					leads, and turn more visitors into customers.
				</p>

				<div className="mt-8 flex w-full flex-col gap-4 px-2 sm:w-auto sm:flex-row sm:px-0">
					<Button variant="primary" as="a" href="#contact">
						Book Free Discovery Call
					</Button>

					<Button variant="secondary" as="a" href="#portfolio">
						View Portfolio
					</Button>
				</div>
			</div>
		</section>
	);
}

export default Title;
