

function Card( title, svg, body, link) {
  return (
    <div className="p-4 max-w-sm">
					<div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
						<div className="flex items-center mb-3">
							<div
								className="w-12 h-12 p-1 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
								{svg}
							</div>
							<h2 className="text-white dark:text-white text-lg font-medium">
                {title}
              </h2>
						</div>
						<div className="flex flex-col justify-between flex-grow">
							<p className="leading-relaxed text-base text-center text-white dark:text-gray-300">
                {body}
							</p>
							<a href={link} className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
								<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
									strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
							</a>
						</div>
					</div>
				</div>
  );
}

export default Card;
