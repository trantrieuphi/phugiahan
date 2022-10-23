import React from 'react';

// import components
import TestiSlider from './TestiSlider';

const Testimonials = () => {

  return (
    <section id='testimonials' className='section bg-secondary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title text-accent before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block'>
            MẪU NHÀ ĐẸP
          </h2>
          <p className='subtitle text-black'>
            Tổng hợp 1 số mẫu nhà đẹp, liên hệ ngay để tư vấn và thiết kế miễn phí.
          </p>
        </div>
        <TestiSlider />
      </div>
    </section>
  );
};

export default Testimonials;
