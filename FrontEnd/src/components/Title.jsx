import MTRXLogo from '../assets/1.svg';

function Title() {
  return (
    <section id='home' className='min-h-[calc(100vh-12rem)] px-5 pt-0 pb-5 bg-[#202c39] justify-center'>
      <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={MTRXLogo} alt="Company Logo" className='h-36' />
      </a>
	  
      <h1 className="mb-4 text-6xl font-extrabold font-kode text-gray-900 dark:text-white  md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          MTRX
        </span>
        {' '}Studio
      </h1>

      <p className="text-lg text-center font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        We design high-converting websites for growing businesses that want more leads, trust, and sales.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <a href="#contact" className="px-6 py-3 rounded-lg font-semibold text-white bg-emerald-600 hover:bg-emerald-700">
          Book a Free Discovery Call
        </a>
        <a href="#portfolio" className="px-6 py-3 rounded-lg font-semibold text-white border border-gray-400 hover:bg-gray-700">
          View Portfolio
        </a>
      </div>

      
    </section>
  );
}

export default Title;
