import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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

					<div className="mt-12 ">
						{/* <h2 className="text-cyber-text text-base font-semibold">
							Contact Info
						</h2> */}
						<ul className="mt-4">
							<li className="flex items-center">
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 14 14"
										height="3rem"
										width="3rem"
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
								<a
									href="mailto:info@example.com"
									className="text-sm ml-4"
								>
									{/* <small className="block text-slate-300">
										Mail
									</small> */}
									<span
										className="
									font-semibold text-cyber-text cursor-pointer
									bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow
									bg-clip-text
									bg-[length:0%_100%] bg-no-repeat
									hover:bg-[length:100%_100%]
									hover:text-transparent
									transition-[background-size,color] duration-300 text-xl
	"
									>
										info@example.com
									</span>
								</a>
							</li>
						</ul>
					</div>

					{/* <div className="mt-12">
						<h2 className="text-cyber-text text-base font-semibold">
							Socials
						</h2>
						<ul className="flex mt-4 space-x-4">
							<li className="bg-[#334a5d] h-10 w-10 rounded-full flex items-center justify-center shrink-0 border border-sky-400/40">
								<a
									href="https://facebook.com"
									target="_blank"
									rel="noreferrer"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20px"
										height="20px"
										fill="#000"
										viewBox="0 0 24 24"
									>
										<path
											d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
											data-original="#000000"
										/>
									</svg>
								</a>
							</li>
							<li className="bg-[#334a5d] h-10 w-10 rounded-full flex items-center justify-center shrink-0 border border-sky-400/40">
								<a
									href="https://linkedin.com"
									target="_blank"
									rel="noreferrer"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20px"
										height="20px"
										fill="#000"
										viewBox="0 0 511 512"
									>
										<path
											d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
											data-original="#000000"
										/>
									</svg>
								</a>
							</li>
							<li className="bg-[#334a5d] h-10 w-10 rounded-full flex items-center justify-center shrink-0 border border-sky-400/40">
								<a
									href="https://instagram.com"
									target="_blank"
									rel="noreferrer"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20px"
										height="20px"
										fill="#000"
										viewBox="0 0 24 24"
									>
										<path d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z"></path>
									</svg>
								</a>
							</li>
						</ul>
					</div> */}
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

					<button
						type="submit"
						disabled={disableSubmit}
						className="
							text-cyber-text bg-cyber-accent hover:shadow-cyber-glow/50
							tracking-wide rounded-xl font-semibold
							px-4 py-3 w-full cursor-pointer !mt-2
							border border-cyber-border shadow-lg shadow-emerald-900/20

							bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow
							bg-[length:0%_100%] bg-no-repeat
							hover:bg-[length:100%_100%]
							transition-[background-size,box-shadow,transform] duration-300
							hover:[text-shadow:0.5px_0_0_#000,-0.5px_0_0_#000,0_0.5px_0_#000,0_-0.5px_0_#000]
							hover:scale-[1.01] active:scale-[0.99]
							text-lg
							disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100
							"
					>
						Send message
					</button>
				</form>
			</div>
		</section>
	);
}

export default ContactUs;
