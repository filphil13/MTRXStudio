import { useEffect, useRef, useState } from "react";

function Team() {
	const teamMembers = [
		{
			name: "All Jay Gaco",
			shortName: "All Jay",
			role: "Front-End Development / UI",
			bio: "I focus on creating modern, user-friendly websites that help businesses look more credible and connect better with their audience. I’m currently studying Web Development at Fanshawe College, where I’ve gained over two years of hands-on experience building responsive, front-end applications and refining user experience. I focus on crafting interfaces that feel clean, intuitive, and professional.",
			traits: ["Front-End Focused", "Mobile-First", "Clean UI"],
			accent: "AJ",
		},
		{
			name: "Fil Madureira",
			shortName: "Fil",
			role: "Development / Systems",
			bio: "I focus on the technical side of our builds, helping ensure everything runs smoothly, efficiently, and reliably. Currently completing a Computer Science degree at TMU, I bring a strong foundation in software development, problem-solving, and system design to every project. I work across the stack to make sure what we build not only looks good, but performs well and scales properly.",
			traits: [
				"Full-Stack Foundation",
				"System Thinking",
				"Performance Focus",
			],
			accent: "FM",
		},
		{
			name: "Josh Welcher",
			shortName: "Josh",
			role: "Creative / Technical",
			bio: "I bridge the gap between creative direction and technical execution. With experience in Python, 3D modeling, and digital design, I help bring ideas to life in ways that feel unique and engaging. From visual concepts to technical problem-solving, I focus on making sure our projects stand out while still being practical and well-executed.",
			traits: ["Creative Tech", "3D & Design", "Problem Solving"],
			accent: "JW",
		},
	];

	const [activeIndex, setActiveIndex] = useState(0);
	const [indicatorStyle, setIndicatorStyle] = useState({});
	const [isVisible, setIsVisible] = useState(true);
	const tabRefs = useRef([]);

	const activeMember = teamMembers[activeIndex];

	useEffect(() => {
		const updateIndicator = () => {
			const activeTab = tabRefs.current[activeIndex];
			if (!activeTab) return;

			setIndicatorStyle({
				width: `${activeTab.offsetWidth}px`,
				transform: `translateX(${activeTab.offsetLeft}px)`,
			});
		};

		updateIndicator();
		window.addEventListener("resize", updateIndicator);
		return () => window.removeEventListener("resize", updateIndicator);
	}, [activeIndex]);

	const handleTabChange = (index) => {
		if (index === activeIndex) return;

		setIsVisible(false);
		setTimeout(() => {
			setActiveIndex(index);
			setIsVisible(true);
		}, 140);
	};

	return (
		<section id="team" className="relative px-6 py-20 md:px-10 lg:px-16">
			<div className="mx-auto max-w-6xl">
				<div className="mx-auto mb-10 max-w-3xl text-center">
					<p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyber-accent">
						About Us
					</p>

					<h2 className="text-4xl font-bold leading-tight text-cyber-text md:text-5xl">
						Meet the team behind the{" "}
						<span className="bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow bg-clip-text text-transparent">
							build
						</span>
					</h2>

					<p className="mt-5 text-base leading-relaxed text-cyber-muted md:text-lg">
						We combine design, development, and strategy to build
						websites that look premium, feel modern, and help
						businesses convert more of the right traffic.
					</p>
				</div>

				<div className="rounded-3xl border border-cyber-border bg-cyber-surface/40 p-4 backdrop-blur-xl md:p-6">
					<div className="mx-auto mb-8 w-full max-w-3xl">
						<div className="relative mx-auto w-full max-w-3xl">
							<div
								role="tablist"
								aria-label="Meet the team"
								className="relative grid w-full grid-cols-3 items-center rounded-full bg-transparent p-0"
							>
								<div
									aria-hidden="true"
									className="absolute top-1 bottom-1 left-1 rounded-full bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow shadow-lg shadow-cyber-glow/20 transition-all duration-300 ease-out"
									style={indicatorStyle}
								/>

								{teamMembers.map((member, index) => {
									const isActive = index === activeIndex;

									return (
										<button
											key={member.name}
											ref={(el) => {
												tabRefs.current[index] = el;
											}}
											type="button"
											role="tab"
											aria-selected={isActive}
											aria-controls={`team-panel-${index}`}
											id={`team-tab-${index}`}
											onClick={() =>
												handleTabChange(index)
											}
											className={`
												relative z-10 flex w-full items-center justify-center
												rounded-full px-4 sm:px-5 py-3 text-sm font-semibold
												transition-all duration-300
												${
													isActive
														? "text-cyber-text hover:[text-shadow:0.5px_0_0_#000,-0.5px_0_0_#000,0_0.5px_0_#000,0_-0.5px_0_#000]"
														: "text-cyber-muted hover:text-cyber-text"
												}
											`}
										>
											{/* Mobile → First name */}
											<span className="sm:hidden">
												{member.shortName}
											</span>

											<span className="hidden sm:inline">
												{member.name}
											</span>
										</button>
									);
								})}
							</div>
						</div>
					</div>

					<div
						id={`team-panel-${activeIndex}`}
						role="tabpanel"
						aria-labelledby={`team-tab-${activeIndex}`}
						className={`
							rounded-3xl border border-cyber-border bg-cyber-surface/70 p-6 md:p-8
							transition-all duration-300
							${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
						`}
					>
						<div className="grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr] md:items-center">
							<div className="flex justify-center md:justify-start">
								<div className="relative">
									<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyber-purple/25 via-cyber-accent/20 to-cyber-glow/25 blur-2xl" />
									<div className="relative flex h-40 w-40 items-center justify-center rounded-3xl border border-cyber-border bg-cyber-void text-4xl font-bold text-cyber-text shadow-[0_0_25px_rgba(255,46,219,0.12)] md:h-48 md:w-48">
										{activeMember.accent}
									</div>
								</div>
							</div>

							<div>
								<p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyber-accent">
									{activeMember.role}
								</p>

								<h3 className="text-3xl font-semibold text-cyber-text">
									{activeMember.name}
								</h3>

								<p className="mt-5 max-w-2xl text-sm leading-relaxed text-cyber-muted md:text-base">
									{activeMember.bio}
								</p>

								<div className="mt-6 flex flex-wrap gap-2">
									{activeMember.traits.map((trait) => (
										<span
											key={trait}
											className="rounded-full border border-cyber-border bg-cyber-void/80 px-3 py-1.5 text-xs font-medium tracking-wide text-cyber-text"
										>
											{trait}
										</span>
									))}
								</div>

								<div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-cyber-border to-transparent" />

								<p className="mt-6 text-sm leading-relaxed text-cyber-muted">
									We build with clarity, collaboration, and a
									focus on helping clients look more credible
									and convert more effectively online.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Team;
