import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "./ui/Button";

function ContactUs() {
	const form = useRef();
	const [disableSubmit, setDisableSubmit] = useState(false);
	const [buttonText, setButtonText] = useState("Send message");
	const [contactMethod, setContactMethod] = useState("email");

	const sendEmail = (e) => {
		setDisableSubmit(true);
		setButtonText("Sending...");
		e.preventDefault();

		emailjs
			.sendForm("Mtrx_Studio", "contact_us_form", form.current, {
				publicKey: "nsFzgifHp3J6haAMV",
			})
			.then(
				() => {
					console.log("SUCCESS!");
					setDisableSubmit(true);
					setButtonText("Sent!");
				},
				(error) => {
					console.log("FAILED...", error.text);
					setButtonText("Send message");
					setDisableSubmit(false);
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
					<h1 className="mb-4 text-6xl font-extrabold font-kode text-white  md:text-5xl lg:text-6xl">
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

					<div className="space-y-2">
						<span className="text-xs text-cyber-muted tracking-wide">
							How would you like to be contacted?
						</span>

						<div className="flex gap-3">
							{/* Email */}
							<label className="cursor-pointer flex-1">
								<input
									type="radio"
									name="contact_method"
									value="email"
									checked={contactMethod === "email"}
									onChange={(e) =>
										setContactMethod(e.target.value)
									}
									className="hidden"
								/>
								<div
									className={`
          w-full text-center text-sm
          px-4 py-3 rounded-xl
          border transition-all duration-300
          ${
				contactMethod === "email"
					? "bg-cyber-surface border-cyber-glow text-white shadow-[0_0_12px_rgba(255,46,219,0.15)]"
					: "bg-cyber-surface/60 border-cyber-border text-cyber-muted hover:border-cyber-glow hover:text-white"
			}
        `}
								>
									Email
								</div>
							</label>

							{/* Phone */}
							<label className="cursor-pointer flex-1">
								<input
									type="radio"
									name="contact_method"
									value="phone"
									checked={contactMethod === "phone"}
									onChange={(e) =>
										setContactMethod(e.target.value)
									}
									className="hidden"
								/>
								<div
									className={`
          w-full text-center text-sm
          px-4 py-3 rounded-xl
          border transition-all duration-300
          ${
				contactMethod === "phone"
					? "bg-cyber-surface border-cyber-glow text-white shadow-[0_0_12px_rgba(255,46,219,0.15)]"
					: "bg-cyber-surface/60 border-cyber-border text-cyber-muted hover:border-cyber-glow hover:text-white"
			}
        `}
								>
									Phone
								</div>
							</label>
						</div>
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
						id="contact-submit"
						disabled={disableSubmit}
						className="w-full !mt-2"
					>
						{buttonText}
					</Button>
				</form>
			</div>
		</section>
	);
}

export default ContactUs;
