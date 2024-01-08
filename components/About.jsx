import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-red-500'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Sidiq and welcome to my website.</p>
            </div>
            <div>
              <p>Motivated and aspiring Front-End Web Developer with a background in Computer Science and a strong passion for creating visually appealing and user-friendly websites. Bring a solid foundation in HTML, CSS and JavaScript, coupled with a keen eye for design and a commitment to delivering a seamless user experience. Experience includes building responsive web applications, optimising website performance, and ensuring cross-browser compatibility.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
