import { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

function ContactUs() {
	const form = useRef();
	const [disableSubmit, setDisableSubmit] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('contact_us', 'contact_us_form', form.current, {
				publicKey: 'TCQgDxU8ohN4ocHE9',
			})
			.then(
				() => {
					console.log('SUCCESS!');
					setDisableSubmit(true);
			
				},
				(error) => {
					console.log('FAILED...', error.text);
				}
			);
	};

	return (
		<section id='contact' className='bg-[#748cab] min-h-[calc(100vh-7rem)]'>
			<div className="py-4 lg:py-8 px-4 mx-auto rounded-xl border-2 border-black max-w-screen-md bg-[#202c39]">
				<h2 className="mb-4 text-6xl font-extrabold font-kode text-gray-900 dark:text-white  md:text-5xl lg:text-6xl">
				<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
					Contact
				</span>
				{' '}Us
			</h2>
				<p className="mb-8 lg:mb-16 font-light text-center text-gray-300 sm:text-xl">
					Have a brilliant tech concept for your business or in need of expert guidance to launch your online store? Reach out to us today, and let&apos;s turn your ideas into reality.
				</p>
				<form ref={form} onSubmit={sendEmail} className="space-y-8">
					<div>
						<label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
							Your Name
						</label>
						<input
							type="text"
							id="name"
							name="user_name"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
							placeholder="John Smith"
							required
						/>
					</div>
					<div>
						<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
							Your Email
						</label>
						<input
							type="email"
							id="email"
							name="user_email"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
							placeholder="name@flowbite.com"
							required
						/>
					</div>
					<div className="sm:col-span-2">
						<label
							htmlFor="message"
							className="block mb-2 text-sm font-medium text-gray-300"
						>
							Your Message
						</label>
						<textarea
							id="message"
							name="message"
							rows="6"
							className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="Write your message here..."
						></textarea>
					</div>
					<button
						type="submit"
						disabled={disableSubmit}
						className="py-3 px-5 text-sm font-medium text-center  text-gray-300 bg-gray-700 shadow-sm border rounded-lg border-gray-300 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
					>
						Send message
					</button>
				</form>
			</div>
		</section>
	);
}

export default ContactUs;

