export default function PortfolioCard3D({
	title,
	description,
	result,
	coverLabel = "PROJECT PREVIEW",
	foregroundLabel = "3D ASSET",
	link,
	foregroundImage,
}) {
	const cardContent = (
		<article className="group relative h-[420px] w-full [perspective:2500px]">
			<div
				className="
          relative h-full w-full overflow-visible rounded-xl
          flex items-end justify-center px-6 pb-6
        "
			>
				{/* BACK WRAPPER / COVER */}
				<div
					className="
            absolute inset-0 -z-10 rounded-xl overflow-hidden
            transition-all duration-500 ease-out
            group-hover:[transform:perspective(900px)_translateY(-5%)_rotateX(25deg)_translateZ(0)]
            group-hover:shadow-[2px_35px_32px_-8px_rgba(0,0,0,0.75)]
          "
				>
					<div className="relative h-full w-full bg-cyber-panel border border-cyber-border">
						<div className="absolute inset-0 bg-gradient-to-br from-cyber-surface via-cyber-panel to-cyber-void" />

						<div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />

						<div className="absolute inset-0 flex items-center justify-center">
							<div className="rounded-full border border-cyber-border bg-cyber-surface/70 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-cyber-muted backdrop-blur-sm">
								{coverLabel}
							</div>
						</div>

						<div
							className="
                pointer-events-none absolute inset-x-0 top-0 h-full opacity-0
                transition-all duration-500
                bg-[linear-gradient(to_top,transparent_46%,rgba(12,13,19,0.5)_68%,rgba(12,13,19,1)_97%)]
                group-hover:opacity-100
              "
						/>

						<div
							className="
                pointer-events-none absolute inset-x-0 bottom-0 h-[80px] opacity-100
                transition-all duration-500
                bg-[linear-gradient(to_bottom,transparent_46%,rgba(12,13,19,0.5)_68%,rgba(12,13,19,1)_97%)]
                group-hover:h-[120px]
              "
						/>
					</div>
				</div>

				{/* TITLE / CONTENT LAYER */}
				<div
					className="
            relative z-10 w-full rounded-xl border border-cyber-border
            bg-cyber-surface/80 p-6 backdrop-blur-md
            transition-transform duration-500 ease-out
            group-hover:[transform:translate3d(0,-50px,100px)]
          "
				>
					<h3 className="mb-2 text-xl font-semibold text-cyber-text">
						{title}
					</h3>
					<p className="mb-4 text-sm text-cyber-muted">
						{description}
					</p>
					<p className="text-sm font-medium text-cyber-accent">
						{result}
					</p>

					{link && (
						<span className="mt-4 inline-block text-sm font-medium text-cyber-glow">
							View Project →
						</span>
					)}
				</div>

				{/* FOREGROUND HOLOGRAPHIC CARD */}
				<div
					className="
            pointer-events-none absolute bottom-14 left-1/2 z-20 w-[72%]
            -translate-x-1/2 opacity-0
            transition-all duration-500 ease-out
            group-hover:opacity-100
            group-hover:[transform:translate3d(-50%,-30%,100px)]
          "
				>
					<div
						className="
              relative aspect-[4/5] overflow-hidden rounded-2xl border border-cyber-glow/40
              bg-gradient-to-b from-cyber-purple/40 via-cyber-accent/30 to-cyber-glow/20
              shadow-[0_0_30px_rgba(255,46,219,0.18)]
              backdrop-blur-sm
              flex items-center justify-center
            "
					>
						{foregroundImage ? (
							<img
								src={foregroundImage}
								alt={`${title} preview`}
								className="w-48 h-48 object-cover"
							/>
						) : (
							<span className="text-xs font-semibold tracking-[0.25em] text-cyber-text/90">
								{foregroundLabel}
							</span>
						)}

						<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cyber-void/50 via-transparent to-white/10" />
					</div>
				</div>
			</div>
		</article>
	);

	if (link) {
		return (
			<a
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={`Open project: ${title}`}
				className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cyber-void"
			>
				{cardContent}
			</a>
		);
	}

	return cardContent;
}
