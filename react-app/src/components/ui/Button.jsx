const variants = {
	primary: `
		text-cyber-text bg-cyber-accent
		border border-cyber-border

		bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow
		bg-[length:0%_100%] bg-no-repeat
		hover:bg-[length:100%_100%]

		transition-[background-size,box-shadow] duration-300
		hover:shadow-cyber-glow/50

		hover:[text-shadow:0.5px_0_0_#000,-0.5px_0_0_#000,0_0.5px_0_#000,0_-0.5px_0_#000]
	`,

	secondary: `
		text-cyber-accent bg-cyber-void
		border border-cyber-border

		bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow
		bg-[length:0%_100%] bg-no-repeat
		hover:bg-[length:100%_100%]

		transition-[background-size,box-shadow,color] duration-300
		hover:shadow-cyber-glow/50

		hover:text-cyber-text
		hover:[text-shadow:0.5px_0_0_#000,-0.5px_0_0_#000,0_0.5px_0_#000,0_-0.5px_0_#000]
	`,
};

function Button({
	as = "button",
	href,
	children,
	variant = "primary",
	className = "",
	...props
}) {
	const Comp = as;

	const baseClasses = `
	inline-flex items-center justify-center
	px-6 py-3 rounded-lg font-semibold text-lg
	cursor-pointer
	disabled:opacity-60 disabled:cursor-not-allowed
	disabled:hover:shadow-none
	disabled:hover:bg-[length:0%_100%]
	${variants[variant]}
	${className}
`;

	if (as === "a") {
		return (
			<a href={href} className={baseClasses} {...props}>
				{children}
			</a>
		);
	}

	return (
		<button className={baseClasses} {...props}>
			{children}
		</button>
	);
}

export default Button;
