import PropTypes from 'prop-types';

const Work = ({ projects }) => (
  <div className="pb-8">
    <p className="inline mt-20 text-4xl font-bold text-gray-300 border-b-4 border-pink-600">
      Work
    </p>
    <p className="py-6">Check out some of my recent work</p>
  
    {/* Container for projects */}
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {/* Grid Item */}
      {projects.map((item, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url(${item.image})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md 
          flex justify-center text-center items-center mx-auto content-div "
        >
          {/* Hover effect for images */}
          <div className="opacity-0 group-hover:opacity-100 ">
            <span className="text-2xl font-bold tracking-wider text-white ">
              {item.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

Work.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Work;