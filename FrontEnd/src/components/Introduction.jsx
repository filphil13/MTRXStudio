
import Card from './Card';
import './Introduction.css';

function Introduction() {
  return (
    <section id='services' className='bg-[#283845] min-h-[calc(100vh-7rem)] text-gray-500'>

      	<h2 className="mb-4 text-6xl font-extrabold font-kode text-gray-900 dark:text-white  md:text-5xl lg:text-6xl">
				<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
					What
				</span>
				{' '}We Do
		</h2>

      <div className="flex flex-wrap justify-center gap-2 mt-10 w-full max-w-screen-xl px-2">
        <Card
          title="Website Design"
          svg={
            <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"></path>
            </svg>
          }
          body="We specialize in creating visually stunning, user-friendly websites that captivate your audience and drive results. Our team of expert designers will work with you to bring your vision to life and create a digital experience that sets you apart from the competition."
          link="#contact"
        />

        <Card
          title="Database Management"
          svg={
            <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"></path>
            </svg>
          }
          body="We offer comprehensive database management solutions to help you organize, store, and access your data with ease. Our team will work with you to develop a custom database system that meets your unique needs and ensures your data is secure and accessible."
          link="#contact"
        />

        <Card
          title="Data Analysis"
          svg={
            <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"></path>
			</svg>
          }
          body="We provide expert data analysis services to help you make informed decisions and drive business growth. Our team will help you collect, analyze, and interpret your data to uncover valuable insights and opportunities for improvement."
          link="#contact"
        />

		
      </div>

      
    </section>
  );
}

export default Introduction;
