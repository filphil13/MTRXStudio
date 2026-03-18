import PropTypes from "prop-types";
import "./css/Card.css";

function Card({ title, svg, body, link }) {
	return (
		<div className="p-4 w-full max-w-sm">
			<div className="card-shell group relative rounded-2xl p-[1px] transition-all duration-300 hover:-translate-y-1">
				<div className="card-gradient-border absolute inset-0 rounded-2xl opacity-0 transition-all duration-300 group-hover:opacity-100" />

				<article className="card-inner relative z-10 flex h-full min-h-[420px] flex-col rounded-2xl border border-cyber-border bg-cyber-surface p-8 transition-all duration-300 group-hover:border-transparent group-hover:shadow-[0_0_25px_rgba(255,46,219,0.12)]">
					<div className="mb-6 text-center">
						<div className="card-icon-wrap mx-auto my-6 flex h-52 w-52 items-center justify-center text-cyber-text transition-all duration-300 group-hover:text-cyber-accent">
							{svg}
						</div>

						<h2 className="text-cyber-text text-lg font-medium">
							{title}
						</h2>
					</div>

					<p className="text-cyber-muted text-base leading-relaxed text-center flex-grow">
						{body}
					</p>

					<a
						href={link}
						className="mt-6 inline-flex items-center justify-center font-medium text-cyber-text transition-all duration-300 hover:text-cyber-accent"
					>
						Learn More
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
							viewBox="0 0 24 24"
						>
							<path d="M5 12h14M12 5l7 7-7 7"></path>
						</svg>
					</a>
				</article>
			</div>
		</div>
	);
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	svg: PropTypes.node.isRequired,
	body: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};

export default Card;
