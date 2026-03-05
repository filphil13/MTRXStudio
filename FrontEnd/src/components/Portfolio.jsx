function Portfolio() {
  return (
    <section id='portfolio' className='bg-[#202c39] text-gray-300 px-5 py-16'>
      <div className='max-w-screen-xl mx-auto'>
        <h2 className='text-4xl font-extrabold text-center mb-4 text-white'>Recent Work</h2>
        <p className='text-center text-gray-400 mb-10'>
          A sample of business websites designed to convert visitors into leads.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <article className='rounded-lg border border-gray-700 bg-[#283845] p-6'>
            <h3 className='text-xl font-semibold text-white mb-2'>Local Service Business</h3>
            <p className='text-sm text-gray-300 mb-4'>
              Redesigned a dated website into a modern, mobile-first lead generation site.
            </p>
            <p className='text-sm font-medium text-emerald-400'>Result: More quote requests in the first month.</p>
          </article>

          <article className='rounded-lg border border-gray-700 bg-[#283845] p-6'>
            <h3 className='text-xl font-semibold text-white mb-2'>E-commerce Launch</h3>
            <p className='text-sm text-gray-300 mb-4'>
              Built a streamlined storefront with clear product pages and checkout flow.
            </p>
            <p className='text-sm font-medium text-emerald-400'>Result: Improved conversion rate after launch.</p>
          </article>

          <article className='rounded-lg border border-gray-700 bg-[#283845] p-6'>
            <h3 className='text-xl font-semibold text-white mb-2'>Startup Landing Page</h3>
            <p className='text-sm text-gray-300 mb-4'>
              Created a conversion-focused landing page with strong messaging and CTAs.
            </p>
            <p className='text-sm font-medium text-emerald-400'>Result: Higher demo booking volume from paid traffic.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;