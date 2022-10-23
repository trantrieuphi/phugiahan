import React from 'react';

// import img
import Image from '../assets/img/about.jpg';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center text-black lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl text-accent font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                PHÚ GIA HÂN
              </h2>
              <p className='mb-4 text-accent'>
                Niềm tin của bạn, là thành công của chúng tôi
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                Là công ty hoạt động trong lĩnh vực thiết kế và thi công các công trình nhà phố, biệt thự, nhà xưởng, hoàn thiện nhà shophouse,... <br />
                <br />
                Chúng tôi hoạt động với triết lý kinh doanh: “Khách hàng là trên hết, chất lượng là số 1”. Với phương châm chất lượng hàng đầu, đạt tiến độ và an toàn, không ngừng đầu tư trang thiết bị, công nghệ hiện đại vào sản xuất và quản lý doanh nghiệp.<br />
              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Liên hệ 
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
