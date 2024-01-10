import React from "react";

const Contact = () => {
  return (
    <>
      <div
        name="contact"
        className="bg-[#0a192f] w-full h-screen flex justify-center items-center p-4"
      >
        <form
          action="mailto:hersisidiq@gmail.com"
          className="flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="inline text-4xl font-bold text-white border-b-4 border-red-600">
              Contact
            </p>
            <p className="py-4 text-gray-300">
              Complete the form below or send an email
            </p>
          </div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="text-black p-2 bg-[#ccd6f6] w-full rounded-md"
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="my-4 p-2 bg-[#ccd6f6] w-full rounded-md"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="p-2 bg-[#ccd6f6] w-full rounded-md"
            rows="10"
          ></textarea>
          <button className="flex items-center px-4 py-3 mx-auto my-8 text-white border-2 hover:bg-red-600 hover:border-red-600 hover:scale-150 hover:duration-300">
            Shoot me an email
          </button>
        </form>
      </div>
      <footer className="text-center text-white bg-[#0a192f]" id="contact">
  <h3 className="inline text-4xl font-bold text-white border-b-4 border-red-600">Contact Details</h3>
  {/* Grid container */}
  <div className="items-center inline p-4 mx-auto">
    {/* Section: Social media*/}
    <section name="social" className="pt-8 mb-4 ">
      {/* Google */}
      <a
        className="relative h-16 p-4 m-1 text-2xl"
        href="mailto:hersisidiq@gmail.com"
        role="button"
      >
        <i className="fab fa-google hover:scale-150 hover:duration-300 hover:text-red-600"></i>
      </a>

      {/* Linkedin */}
      <a
        className="relative h-16 p-4 m-1 text-2xl"
        href="https://uk.linkedin.com/in/sidiq-hersi-471437115"
        role="button"
      >
        <i className="fab fa-linkedin-in hover:scale-150 hover:duration-300 hover:text-red-600"></i>
      </a>

      {/* Github */}
      <a
        className="relative h-16 p-4 m-1 text-2xl "
        href="https://github.com/Sidiq96"
        role="button"
      >
        <i className="fab fa-github hover:scale-150 hover:duration-300 hover:text-red-600"></i>
        
      </a>
      {/* Resume */}
      <a
        className="relative h-16 p-4 m-1 text-2xl "
        href="https://docs.google.com/document/d/1ZCOHGa3dGkv1AQeIDplvjI630so82izDR7YZt4OKvek/edit?usp=sharing"
        role="button"
      >
        <i className="hover:duration-300 fa-regular fa-file hover:scale-150 hover:text-red-600"></i>
        
      </a>
    </section>
  </div>
</footer>

    </>
  );
};

export default Contact;
