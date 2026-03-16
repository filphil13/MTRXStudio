import PortfolioCard3D from "./PorfolioCard3D";
function Portfolio() {
	return (
		<section
			id="portfolio"
			className=" min-h-[calc(100vh-7rem)] text-gray-300 px-5 py-16"
		>
			<div className="max-w-screen-xl mx-auto">
				<h2 className="mb-4 text-center text-6xl font-extrabold font-kode text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
					<span className="text-transparent  bg-clip-text bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow">
						Recent
					</span>{" "}
					Work
				</h2>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
					<PortfolioCard3D
						title="Local Service Business"
						description="Redesigned a dated website into a modern, mobile-first lead generation site."
						result="Result: More quote requests in the first month."
						coverLabel="SERVICE SITE"
						foregroundLabel="PHONE MOCKUP"
					/>

					<PortfolioCard3D
						title="E-commerce Launch"
						description="Built a streamlined storefront with clear product pages and checkout flow."
						result="Result: Improved conversion rate after launch."
						coverLabel="STOREFRONT"
						foregroundLabel="PRODUCT CARD"
					/>

					<PortfolioCard3D
						title="Startup Landing Page"
						description="Created a conversion-focused landing page with strong messaging and CTAs."
						result="Result: Higher demo booking volume from paid traffic."
						coverLabel="LANDING PAGE"
						foregroundLabel="3D PANEL"
					/>
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
