import { useEffect, useRef, useState } from "react";

export default function CursorTrail() {
	const [dots, setDots] = useState([]);
	const idRef = useRef(0);

	useEffect(() => {
		const handleMove = (e) => {
			const newDot = {
				id: idRef.current++,
				x: e.clientX,
				y: e.clientY,
			};

			setDots((prev) => [...prev, newDot].slice(-8));
		};

		window.addEventListener("mousemove", handleMove);

		return () => {
			window.removeEventListener("mousemove", handleMove);
		};
	}, []);

	useEffect(() => {
		if (!dots.length) return;

		const timeout = setTimeout(() => {
			setDots((prev) => prev.slice(1));
		}, 35);

		return () => clearTimeout(timeout);
	}, [dots]);

	return (
		<div className="pointer-events-none fixed inset-0 z-[9999]">
			{dots.map((dot, index) => {
				const opacity = (index + 1) / dots.length;
				const size = 18 - index * 1.1;

				return (
					<span
						key={dot.id}
						className="absolute rounded-full blur-md"
						style={{
							left: dot.x - size / 2,
							top: dot.y - size / 2,
							width: `${size}px`,
							height: `${size}px`,
							opacity,
							background:
								"radial-gradient(circle, #FF6BFF 0%, #FF2EDB 45%, #A855F7 100%)",
							transform: "translate3d(0,0,0)",
							transition:
								"opacity 0.2s linear, transform 0.2s linear",
						}}
					/>
				);
			})}
		</div>
	);
}
