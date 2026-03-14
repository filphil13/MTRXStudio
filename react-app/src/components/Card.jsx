import { useState } from "react";
import PropTypes from "prop-types";
import "./Card.css";

function Card({ title, svg, body, link }) {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleKeyDown = (event) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			setIsFlipped((prev) => !prev);
		}
	};

	return (
		<div className="p-4 w-full max-w-sm">
			<div
				role="button"
				tabIndex={0}
				onClick={() => setIsFlipped((prev) => !prev)}
				onKeyDown={handleKeyDown}
				className={`flip-card ${isFlipped ? "flipped" : ""}`}
			>
				<div className="flip-card-inner">
					<div className="flip-face flip-front flex h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
						<div className="mb-3 text-center">
							<div className="card-icon-wrap w-52 h-52 mx-auto my-6 flex items-center justify-center text-white">
								{svg}
							</div>
							<h1 className="text-white dark:text-white text-lg font-medium">
								{title}
							</h1>
						</div>
					</div>

					<div className="flip-face flip-back items-center flex h-full dark:bg-gray-800 bg-[#1f2d3a] p-8 flex-col">
						<h2 className="text-white text-lg font-medium mb-3">
							{title}
						</h2>
						<p className="leading-relaxed text-base text-center text-gray-200">
							{body}
						</p>
						<a
							href={link}
							className="mt-6 text-white hover:text-blue-400 inline-flex items-center justify-center"
						>
							Learn More
							<svg
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="w-4 h-4 ml-2"
								viewBox="0 0 24 24"
							>
								<path d="M5 12h14M12 5l7 7-7 7"></path>
							</svg>
						</a>
					</div>
				</div>
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
