import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "./ui/Button";

function ContactUs() {
	const form = useRef();
	const [disableSubmit, setDisableSubmit] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_o63cf0c", "contact_us_form", form.current, {
				publicKey: "TCQgDxU8ohN4ocHE9",
			})
			.then(
				() => {
					console.log("SUCCESS!");
					setDisableSubmit(true);
				},
				(error) => {
					console.log("FAILED...", error.text);
				},
			);
	};

	return (
		<section
			id="contact"
			className="pt-0 min-h-[calc(100vh-7rem)] flex items-center justify-center"
		>
			<div className="grid grid-cols-1 text-center items-center gap-16 p-6 mx-auto w-full max-w-2xl  min-h-[calc(100vh-7rem)] justify-center">
				<div>
					<h1 className="mb-4 text-6xl font-extrabold font-kode text-gray-900 dark:text-cyber-text  md:text-5xl lg:text-6xl">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow">
							Let's
						</span>{" "}
						Talk
					</h1>
					<p className="text-[15px] text-slate-300 mt-4 leading-relaxed">
						Have some big idea or brand to develop and need help?
						Then reach out we'd love to hear about your project and
						provide help.
					</p>

					<div className="mt-8 mx-auto flex flex-col sm:flex-row justify-evenly gap-6">
						<div className="mt-5 sm:mt-12 w-full max-w-md sm:max-w-none sm:w-1/2">
							<div
								className="
								group flex items-center gap-4
								p-4 rounded-xl
								border border-cyber-border
								bg-cyber-surface/50 backdrop-blur-xl
								transition-all duration-300
								hover:-translate-y-1
								hover:shadow-[0_0_25px_rgba(255,46,219,0.12)]
								"
							>
								{/* ICON */}
								<div
									className="
									flex items-center justify-center
									w-14 h-14 rounded-lg
									bg-cyber-surface border border-cyber-border
									transition-all duration-300
									group-hover:shadow-[0_0_12px_rgba(255,46,219,0.2)]
									"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 14 14"
										className="w-7 h-7"
									>
										<defs>
											<linearGradient
												id="cyberStroke"
												x1="0%"
												y1="0%"
												x2="100%"
												y2="100%"
											>
												<stop
													offset="0%"
													stopColor="#A855F7"
												/>
												<stop
													offset="50%"
													stopColor="#FF2EDB"
												/>
												<stop
													offset="100%"
													stopColor="#FF6BFF"
												/>
											</linearGradient>
										</defs>

										<g>
											<path
												stroke="url(#cyberStroke)"
												strokeLinecap="round"
												strokeLinejoin="round"
												d="m0.5 4 5.93079 4.10593c0.34245 0.23708 0.79598 0.23708 1.13842 0L13.5 4"
												strokeWidth="1"
											/>
											<path
												stroke="url(#cyberStroke)"
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M0.5 11.5v-9c0 -0.55228 0.447715 -1 1 -1h11c0.5523 0 1 0.44771 1 1v9c0 0.5523 -0.4477 1 -1 1h-11c-0.552285 0 -1 -0.4477 -1 -1Z"
												strokeWidth="1"
											/>
										</g>
									</svg>
								</div>

								{/* TEXT */}
								<div className="flex flex-col">
									<span className="text-xs text-cyber-muted tracking-wide uppercase">
										Email
									</span>

									<a
										href="mailto:info@example.com"
										className="
										font-semibold text-cyber-text text-lg

										bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow
										bg-clip-text
										bg-[length:0%_100%] bg-no-repeat
										hover:bg-[length:100%_100%]
										hover:text-transparent

										transition-[background-size,color] duration-300
										"
									>
										info@mtrx-studio.com
									</a>
								</div>
							</div>
						</div>

						<div className="mt-5 sm:mt-12 w-full max-w-md sm:max-w-none sm:w-1/2">
							<div
								className="
								group flex items-center gap-4
								p-4 rounded-xl
								border border-cyber-border
								bg-cyber-surface/50 backdrop-blur-xl
								transition-all duration-300
								hover:-translate-y-1
								hover:shadow-[0_0_25px_rgba(255,46,219,0.12)]
								"
							>
								{/* ICON */}
								<div
									className="
									flex items-center justify-center
									w-14 h-14 rounded-lg
									bg-cyber-surface border border-cyber-border
									transition-all duration-300
									group-hover:shadow-[0_0_12px_rgba(255,46,219,0.2)]
									"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 14 14"
										className="w-6 h-6 sm:w-7 sm:h-7"
									>
										<defs>
											<linearGradient
												id="cyberStrokePhone"
												x1="0%"
												y1="0%"
												x2="100%"
												y2="100%"
											>
												<stop
													offset="0%"
													stopColor="#A855F7"
												/>{" "}
												{/* cyber-purple */}
												<stop
													offset="50%"
													stopColor="#FF2EDB"
												/>{" "}
												{/* cyber-accent */}
												<stop
													offset="100%"
													stopColor="#FF6BFF"
												/>{" "}
												{/* cyber-glow */}
											</linearGradient>
										</defs>

										<path
											stroke="url(#cyberStrokePhone)"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1"
											d="M5.24782 12.9909c-0.61454 0.397 -1.34685 0.5701 -2.0738 0.49 -0.72694 -0.0801 -1.40419 -0.4084 -1.91785 -0.9298l-0.449065 -0.4398C0.610232 11.9097 0.5 11.6388 0.5 11.3568c0 -0.2821 0.110232 -0.5529 0.307105 -0.7546L2.71312 8.71321c0.19969 -0.19654 0.46846 -0.30667 0.74844 -0.30667 0.27997 0 0.54875 0.11013 0.74843 0.30667 0.20137 0.19718 0.47181 0.30758 0.75343 0.30758 0.28162 0 0.55205 -0.1104 0.75342 -0.30758l2.99374 -2.99834c0.09987 -0.09857 0.17918 -0.21604 0.23331 -0.34558 0.05413 -0.12955 0.08201 -0.26857 0.08201 -0.409s-0.02788 -0.27946 -0.08201 -0.40901c-0.05413 -0.12954 -0.13344 -0.24701 -0.23331 -0.34558 -0.19624 -0.19999 -0.3062 -0.46918 -0.3062 -0.74958 0 -0.28041 0.10996 -0.5496 0.3062 -0.74959L10.6066 0.807577C10.808 0.610401 11.0784 0.5 11.36 0.5c0.2817 0 0.5521 0.110401 0.7535 0.307577l0.4391 0.449753c0.5205 0.51446 0.8483 1.19274 0.9283 1.92081 0.08 0.72806 -0.0928 1.4615 -0.4893 2.07698 -2.0657 3.04905 -4.69409 5.67468 -7.74378 7.73578Z"
										/>
									</svg>
								</div>

								{/* TEXT */}
								<div className="flex flex-col">
									<span className="text-xs text-cyber-muted tracking-wide uppercase">
										Phone
									</span>

									<a
										href="tel:123-456-7890"
										className="
										font-semibold text-cyber-text text-lg

										bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow
										bg-clip-text
										bg-[length:0%_100%] bg-no-repeat
										hover:bg-[length:100%_100%]
										hover:text-transparent

										transition-[background-size,color] duration-300
										"
									>
										647-609-4761
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<form
					ref={form}
					onSubmit={sendEmail}
					className="
						w-full max-w-2xl mx-auto
						rounded-2xl border border-cyber-border
						bg-cyber-surface/60 backdrop-blur-xl
						p-6 md:p-8
						space-y-5
						shadow-[0_0_30px_rgba(0,0,0,0.25)]
						"
				>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
						<div className="relative">
							<input
								type="text"
								id="first_name"
								name="user_first_name"
								placeholder=" "
								required
								className="
									peer w-full rounded-xl
									border border-cyber-border
									bg-cyber-surface/80
									px-4 pt-6 pb-2
									text-sm text-cyber-text
									outline-none
									transition-all duration-300

									focus:border-cyber-glow
									focus:shadow-[0_0_0_1px_#FF2EDB,0_0_16px_rgba(255,46,219,0.15)]
									"
							/>
							<label
								htmlFor="first_name"
								className="
									absolute left-4 top-2
									text-xs text-cyber-muted
									transition-all duration-300

									peer-placeholder-shown:top-4
									peer-placeholder-shown:text-sm

									peer-focus:top-2
									peer-focus:text-xs
									peer-focus:text-cyber-accent
									"
							>
								First name
							</label>
						</div>

						<div className="relative">
							<input
								type="text"
								id="last_name"
								name="user_last_name"
								placeholder=" "
								required
								className="
									peer w-full rounded-xl
									border border-cyber-border
									bg-cyber-surface/80
									px-4 pt-6 pb-2
									text-sm text-cyber-text
									outline-none
									transition-all duration-300

									focus:border-cyber-glow
									focus:shadow-[0_0_0_1px_#FF2EDB,0_0_16px_rgba(255,46,219,0.15)]
									"
							/>
							<label
								htmlFor="last_name"
								className="
									absolute left-4 top-2
									text-xs text-cyber-muted
									transition-all duration-300

									peer-placeholder-shown:top-4
									peer-placeholder-shown:text-sm

									peer-focus:top-2
									peer-focus:text-xs
									peer-focus:text-cyber-accent
									"
							>
								Last name
							</label>
						</div>
					</div>

					<div className="relative">
						<input
							type="email"
							id="email"
							name="user_email"
							placeholder=" "
							required
							className="
								peer w-full rounded-xl
								border border-cyber-border
								bg-cyber-surface/80
								px-4 pt-6 pb-2
								text-sm text-cyber-text
								outline-none
								transition-all duration-300

								focus:border-cyber-glow
								focus:shadow-[0_0_0_1px_#FF2EDB,0_0_16px_rgba(255,46,219,0.15)]
								"
						/>
						<label
							htmlFor="email"
							className="
								absolute left-4 top-2
								text-xs text-cyber-muted
								transition-all duration-300

								peer-placeholder-shown:top-4
								peer-placeholder-shown:text-sm

								peer-focus:top-2
								peer-focus:text-xs
								peer-focus:text-cyber-accent
								"
						>
							Email address
						</label>
					</div>

					<div className="relative">
						<input
							type="tel"
							id="phone"
							name="user_tel"
							placeholder=" "
							required
							className="
								peer w-full rounded-xl
								border border-cyber-border
								bg-cyber-surface/80
								px-4 pt-6 pb-2
								text-sm text-cyber-text
								outline-none
								transition-all duration-300

								focus:border-cyber-glow
								focus:shadow-[0_0_0_1px_#FF2EDB,0_0_16px_rgba(255,46,219,0.15)]
								"
						/>
						<label
							htmlFor="phone"
							className="
								absolute left-4 top-2
								text-xs text-cyber-muted
								transition-all duration-300

								peer-placeholder-shown:top-4
								peer-placeholder-shown:text-sm

								peer-focus:top-2
								peer-focus:text-xs
								peer-focus:text-cyber-accent
								"
						>
							Phone number
						</label>
					</div>

					<div className="relative">
						<textarea
							id="message"
							name="message"
							placeholder=" "
							rows="6"
							required
							className="
								peer w-full rounded-xl
								border border-cyber-border
								bg-cyber-surface/80
								px-4 pt-6 pb-3
								text-sm text-cyber-text
								outline-none resize-none
								transition-all duration-300

								focus:border-cyber-glow
								focus:shadow-[0_0_0_1px_#FF2EDB,0_0_16px_rgba(255,46,219,0.15)]
								"
						/>
						<label
							htmlFor="message"
							className="
								absolute left-4 top-2
								text-xs text-cyber-muted
								transition-all duration-300

								peer-placeholder-shown:top-4
								peer-placeholder-shown:text-sm

								peer-focus:top-2
								peer-focus:text-xs
								peer-focus:text-cyber-accent
								"
						>
							Tell us about your project
						</label>
					</div>

					<Button
						variant="primary"
						type="submit"
						disabled={disableSubmit}
						className="w-full !mt-2"
					>
						{disableSubmit ? "Sending..." : "Send message"}
					</Button>
				</form>
			</div>
		</section>
	);
}

export default ContactUs;
