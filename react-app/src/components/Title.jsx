import Button from "./ui/Button";

function Title() {
	return (
		<section
			id="home"
			className="min-h-screen flex w-full flex-col items-center bg-transparent px-6 pt-6 text-center md:px-10 lg:px-16"
		>
			<div className="flex min-h-[32vh] items-center justify-center">
				<h1 className="font-kode text-4xl font-extrabold leading-tight text-cyber-text sm:text-5xl lg:text-6xl">
					<span className="bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow bg-clip-text text-transparent">
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
